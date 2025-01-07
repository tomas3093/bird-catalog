import { ChangeDetectionStrategy, Component, OnInit, inject, input, signal } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { SpeciesDetail } from '../../core/model/species';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, share, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { TypedTranslatePipe } from '../../core/pipes/TypedTranslatePipe';
import { TooltipModule } from 'primeng/tooltip';
import { LocalizedNamePipe } from '../../core/pipes/LocalizedNamePipe';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrl: './comparator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ButtonModule, ChipModule, TypedTranslatePipe, TooltipModule, LocalizedNamePipe, GalleriaModule]
})
export class ComparatorComponent implements OnInit {
  #service = inject(StorageService);

  compareWith = input.required<SpeciesDetail | null>();
  compareList = signal<SpeciesDetail[]>([]);

  allSpecies: SpeciesDetail[] = [];
  displayedData = signal<SpeciesDetail[]>([]);
  loading = signal(true);

  isSearchShown = signal(true);

  #searchTermSubject = new BehaviorSubject<string>('');
  #searchTerm = this.#searchTermSubject.asObservable().pipe(debounceTime(500), distinctUntilChanged(), share());
  filterSubscription = this.#searchTerm
    .pipe(
      map(searchTerm => {
        let res = null;
        if (searchTerm.length > 2) {
          const lowered = searchTerm.toLowerCase();
          res = this.allSpecies.filter(
            _ =>
              _.name.latin.toLowerCase().includes(lowered) ||
              _.name.localized.sk.toLowerCase().includes(lowered) ||
              _.name.localized.en.toLowerCase().includes(lowered)
          );
        }
        return res;
      }),
      tap(_ => {
        if (!_) {
          this.displayedData.set(this.allSpecies);
        } else {
          this.displayedData.set(_);
        }
      })
    )
    .subscribe();

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  ngOnInit() {
    this.#service
      .getAllSpeciesDetail()
      .pipe(
        map(x => x as SpeciesDetail[]),
        tap(_ => {
          this.allSpecies = _;
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
    this.displayedData.set(this.allSpecies);
  }

  showComparator() {
    this.isSearchShown.set(false);
  }

  onSearchFilter(value: string) {
    this.#searchTermSubject.next(value);
  }

  toggleComparison(species: SpeciesDetail) {
    if (this.isSelected(species.id)) {
      this.removeFromComparison(species.id);
    } else {
      this.compareList.update(_ => [..._, species]);
    }
  }

  removeFromComparison(speciesId: string) {
    const array = this.compareList().filter(_ => _.id !== speciesId);
    this.compareList.set(array);
  }

  isSelected(speciesId: string) {
    return this.compareList().find(_ => _.id === speciesId) !== undefined;
  }
}
