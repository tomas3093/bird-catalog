import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { SpeciesDetail } from '../../core/model/species';
import { computed, inject } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { map, tap } from 'rxjs';
import { TranslateService } from '../../core/services/translate.service';
import { getSimilarSpecies, getRandomItems, getSpeciesSubset } from '../../core/misc/util';
import { GroupName } from '../../core/model/group-name';

const QUESTIONS_IN_SINGLE_ROUND = 10;
export const MAX_SCORE = QUESTIONS_IN_SINGLE_ROUND;
const TOTAL_OPTIONS_COUNT = 4;

enum QuizStep {
  READY = 0,
  WAITING_FOR_ANSWER = 1,
  ANSWER_VALID = 2,
  ANSWER_INVALID = 3,
  FINISHED = 4
}

export enum QuizMode {
  GUESS_LATIN_NAME = 0, // free text guess latin name from sk/en name (depends of current lang)
  GUESS_EN_NAME = 1, // free text guess en name from latin name
  GUESS_SK_NAME = 2, // free text guess sk name from latin name
  CHOOSE_LATIN_NAME = 3, // from options
  CHOOSE_EN_NAME = 4, // from options
  CHOOSE_SK_NAME = 5, // from options
  GUESS_FROM_IMAGE = 6, // free text guess from showed image
  CHOOSE_FROM_IMAGE = 7, // from options
  GUESS_FROM_SOUND = 8, // free text guess from sound
  CHOOSE_FROM_SOUND = 9 // from options
}

export enum QuizDifficulty {
  BEGINNER = 0,
  ADVANCED = 1,
  EXPERT = 2
}

export interface QuizSettings {
  difficulty: QuizDifficulty;
  mode: QuizMode;
  groupsFilter: GroupName[]; // include only selected groups. If nothing selected, include all
  includeRare: boolean;
  includeHistorical: boolean;
}

type QuizState = {
  species: SpeciesDetail[];
  isLoading: boolean;
  settings: QuizSettings;
  step: QuizStep;
  roundQuestionSet: SpeciesDetail[];
  currentQuestion: number; // start from 1
  score: number;
};

const initialState: QuizState = {
  species: [],
  isLoading: false,
  settings: {
    difficulty: QuizDifficulty.BEGINNER,
    mode: QuizMode.GUESS_LATIN_NAME,
    groupsFilter: [],
    includeRare: false,
    includeHistorical: false
  },
  step: QuizStep.READY,
  roundQuestionSet: [],
  currentQuestion: 1,
  score: 0
};

