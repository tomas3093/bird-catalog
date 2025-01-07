import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { LanguageKey } from '../../core/services/translate/TypedTranslateLoader';
import { TranslateService } from '../../core/services/translate.service';
import { Router } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { TypedTranslatePipe } from '../../core/pipes/TypedTranslatePipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DrawerModule, ButtonModule, SelectModule, TypedTranslatePipe, CommonModule, FormsModule]
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
  readonly #router = inject(Router);

  langs = computed(() =>
    this.availableLangs().map(_ => ({ label: this.#translate.instantUnsafe('layout.menu.languages.' + _), value: _ }))
  );

  navigate(path: string[]) {
    this.#router.navigate(path);
    // TODO hide sidebar
  }
}
