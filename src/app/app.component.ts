import { Component, OnInit, inject, signal } from '@angular/core';
import { TranslateService } from './core/services/translate.service';
import { LANGUAGE_KEYS, LanguageKey } from './core/services/translate/TypedTranslateLoader';

const LOCAL_STORAGE_KEY_APP_LANG = 'app_lang';
const LOCAL_STORAGE_KEY_SPECIES_LANG = 'species_lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly #translate = inject(TranslateService);

  isSidebarOpen = signal(false);
  availableLangs = [...LANGUAGE_KEYS];

  ngOnInit(): void {
    this.#translate.init();

    const storedAppLang = localStorage.getItem(LOCAL_STORAGE_KEY_APP_LANG) as LanguageKey;
    if (storedAppLang) {
      this.appLangChange(storedAppLang);
    }
    const storedSpeciesLang = localStorage.getItem(LOCAL_STORAGE_KEY_SPECIES_LANG) as LanguageKey;
    if (storedSpeciesLang) {
      this.speciesLangChange(storedSpeciesLang);
    }
  }

  appLangChange(value: LanguageKey) {
    this.#translate.setLanguage(value);
    localStorage.setItem(LOCAL_STORAGE_KEY_APP_LANG, value);
  }

  speciesLangChange(value: LanguageKey) {
    this.#translate.setSpeciesLanguage(value);
    localStorage.setItem(LOCAL_STORAGE_KEY_SPECIES_LANG, value);
  }

  openMenu() {
    this.isSidebarOpen.set(true);
  }

  get currentAppLang() {
    return this.#translate.currentAppLanguage;
  }

  get currentSpeciesLang() {
    return this.#translate.currentSpeciesLanguage;
  }
}
