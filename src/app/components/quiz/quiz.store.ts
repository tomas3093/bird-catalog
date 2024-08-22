import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CatalogItem } from '../../core/model/species';
import { computed, inject } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { map, tap } from 'rxjs';
import { TranslateService } from '../../core/services/translate.service';

const QUESTIONS_IN_SINGLE_ROUND = 10;
export const MAX_SCORE = QUESTIONS_IN_SINGLE_ROUND;

enum QuizStep {
  READY = 0,
  WAITING_FOR_ANSWER = 1,
  ANSWER_VALID = 2,
  ANSWER_INVALID = 3,
  FINISHED = 4,
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
}

/**
 * Get N random items from an array
 * @param arr
 * @param numItems
 * @returns
 */
function getRandomItems<T>(arr: T[], numItems: number): T[] {
  // Create a copy of the array to avoid mutating the original array
  const shuffled = arr.slice();

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return the first 'numItems' elements from the shuffled array
  return shuffled.slice(0, numItems);
}

type QuizState = {
  species: CatalogItem[];
  isLoading: boolean;
  mode: QuizMode;
  step: QuizStep;
  roundQuestionSet: CatalogItem[];
  currentQuestion: number; // start from 1
  score: number;
};

const initialState: QuizState = {
  species: [],
  isLoading: false,
  mode: QuizMode.GUESS_LATIN_NAME,
  step: QuizStep.READY,
  roundQuestionSet: [],
  currentQuestion: 1,
  score: 0,
};

export const QuizStore = signalStore(
  withState(initialState),
  withComputed((store, translate = inject(TranslateService)) => ({
    currentQuestionObject: computed(() => store.roundQuestionSet()[store.currentQuestion() - 1]),
    currentQuestionText: computed(() => {
      const currentSpeciesToGuess = store.roundQuestionSet()[store.currentQuestion() - 1];

      switch (store.mode()) {
        case QuizMode.GUESS_LATIN_NAME:
          return translate.instant('quiz.latinNameQuestion', {
            name: currentSpeciesToGuess.name.localized[translate.currentSpeciesLanguage],
          });

        case QuizMode.GUESS_EN_NAME:
          return translate.instant('quiz.enNameQuestion', {
            name: currentSpeciesToGuess.name.latin,
          });

        case QuizMode.GUESS_SK_NAME:
          return translate.instant('quiz.skNameQuestion', {
            name: currentSpeciesToGuess.name.latin,
          });

        default:
          throw Error('Unsupported quiz mode');
      }
    }),
    currentCorrectAnswer: computed((): string => {
      const currentSpeciesToGuess = store.roundQuestionSet()[store.currentQuestion() - 1];

      switch (store.mode()) {
        case QuizMode.GUESS_LATIN_NAME:
        case QuizMode.CHOOSE_LATIN_NAME:
          return currentSpeciesToGuess.name.latin.toLowerCase();

        case QuizMode.GUESS_EN_NAME:
        case QuizMode.CHOOSE_EN_NAME:
          return currentSpeciesToGuess.name.localized.en.toLowerCase();

        case QuizMode.GUESS_SK_NAME:
        case QuizMode.CHOOSE_SK_NAME:
          return currentSpeciesToGuess.name.localized.sk.toLowerCase();

        default:
          throw Error('Unsupported quiz mode');
      }
    }),
    isValidated: computed(() => [QuizStep.ANSWER_VALID, QuizStep.ANSWER_INVALID].includes(store.step())),
    isValid: computed(() => [QuizStep.ANSWER_VALID].includes(store.step())),
    isInvalid: computed(() => [QuizStep.ANSWER_INVALID].includes(store.step())),
    isWaitingForAnswer: computed(() => [QuizStep.WAITING_FOR_ANSWER].includes(store.step())),
    isReadyToStart: computed(() => [QuizStep.READY].includes(store.step())),
    isRunning: computed(() =>
      [QuizStep.WAITING_FOR_ANSWER, QuizStep.ANSWER_VALID, QuizStep.ANSWER_INVALID].includes(store.step()),
    ),
    isFinished: computed(() => [QuizStep.FINISHED].includes(store.step())),
  })),
  withMethods((store, storageService = inject(StorageService)) => ({
    // 👇 Method to load all species
    loadAllSpecies(): void {
      patchState(store, { isLoading: true });

      storageService
        .getAllSpecies()
        .pipe(
          map((x) => x as CatalogItem[]),
          tap((species) => {
            patchState(store, { species, isLoading: false });
          }),
        )
        .subscribe();
    },
    startNewQuiz(mode: QuizMode): void {
      patchState(store, {
        score: 0,
        mode: mode,
        roundQuestionSet: getRandomItems(store.species(), QUESTIONS_IN_SINGLE_ROUND),
        step: QuizStep.WAITING_FOR_ANSWER,
        currentQuestion: 1,
      });
    },
    validateAnswer(answerValue: string): void {
      const enteredValue = answerValue.toLowerCase().trim();

      if (enteredValue === store.currentCorrectAnswer()) {
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
        step: QuizStep.READY,
      });
    },
  })),
);
