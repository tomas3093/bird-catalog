import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SpeciesDetailComponent } from './components/species-detail/species-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: 'species',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatalogComponent,
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
        component: SpeciesDetailComponent,
      },
    ],
  },
];
