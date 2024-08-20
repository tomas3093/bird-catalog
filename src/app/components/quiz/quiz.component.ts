import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { CatalogItem } from '../../core/model/species';
import { map, tap } from 'rxjs';

const QUESTIONS_COUNT = 10;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  #service = inject(StorageService);

  species: CatalogItem[] = [];
  loading = signal(true);

  quizState = signal<'init' | 'waitingForAnswer' | 'answerValidatedCorrect' | 'answerValidatedWrong' | 'finished'>('init');
  currentRoundSet = signal<CatalogItem[]>([]);
  currentQuestionIndex = signal(0);
  currentScore = signal(0);

  currentQuestion = computed(() => this.currentRoundSet()[this.currentQuestionIndex()]);

  ngOnInit() {
    this.#service
      .getAllSpecies()
      .pipe(
        map((x) => x as CatalogItem[]),
        tap((_) => {
          this.species = _;
          this.loading.set(false);
        }),
      )
      .subscribe();
  }

  startQuiz() {
    this.currentScore.set(0);
    this.currentRoundSet.set(getRandomItems(this.species, QUESTIONS_COUNT));
    this.quizState.set('waitingForAnswer');
  }

  submitAnswer(value: string) {
    if (value.toLocaleLowerCase().trim() === this.currentQuestion().name.latin.toLocaleLowerCase()) {
      this.currentScore.update((current) => current + 1);
      this.quizState.set('answerValidatedCorrect');
    } else {
      this.quizState.set('answerValidatedWrong');
    }
  }

  nextQuestion(inputElement: HTMLInputElement) {
    if (this.currentQuestionIndex() + 1 < QUESTIONS_COUNT) {
      this.currentQuestionIndex.update((value) => value + 1);
      this.quizState.set('waitingForAnswer');
      inputElement.focus();
    } else {
      this.quizState.set('finished');
    }

    inputElement.value = '';
  }

  onEnterPressed(inputElement: HTMLInputElement) {
    if (this.quizState() === 'waitingForAnswer') {
      this.submitAnswer(inputElement.value);
    } else if (['answerValidatedCorrect', 'answerValidatedWrong'].includes(this.quizState())) {
      this.nextQuestion(inputElement);
    }
  }

  get maxScore(): number {
    return QUESTIONS_COUNT;
  }
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
