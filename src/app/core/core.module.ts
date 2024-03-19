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
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@NgModule({
  declarations: [CatalogComponent, SpeciesDetailComponent, TypedTranslatePipe],
  imports: [
    ImageModule,
    TagModule,
    ButtonModule,
    GalleriaModule,
    IconFieldModule,
    InputIconModule,
  ],
  exports: [
    TypedTranslatePipe,
    ImageModule,
    TagModule,
    ButtonModule,
    GalleriaModule,
    IconFieldModule,
    InputIconModule,
  ],
  providers: [TranslatePipe, TypedTranslatePipe],
  bootstrap: [AppComponent],
})
export class CoreModule {}
