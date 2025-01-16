import { ChangeDetectionStrategy, Component, ElementRef, OnInit, computed, inject, viewChild } from '@angular/core';
import { MAX_SCORE, QuizMode, QuizSettings, QuizStore } from './quiz.store';
import { SpeciesDetail } from '../../core/model/species';
import { TranslateService } from '../../core/services/translate.service';
import { FormsModule } from '@angular/forms';
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
import { QuizSettingsComponent } from './quiz-settings/quiz-settings.component';

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
    QuizSettingsComponent
  ]
})
export class QuizComponent implements OnInit {
  #translate = inject(TranslateService);
  state = inject(QuizStore);

  textAnswerInput = viewChild<ElementRef<HTMLInputElement>>('textAnswerInput');
  selectedOptionId: string | null = null;

  currentCorrectAnswer = computed((): string => {
    const c = this.state.currentQuestionObject();

    switch (this.state.settings.mode()) {
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

  isImageQuestion = computed(() =>
    [QuizMode.GUESS_FROM_IMAGE, QuizMode.CHOOSE_FROM_IMAGE].includes(this.state.settings.mode())
  );
  isLastQuestion = computed(() => this.state.currentQuestion() === this.maxScore);

  ngOnInit() {
    this.state.loadAllSpecies();
  }

  startNewQuiz(settings: QuizSettings) {
    this.state.startNewQuiz(settings);
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
    switch (this.state.settings.mode()) {
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
}
