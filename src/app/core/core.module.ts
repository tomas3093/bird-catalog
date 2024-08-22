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
import { ComparatorComponent } from '../components/comparator/comparator.component';
import { ChipModule } from 'primeng/chip';
import { AutoFocusModule } from 'primeng/autofocus';
import { CatalogItemComponent } from '../components/catalog-item/catalog-item.component';
import { GroupWrapperComponent } from '../components/group-wrapper/group-wrapper.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ScrollTopModule } from 'primeng/scrolltop';
import { provideHttpClient } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { SkeletonModule } from 'primeng/skeleton';
import { QuizComponent } from '../components/quiz/quiz.component';
import { QuizStore } from '../components/quiz/quiz.store';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogItemComponent,
    GroupWrapperComponent,
    SpeciesDetailComponent,
    TypedTranslatePipe,
    LocalizedNamePipe,
    ComparatorComponent,
    SidebarComponent,
    QuizComponent,
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
    ChipModule,
    AutoFocusModule,
    SidebarModule,
    DropdownModule,
    FormsModule,
    ScrollTopModule,
    AccordionModule,
    SkeletonModule,
    RadioButtonModule,
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
    ChipModule,
    AutoFocusModule,
    SidebarComponent,
  ],
  providers: [TranslatePipe, TypedTranslatePipe, LocalizedNamePipe, provideHttpClient(), QuizStore],
  bootstrap: [AppComponent],
})
export class CoreModule {}
