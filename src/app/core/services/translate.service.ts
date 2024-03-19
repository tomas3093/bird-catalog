import { DOCUMENT } from '@angular/common';
import { Injectable, OnDestroy, inject } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { PropertyPaths } from './translate/PropertyPath';
import { ITranslation } from './translate/ITranslation';
import { LanguageKey } from './translate/TypedTranslateLoader';

@Injectable({
  providedIn: 'root',
})
export class TranslateService implements OnDestroy {
  langChangeSubscription?: Subscription;

  readonly translate = inject(NgxTranslateService);
  readonly primeNgConfig = inject(PrimeNGConfig);
  readonly document = inject(DOCUMENT);

  ngOnDestroy() {
    this.langChangeSubscription?.unsubscribe();
  }

  init() {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.document.documentElement.lang = event.lang;
        this.primeNgConfig.setTranslation(event.translations['primeNg']);
      }
    );

    this.translate.use('en');
  }

  setLanguage(language: LanguageKey) {
    this.translate.use(language);
  }

  get(query: PropertyPaths<ITranslation>, args?: object): Observable<string> {
    return this.translate.get(query, args);
  }

  instant(query: PropertyPaths<ITranslation>, args?: object): string {
    return this.translate.instant(query, args);
  }

  get currentLanguage(): LanguageKey {
    return this.translate.currentLang as LanguageKey;
  }

  // instantUnsafe(query: string, args?: object): string {
  //   return this.translate.instant(query, args);
  // }
}
