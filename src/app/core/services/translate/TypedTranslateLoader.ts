import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { En } from '../../../../assets/i18n/en';
import { Sk } from '../../../../assets/i18n/sk';

const LanguageKeys = ['en', 'sk'] as const;
export type LanguageKey = (typeof LanguageKeys)[number];

export class TypedTranslateLoader implements TranslateLoader {
  readonly #languageMap: Record<LanguageKey, object> = {
    en: new En(),
    sk: new Sk(),
  };

  public getTranslation(lang: LanguageKey): Observable<object> {
    return of(this.#languageMap[lang]);
  }
}
