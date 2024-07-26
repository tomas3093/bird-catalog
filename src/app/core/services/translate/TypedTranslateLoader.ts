import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { En } from '../../../../assets/i18n/en';
import { Sk } from '../../../../assets/i18n/sk';

export const LANGUAGE_KEYS = ['en', 'sk'] as const;
export const DEFAULT_LANG = 'en';
export type LanguageKey = (typeof LANGUAGE_KEYS)[number];

export class TypedTranslateLoader implements TranslateLoader {
  readonly #languageMap: Record<LanguageKey, object> = {
    en: new En(),
    sk: new Sk(),
  };

  public getTranslation(lang: LanguageKey): Observable<object> {
    return of(this.#languageMap[lang]);
  }
}
