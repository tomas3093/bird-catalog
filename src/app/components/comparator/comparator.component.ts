import { Component, OnInit, inject, input, signal } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { CatalogItem, SpeciesDetail } from '../../core/model/species';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, share, tap } from 'rxjs';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrl: './comparator.component.scss',
})
export class ComparatorComponent implements OnInit {
  #service = inject(StorageService);

  compareWith = input.required<SpeciesDetail | null>();
  compareList = signal<SpeciesDetail[]>([]);

  species: CatalogItem[] = [];
  displayedData = signal<CatalogItem[]>([]);
  loading = signal(true);

  isSearchShown = signal(true);

  #searchTermSubject = new BehaviorSubject<string>('');
  #searchTerm = this.#searchTermSubject.asObservable().pipe(debounceTime(500), distinctUntilChanged(), share());
  filterSubscription = this.#searchTerm
    .pipe(
      map((searchTerm) => {
        let res = null;
        if (searchTerm.length > 2) {
          const lowered = searchTerm.toLowerCase();
          res = this.species.filter(
            (_) =>
              _.name.latin.toLowerCase().includes(lowered) ||
              _.name.localized.sk.toLowerCase().includes(lowered) ||
              _.name.localized.en.toLowerCase().includes(lowered),
          );
        }
        return res;
      }),
      tap((_) => {
        if (!_) {
          this.displayedData.set(this.species);
        } else {
          this.displayedData.set(_);
        }
      }),
    )
    .subscribe();

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
        map((x) => x as CatalogItem[]),
        tap((_) => {
          this.species = _;
          this.loading.set(false);
        }),
      )
      .subscribe();

    const initialValue = this.compareWith();
    if (initialValue) {
      this.compareList.set([initialValue]);
    }
  }

  showSearch() {
    this.isSearchShown.set(true);
    this.displayedData.set(this.species);
  }

  showComparator() {
    this.isSearchShown.set(false);
  }

  onSearchFilter(value: string) {
    this.#searchTermSubject.next(value);
  }

  toggleComparison(speciesId: string) {
    if (this.isSelected(speciesId)) {
      this.removeFromComparison(speciesId);
    } else {
      this.#service
        .getSpeciesDetail(speciesId)
        .pipe(
          tap((_) => {
            const array = this.compareList();
            array.push(_);
            this.compareList.set(array);
          }),
        )
        .subscribe();
    }
  }

  removeFromComparison(speciesId: string) {
    const array = this.compareList().filter((_) => _.id !== speciesId);
    this.compareList.set(array);
  }

  isSelected(speciesId: string) {
    return this.compareList().find((_) => _.id === speciesId) !== undefined;
  }
}
