import { Component, OnInit, inject, signal } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { CatalogGroup, CatalogItem } from '../../core/model/species';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, share, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { normalizeString } from '../../core/misc/util';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  #service = inject(StorageService);
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  loading = signal(true);
  species: CatalogItem[] = [];
  catalog: CatalogGroup[] = [];
  searchResult = signal<CatalogItem[]>([]);
  mode = signal<'explore-groups' | 'explore-species' | 'search'>('explore-groups');

  #searchTermSubject = new BehaviorSubject<string>('');
  #searchTerm = this.#searchTermSubject.asObservable().pipe(debounceTime(500), distinctUntilChanged(), share());
  filterSubscription = this.#searchTerm
    .pipe(
      map((searchTerm) => {
        let res = null;
        if (searchTerm.length > 2) {
          const normalized = normalizeString(searchTerm);
          res = this.species.filter(
            (_) =>
              _.name.latin.toLowerCase().includes(normalized) ||
              normalizeString(_.name.localized.sk).includes(normalized) ||
              _.name.localized.en.toLowerCase().includes(normalized),
          );
        }
        return res;
      }),
      tap((_) => {
        if (!_) {
          this.searchResult.set(this.species);
        } else {
          this.searchResult.set(_);
        }
      }),
    )
    .subscribe();

  ngOnInit() {
    this.#service
      .getSpeciesCatalog()
      .pipe(
        map((_) => _ as CatalogGroup[]),
        tap((_) => {
          this.catalog = _;
        }),
      )
      .subscribe();

    this.#service
      .getAllSpecies()
      .pipe(
        map((x) => x as CatalogItem[]),
        tap((_) => {
          this.species = _;
          this.searchResult.set(_);
          this.loading.set(false);
        }),
      )
      .subscribe();
  }

  showSearchView() {
    this.#searchTermSubject.next('');
    this.mode.set('search');
  }

  showSpeciesView() {
    this.mode.set('explore-species');
  }

  showGroupView() {
    this.mode.set('explore-groups');
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

  get isSearchMode() {
    return this.mode() === 'search';
  }

  get isShowSpeciesViewButtonShown() {
    return this.mode() === 'explore-groups';
  }

  get isShowGroupViewButtonShown() {
    return this.mode() === 'explore-species';
  }
}
