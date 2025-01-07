import { ChangeDetectionStrategy, Component, ElementRef, OnInit, computed, inject, viewChild } from '@angular/core';
import { MAX_SCORE, QuizDifficulty, QuizMode, QuizStore } from './quiz.store';
import { SpeciesDetail } from '../../core/model/species';
import { TranslateService } from '../../core/services/translate.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { GroupName } from '../../core/model/group-name';
import { PropertyPaths } from '../../core/services/translate/PropertyPath';
import { ITranslation } from '../../core/services/translate/ITranslation';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { TypedTranslatePipe } from '../../core/pipes/TypedTranslatePipe';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ProgressSpinnerModule,
    ListboxModule,
    CheckboxModule,
    MultiSelectModule,
    ChipModule,
    ButtonModule,
    TypedTranslatePipe,
    SelectButtonModule,
    RadioButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuizComponent implements OnInit {
  #translate = inject(TranslateService);
  state = inject(QuizStore);

  formGroup = new FormGroup({
    mode: new FormControl<QuizMode>(this.state.mode(), { nonNullable: true, validators: [Validators.required] }),
    difficulty: new FormControl<QuizDifficulty>(this.state.difficulty(), {
      nonNullable: true,
      validators: [Validators.required]
    }),
    groupsFilter: new FormControl<GroupName[]>(this.state.groupsFilter(), {
      nonNullable: true,
      validators: [Validators.required]
    }),
    includeRare: new FormControl<boolean>(this.state.includeRare(), {
      nonNullable: true,
      validators: [Validators.required]
    }),
    includeHistorical: new FormControl<boolean>(this.state.includeHistorical(), {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  textAnswerInput = viewChild<ElementRef<HTMLInputElement>>('textAnswerInput');
  selectedOptionId: string | null = null;

  currentCorrectAnswer = computed((): string => {
    const c = this.state.currentQuestionObject();

    switch (this.state.mode()) {
      case QuizMode.GUESS_LATIN_NAME:
        return c.name.latin.toLowerCase();
      case QuizMode.GUESS_EN_NAME:
        return c.name.localized.en.toLowerCase();
      case QuizMode.GUESS_SK_NAME:
        return c.name.localized.sk.toLowerCase();
      case QuizMode.GUESS_FROM_IMAGE:
        return c.name.latin.toLowerCase();
      default:
        throw Error('Unsupported quiz mode');
    }
  });

  isImageQuestion = computed(() => [QuizMode.GUESS_FROM_IMAGE, QuizMode.CHOOSE_FROM_IMAGE].includes(this.state.mode()));
  isLastQuestion = computed(() => this.state.currentQuestion() === this.maxScore);

  difficultyOptions: { label: PropertyPaths<ITranslation>; value: QuizDifficulty }[] = [
    { label: 'quiz.difficulty.beginner', value: QuizDifficulty.BEGINNER },
    { label: 'quiz.difficulty.advanced', value: QuizDifficulty.ADVANCED },
    { label: 'quiz.difficulty.expert', value: QuizDifficulty.EXPERT }
  ];

  modeOptions: SelectItemGroup[] = [
    {
      label: 'quiz.mode.group.open',
      items: [
        { label: 'quiz.mode.latinNames', value: QuizMode.GUESS_LATIN_NAME },
        { label: 'quiz.mode.enNames', value: QuizMode.GUESS_EN_NAME },
        { label: 'quiz.mode.skNames', value: QuizMode.GUESS_SK_NAME },
        { label: 'quiz.mode.images', value: QuizMode.GUESS_FROM_IMAGE }
      ]
    },
    {
      label: 'quiz.mode.group.options',
      items: [
        { label: 'quiz.mode.latinNames', value: QuizMode.CHOOSE_LATIN_NAME },
        { label: 'quiz.mode.enNames', value: QuizMode.CHOOSE_EN_NAME },
        { label: 'quiz.mode.skNames', value: QuizMode.CHOOSE_SK_NAME },
        { label: 'quiz.mode.images', value: QuizMode.CHOOSE_FROM_IMAGE }
      ]
    }
  ];

  groupOptions: { label: PropertyPaths<ITranslation>; value: GroupName }[] = [
    { label: 'quiz.groupsFilter.birdsOfPrey', value: 'birdsOfPrey' },
    { label: 'quiz.groupsFilter.waders', value: 'waders' },
    { label: 'quiz.groupsFilter.wildfowl', value: 'wildfowl' },
    { label: 'quiz.groupsFilter.heronsStorksEtAl', value: 'heronsStorksEtAl' },
    { label: 'quiz.groupsFilter.owls', value: 'owls' },
    { label: 'quiz.groupsFilter.woodpeckers', value: 'woodpeckers' },
    { label: 'quiz.groupsFilter.trushesChats', value: 'trushesChats' },
    { label: 'quiz.groupsFilter.warblers', value: 'warblers' },
    { label: 'quiz.groupsFilter.finchesCrossbills', value: 'finchesCrossbills' }
  ];

  ngOnInit() {
    this.state.loadAllSpecies();
  }

  startNewQuiz() {
    const c = this.formGroup.controls;
    this.state.startNewQuiz(
      c.mode.value,
      c.difficulty.value,
      c.groupsFilter.value,
      c.includeRare.value,
      c.includeHistorical.value
    );

    if (this.state.isOpenAnswer()) {
      setTimeout(() => {
        this.textAnswerInput()?.nativeElement.focus();
      }, 200);
    }
  }

  stopQuiz() {
    this.state.stopQuiz();
  }

  changeMode() {
    this.state.showQuizMenu();
  }

  validateAnswer() {
    if (this.state.isOpenAnswer()) {
      const openAnswerValue = this.textAnswerInput()?.nativeElement.value;
      if (!openAnswerValue) {
        return;
      }

      const isAnswerValid = openAnswerValue.toLowerCase().trim() === this.currentCorrectAnswer();
      this.state.validateAnswer(isAnswerValid);
    } else {
      const isAnswerValid = this.selectedOptionId === this.state.currentQuestionObject().id;
      this.state.validateAnswer(isAnswerValid);
    }
  }

  nextQuestion() {
    this.state.nextQuestion();

    if (this.selectedOptionId !== null) {
      this.selectedOptionId = null;
    }

    const el = this.textAnswerInput()?.nativeElement;
    if (el) {
      el.value = '';
      el.focus();
    }
  }

  onEnterPressed() {
    if (this.state.isWaitingForAnswer()) {
      this.validateAnswer();
    } else if (this.state.isValidated()) {
      this.nextQuestion();
    }
  }

  optionLabel(option: SpeciesDetail): string {
    switch (this.state.mode()) {
      case QuizMode.CHOOSE_LATIN_NAME:
        return option.name.latin;
      case QuizMode.CHOOSE_EN_NAME:
        return option.name.localized.en;
      case QuizMode.CHOOSE_SK_NAME:
        return option.name.localized.sk;
      case QuizMode.CHOOSE_FROM_IMAGE:
        return `${option.name.latin} (${option.name.localized[this.#translate.currentSpeciesLanguage]})`;
      default:
        throw Error('Unsupported quiz mode');
    }
  }

  isOptionMarkedAsIncorrect(optionId: string): boolean {
    return this.state.isInvalid() && this.selectedOptionId === optionId;
  }

  isOptionMarkedAsCorrect(optionId: string): boolean {
    return (
      (this.state.isValid() && this.selectedOptionId === optionId) ||
      (this.state.isInvalid() && optionId === this.state.currentQuestionObject().id)
    );
  }

  get maxScore(): number {
    return MAX_SCORE;
  }

  get guessLatinName(): QuizMode {
    return QuizMode.GUESS_LATIN_NAME;
  }
  get guessEnName(): QuizMode {
    return QuizMode.GUESS_EN_NAME;
  }
  get guessSkName(): QuizMode {
    return QuizMode.GUESS_SK_NAME;
  }
  get chooseLatinName(): QuizMode {
    return QuizMode.CHOOSE_LATIN_NAME;
  }
  get chooseEnName(): QuizMode {
    return QuizMode.CHOOSE_EN_NAME;
  }
  get chooseSkName(): QuizMode {
    return QuizMode.CHOOSE_SK_NAME;
  }
  get guessFromImage(): QuizMode {
    return QuizMode.GUESS_FROM_IMAGE;
  }
  get chooseFromImage(): QuizMode {
    return QuizMode.CHOOSE_FROM_IMAGE;
  }
}
