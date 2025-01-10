import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { StorageService } from '../../core/services/storage.service';
import { CatalogGroup, CatalogItem, SpeciesDetail } from '../../core/model/species';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, share, Subscription, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { normalizeString } from '../../core/misc/util';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TooltipModule } from 'primeng/tooltip';
import { TypedTranslatePipe } from '../../core/pipes/TypedTranslatePipe';
import { LocalizedNamePipe } from '../../core/pipes/LocalizedNamePipe';
import { GroupWrapperComponent } from '../group-wrapper/group-wrapper.component';
import { CatalogItemComponent } from '../catalog-item/catalog-item.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FormsModule,
    ProgressSpinnerModule,
    ButtonModule,
    ScrollTopModule,
    TooltipModule,
    TypedTranslatePipe,
    LocalizedNamePipe,
    GroupWrapperComponent,
    CatalogItemComponent,
    CommonModule
  ]
})
export class CatalogComponent implements OnInit {
  #service = inject(StorageService);
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  #scroller = inject(ViewportScroller);

  loading = signal(true);
  allSpecies: CatalogItem[] = [];
  catalog: CatalogGroup[] = [];
  searchResult = signal<CatalogItem[]>([]);
  mode = signal<'explore-groups' | 'explore-species' | 'search'>('explore-groups');

  #searchTermSubject = new BehaviorSubject<string>('');
  #searchTerm = this.#searchTermSubject.asObservable().pipe(debounceTime(500), distinctUntilChanged(), share());
  filterSubscription: Subscription;

  constructor() {
    this.filterSubscription = this.#searchTerm
      .pipe(
        map(searchTerm => {
          let res = null;
          if (searchTerm.length > 2) {
            const normalized = normalizeString(searchTerm);
            res = this.allSpecies.filter(
              _ =>
                _.name.latin.toLowerCase().includes(normalized) ||
                normalizeString(_.name.localized.sk).includes(normalized) ||
                _.name.localized.en.toLowerCase().includes(normalized)
            );
          }
          return res;
        }),
        tap(_ => {
          if (!_) {
            this.searchResult.set(this.allSpecies);
          } else {
            this.searchResult.set(_);
          }
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  ngOnInit() {
    this.#service
      .getSpeciesCatalog()
      .pipe(
        map(_ => _ as CatalogGroup[]),
        tap(_ => {
          this.catalog = _;
        })
      )
      .subscribe();

    this.#service
      .getAllCatalogSpecies()
      .pipe(
        map(x => x as CatalogItem[]),
        tap(_ => {
          this.allSpecies = _;
          this.searchResult.set(_);
          this.loading.set(false);
        })
      )
      .subscribe();
  }

  showSearchView() {
    this.#searchTermSubject.next('');
    this.mode.set('search');
  }

  showSpeciesView(groupId?: string) {
    this.mode.set('explore-species');

    // Scroll to selected group
    if (groupId != undefined) {
      setTimeout(() => {
        this.#scroller.scrollToAnchor(groupId);
      }, 100);
    }
  }

  showGroupView() {
    this.mode.set('explore-groups');
  }

  viewDetail(speciesId: string) {
    this.#router.navigate([speciesId], { relativeTo: this.#activatedRoute });
  }

  onSearchFilter(value: string) {
    this.#searchTermSubject.next(value);
  }

  clearFilters(searchFilter: HTMLInputElement) {
    searchFilter.value = '';
    this.#searchTermSubject.next('');
  }

  isSearchMode = computed(() => this.mode() === 'search');
  isGroupMode = computed(() => this.mode() === 'explore-groups');
  isSpeciesMode = computed(() => this.mode() === 'explore-species');
}
