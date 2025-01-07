import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PropertyPaths } from '../services/translate/PropertyPath';
import { ITranslation } from '../services/translate/ITranslation';

@Pipe({
  name: 't',
  pure: false,
  standalone: true
})
export class TypedTranslatePipe implements PipeTransform {
  readonly #basePipe = inject(TranslatePipe);

  public transform(query: PropertyPaths<ITranslation>, ...args: Array<unknown>): string {
    return this.#basePipe.transform(query, ...args);
  }
}
