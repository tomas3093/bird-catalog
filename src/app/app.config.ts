import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app-routes';
import { TypedTranslateLoader } from './core/services/translate/TypedTranslateLoader';
import { QuizStore } from './components/quiz/quiz.store';
import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/nora';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    providePrimeNG({ theme: { preset: Nora } }),
    importProvidersFrom([
      TranslateModule.forRoot({
        defaultLanguage: 'en', // Default translation is used in case of missing current lang translation
        loader: {
          provide: TranslateLoader,
          useFactory: () => new TypedTranslateLoader()
        }
      })
    ]),
    QuizStore,
    TranslatePipe
  ]
};
