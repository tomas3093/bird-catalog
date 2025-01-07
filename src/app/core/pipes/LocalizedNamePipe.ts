import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { LocalizedText } from '../model/species';

@Pipe({
  name: 'localizedName',
  pure: false,
  standalone: true
})
export class LocalizedNamePipe implements PipeTransform {
  readonly #translate = inject(TranslateService);

  public transform(query: LocalizedText): string {
    return query[`${this.#translate.currentSpeciesLanguage}`];
  }
}
