import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MAX_SCORE, QuizMode, QuizStore } from './quiz.store';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  state = inject(QuizStore);
  mode: QuizMode = QuizMode.GUESS_LATIN_NAME;

  ngOnInit() {
    this.state.loadAllSpecies();
  }

  startNewQuiz() {
    this.state.startNewQuiz(this.mode);
  }

  changeMode() {
    this.state.showQuizMenu();
  }

  validateAnswer(value: string) {
    this.state.validateAnswer(value);
  }

  nextQuestion(inputElement: HTMLInputElement) {
    this.state.nextQuestion();
    inputElement.value = '';
    inputElement.focus();
  }

  onEnterPressed(inputElement: HTMLInputElement) {
    if (this.state.isWaitingForAnswer()) {
      this.state.validateAnswer(inputElement.value);
    } else if (this.state.isValidated()) {
      this.nextQuestion(inputElement);
    }
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
}
