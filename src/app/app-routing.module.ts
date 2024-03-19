import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SpeciesDetailComponent } from './components/species-detail/species-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'species',
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
      //     path: 'edit/:code',
      //     pathMatch: 'full',
      //     component: AddEditSpeciesComponent,
      //   },
      {
        path: ':code',
        pathMatch: 'full',
        component: SpeciesDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
