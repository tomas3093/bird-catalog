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
import { GroupItem } from '../../core/services/storage.model';

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
  groups: GroupItem[] = [];
  searchResult = signal<Species[]>([]);
  mode = signal<'explore' | 'search'>('explore');

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
          this.searchResult.set(this.species);
        } else {
          this.searchResult.set(_);
        }
      })
    )
    .subscribe();

  ngOnInit() {
    this.#service
      .getAllSpecies()
      .pipe(
        map((x) => x as Species[]),
        tap((_) => {
          this.species = _;
          this.searchResult.set(_);
          this.loading.set(false);
        })
      )
      .subscribe();
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
