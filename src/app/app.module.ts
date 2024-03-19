import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TypedTranslateLoader } from './core/services/translate/TypedTranslateLoader';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en', // Default translation is used in case of missing current lang translation
      loader: {
        provide: TranslateLoader,
        useFactory: () => new TypedTranslateLoader(),
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
