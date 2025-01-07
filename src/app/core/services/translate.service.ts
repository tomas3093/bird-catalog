import { DOCUMENT } from '@angular/common';
import { Injectable, OnDestroy, inject, signal } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { PrimeNG } from 'primeng/config';
import { Observable, Subscription } from 'rxjs';
import { PropertyPaths } from './translate/PropertyPath';
import { ITranslation } from './translate/ITranslation';
import { DEFAULT_LANG, LanguageKey } from './translate/TypedTranslateLoader';

@Injectable({
  providedIn: 'root'
})
export class TranslateService implements OnDestroy {
  #langChangeSubscription?: Subscription;
  #speciesLanguage = signal<LanguageKey>(DEFAULT_LANG);

  readonly #translate = inject(NgxTranslateService);
  readonly #primeNgConfig = inject(PrimeNG);
  readonly #document = inject(DOCUMENT);

  ngOnDestroy() {
    this.#langChangeSubscription?.unsubscribe();
  }

  init() {
    this.#langChangeSubscription = this.#translate.onLangChange.subscribe(event => {
      this.#document.documentElement.lang = event.lang;
      this.#primeNgConfig.setTranslation(event.translations['primeNg']);
    });

    this.#translate.use(DEFAULT_LANG);
  }

  setLanguage(language: LanguageKey) {
    this.#translate.use(language);
  }

  setSpeciesLanguage(language: LanguageKey) {
    this.#speciesLanguage.set(language);
  }

  get(query: PropertyPaths<ITranslation>, args?: object): Observable<string> {
    return this.#translate.get(query, args);
  }

  instant(query: PropertyPaths<ITranslation>, args?: object): string {
    return this.#translate.instant(query, args);
  }

  instantUnsafe(query: string, args?: object): string {
    return this.#translate.instant(query, args);
  }

  get currentAppLanguage(): LanguageKey {
    return this.#translate.currentLang as LanguageKey;
  }

  get currentSpeciesLanguage(): LanguageKey {
    return this.#speciesLanguage();
  }
}
