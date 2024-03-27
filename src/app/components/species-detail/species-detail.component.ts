import { Component, OnInit, inject, signal } from '@angular/core';
import { SpeciesDetail } from '../../core/model/species';
import { StorageService } from '../../core/services/storage.service';
import { map, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrl: './species-detail.component.scss',
})
export class SpeciesDetailComponent implements OnInit {
  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);

  #service = inject(StorageService);

  loading = signal(true);
  speciesDetail = signal<SpeciesDetail | null>(null);
  isComparatorShown = signal(false);

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '480px',
      numVisible: 2,
    },
    {
      breakpoint: '320px',
      numVisible: 1,
    },
  ];

  ngOnInit() {
    this.#activatedRoute.paramMap
      .pipe(
        map((_) => _.get('code') ?? ''),
        switchMap((paramCode) =>
          paramCode ? this.#service.getSpeciesDetail(paramCode) : of(null)
        )
      )
      .pipe(
        tap((_) => {
          this.speciesDetail.set(_);
          this.loading.set(false);
        })
      )
      .subscribe();
  }

  navigateToSpeciesCatalog() {
    this.#router.navigate(['species']);
  }

  compareSpecies() {
    this.isComparatorShown.set(true);
  }

  showDetail() {
    this.isComparatorShown.set(false);
  }
}
