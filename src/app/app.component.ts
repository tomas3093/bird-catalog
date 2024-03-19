import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from './core/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly translate = inject(TranslateService);

  ngOnInit(): void {
    this.translate.init();
  }

  languageChange() {
    console.log('lang change');

    if (this.translate.currentLanguage === 'en') {
      this.translate.setLanguage('sk');
    } else {
      this.translate.setLanguage('en');
    }
  }

  get languageLabel() {
    return this.translate.currentLanguage;
  }
}
