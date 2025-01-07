import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SpeciesDetailComponent } from './components/species-detail/species-detail.component';
import { ComparatorComponent } from './components/comparator/comparator.component';
import { QuizComponent } from './components/quiz/quiz.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'species',
    pathMatch: 'full'
  },
  {
    path: 'species',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatalogComponent
      },
      {
        path: 'compare',
        pathMatch: 'full',
        component: ComparatorComponent
      },
      //   {
      //     path: 'new',
      //     pathMatch: 'full',
      //     component: AddEditSpeciesComponent,
      //   },
      //   {
      //     path: 'edit/:id',
      //     pathMatch: 'full',
      //     component: AddEditSpeciesComponent,
      //   },
      {
        path: ':id',
        pathMatch: 'full',
        component: SpeciesDetailComponent
      }
    ]
  },
  {
    path: 'quiz',
    pathMatch: 'full',
    component: QuizComponent
  }
];
