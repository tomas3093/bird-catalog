import { NgModule } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { SpeciesDetailComponent } from '../components/species-detail/species-detail.component';
import { CatalogComponent } from '../components/catalog/catalog.component';
import { TypedTranslatePipe } from './pipes/TypedTranslatePipe';
import { AppComponent } from '../app.component';
import { TranslatePipe } from '@ngx-translate/core';
import { InputIconModule } from 'primeng/inputicon';
import { LocalizedNamePipe } from './pipes/LocalizedNamePipe';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    CatalogComponent,
    SpeciesDetailComponent,
    TypedTranslatePipe,
    LocalizedNamePipe,
  ],
  imports: [
    ImageModule,
    TagModule,
    ButtonModule,
    GalleriaModule,
    InputIconModule,
    TooltipModule,
    ProgressSpinnerModule,
    InputTextModule,
  ],
  exports: [
    TypedTranslatePipe,
    ImageModule,
    TagModule,
    ButtonModule,
    GalleriaModule,
    InputIconModule,
    TooltipModule,
    ProgressSpinnerModule,
    InputTextModule,
  ],
  providers: [TranslatePipe, TypedTranslatePipe, LocalizedNamePipe],
  bootstrap: [AppComponent],
})
export class CoreModule {}
