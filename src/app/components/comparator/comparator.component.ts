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

  isSearchShown = signal(true);

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

    const initialValue = this.compareWith();
    if (initialValue) {
      this.compareList.set([initialValue]);
    }
  }

  showSearch() {
    this.isSearchShown.set(true);
  }

  showComparator() {
    this.isSearchShown.set(false);
  }

  toggleComparison(speciesCode: string) {
    if (this.isSelected(speciesCode)) {
      this.removeFromComparison(speciesCode);
    } else {
      this.#service
        .getSpeciesDetail(speciesCode)
        .pipe(
          tap((_) => {
            const array = this.compareList();
            array.push(_);
            this.compareList.set(array);
          })
        )
        .subscribe();
    }
  }

  removeFromComparison(speciesCode: string) {
    const array = this.compareList().filter((_) => _.code !== speciesCode);
    this.compareList.set(array);
  }

  isSelected(speciesCode: string) {
    return this.compareList().find((_) => _.code === speciesCode) !== undefined;
  }
}
