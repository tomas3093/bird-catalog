import { Component, OnInit, inject, input, signal } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { Species, SpeciesDetail } from '../../core/model/species';
import { tap } from 'rxjs';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrl: './comparator.component.scss',
})
export class ComparatorComponent implements OnInit {
  #service = inject(StorageService);

  compareWith = input.required<SpeciesDetail | null>();
  compareList = signal<SpeciesDetail[]>([]);

  species: Species[] = [];
  loading = signal(true);

  isSearchShown = signal(false);

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
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  showSearch() {
    this.isSearchShown.set(true);
  }

  ngOnInit() {
    this.#service
      .getAllSpecies()
      .pipe(
        tap((_) => {
          this.species = _;
          this.loading.set(false);
        })
      )
      .subscribe();
  }
}