export const QuizStore = signalStore(
  withState(initialState),
  withComputed(store => ({
    currentQuestionObject: computed(() => store.roundQuestionSet()[store.currentQuestion() - 1]),
    currentSpeciesSubset: computed(() =>
      getSpeciesSubset(
        store.species(),
        store.settings.groupsFilter(),
        store.settings.includeRare(),
        store.settings.includeHistorical()
      )
    )
  })),
  withComputed((store, translate = inject(TranslateService)) => ({
    currentQuestionText: computed(() => {
      switch (store.settings.mode()) {
        case QuizMode.GUESS_LATIN_NAME:
        case QuizMode.CHOOSE_LATIN_NAME:
          return translate.instant('quiz.latinNameQuestion', {
            name: store.currentQuestionObject().name.localized[translate.currentSpeciesLanguage]
          });

        case QuizMode.GUESS_EN_NAME:
        case QuizMode.CHOOSE_EN_NAME:
          return translate.instant('quiz.enNameQuestion', {
            name: store.currentQuestionObject().name.latin
          });

        case QuizMode.GUESS_SK_NAME:
        case QuizMode.CHOOSE_SK_NAME:
          return translate.instant('quiz.skNameQuestion', {
            name: store.currentQuestionObject().name.latin
          });

        case QuizMode.GUESS_FROM_IMAGE:
          return translate.instant('quiz.guessImageQuestion');
        case QuizMode.CHOOSE_FROM_IMAGE:
          return translate.instant('quiz.chooseImageQuestion');

        default:
          throw Error('Unsupported quiz mode');
      }
    }),
    currentQuestionOptions: computed((): SpeciesDetail[] => {
      const mode = store.settings.mode();
      if (
        ![
          QuizMode.CHOOSE_EN_NAME,
          QuizMode.CHOOSE_SK_NAME,
          QuizMode.CHOOSE_LATIN_NAME,
          QuizMode.CHOOSE_FROM_IMAGE,
          QuizMode.CHOOSE_FROM_SOUND
        ].includes(mode)
      ) {
        return [];
      }

      const currentSpeciesToGuess = store.roundQuestionSet()[store.currentQuestion() - 1];
      const similar = getSimilarSpecies(
        store.currentSpeciesSubset(),
        currentSpeciesToGuess,
        store.settings.difficulty(),
        TOTAL_OPTIONS_COUNT - 1
      );

      const allOptions = [currentSpeciesToGuess, ...similar];
      return getRandomItems(allOptions, allOptions.length); // Shuffle
    }),
    isValidated: computed(() => [QuizStep.ANSWER_VALID, QuizStep.ANSWER_INVALID].includes(store.step())),
    isValid: computed(() => [QuizStep.ANSWER_VALID].includes(store.step())),
    isInvalid: computed(() => [QuizStep.ANSWER_INVALID].includes(store.step())),
    isWaitingForAnswer: computed(() => [QuizStep.WAITING_FOR_ANSWER].includes(store.step())),
    isReadyToStart: computed(() => [QuizStep.READY].includes(store.step())),
    isRunning: computed(() =>
      [QuizStep.WAITING_FOR_ANSWER, QuizStep.ANSWER_VALID, QuizStep.ANSWER_INVALID].includes(store.step())
    ),
    isFinished: computed(() => [QuizStep.FINISHED].includes(store.step())),
    isOpenAnswer: computed(() =>
      [
        QuizMode.GUESS_EN_NAME,
        QuizMode.GUESS_SK_NAME,
        QuizMode.GUESS_LATIN_NAME,
        QuizMode.GUESS_FROM_IMAGE,
        QuizMode.GUESS_FROM_SOUND
      ].includes(store.settings.mode())
    )
  })),
  withMethods((store, storageService = inject(StorageService)) => ({
    // 👇 Method to load all species
    loadAllSpecies(): void {
      patchState(store, { isLoading: true });

      storageService
        .getAllSpeciesDetail()
        .pipe(
          map(x => x as SpeciesDetail[]),
          tap(species => {
            patchState(store, { species, isLoading: false });
          })
        )
        .subscribe();
    },
    startNewQuiz(newSettings: QuizSettings): void {
      patchState(store, {
        settings: {
          ...store.settings(),
          groupsFilter: newSettings.groupsFilter,
          includeRare: newSettings.includeRare,
          includeHistorical: newSettings.includeHistorical
        }
      });

      // Separate patchState because store.currentSpeciesSubset() depends on groupsFilter, includeRare and includeHistorical
      patchState(store, {
        score: 0,
        settings: { ...store.settings(), mode: newSettings.mode, difficulty: newSettings.difficulty },
        roundQuestionSet: getRandomItems(store.currentSpeciesSubset(), QUESTIONS_IN_SINGLE_ROUND),
        step: QuizStep.WAITING_FOR_ANSWER,
        currentQuestion: 1
      });
    },
    stopQuiz(): void {
      patchState(store, { step: QuizStep.FINISHED });
    },
    validateAnswer(isAnswerValid: boolean): void {
      if (isAnswerValid) {
        patchState(store, { step: QuizStep.ANSWER_VALID, score: store.score() + 1 });
      } else {
        patchState(store, { step: QuizStep.ANSWER_INVALID });
      }
    },
    nextQuestion(): void {
      if (store.currentQuestion() < QUESTIONS_IN_SINGLE_ROUND) {
        patchState(store, { step: QuizStep.WAITING_FOR_ANSWER, currentQuestion: store.currentQuestion() + 1 });
      } else {
        patchState(store, { step: QuizStep.FINISHED });
      }
    },
    showQuizMenu(): void {
      patchState(store, {
        step: QuizStep.READY
      });
    }
  }))
);
