import { Component, computed, inject, input, output } from '@angular/core';
import { LanguageKey } from '../../core/services/translate/TypedTranslateLoader';
import { TranslateService } from '../../core/services/translate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isOpen = input.required<boolean>();
  availableLangs = input.required<LanguageKey[]>();
  appLang = input.required<LanguageKey>();
  speciesLang = input.required<LanguageKey>();

  appLangChange = output<LanguageKey>();
  speciesLangChange = output<LanguageKey>();
  closeClick = output<void>();

  readonly #translate = inject(TranslateService);

  langs = computed(() =>
    this.availableLangs().map((_) => ({ label: this.#translate.instantUnsafe('layout.menu.languages.' + _), value: _ })),
  );
}
