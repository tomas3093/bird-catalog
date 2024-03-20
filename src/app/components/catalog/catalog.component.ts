import { Component, OnInit, inject, signal } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { Species } from '../../core/model/species';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  share,
  tap,
} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  #service = inject(StorageService);
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  loading = signal(true);
  species: Species[] = [];
  displayedData = signal<Species[]>([]);

  #searchTermSubject = new BehaviorSubject<string>('');
  #searchTerm = this.#searchTermSubject
    .asObservable()
    .pipe(debounceTime(500), distinctUntilChanged(), share());
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
              _.name.localized.en.toLowerCase().includes(lowered)
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
      })
    )
    .subscribe();

  ngOnInit() {
    this.#service
      .getAllSpecies()
      .pipe(
        tap((_) => {
          this.species = _;
          this.displayedData.set(_);
          this.loading.set(false);
        })
      )
      .subscribe();
  }

  compare(speciesCode: string) {
    console.log('compare ', speciesCode);
  }

  viewDetail(speciesCode: string) {
    this.#router.navigate([speciesCode], { relativeTo: this.#activatedRoute });
  }

  onSearchFilter(value: string) {
    this.#searchTermSubject.next(value);
  }

  clearFilters(searchFilter: HTMLInputElement) {
    searchFilter.value = '';
    this.#searchTermSubject.next('');
  }
}
