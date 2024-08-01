import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { SpeciesDetail } from '../../core/model/species';
import { StorageService } from '../../core/services/storage.service';
import { map, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordingSearchResult } from '../../core/model/sound-recording';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrl: './species-detail.component.scss',
})
export class SpeciesDetailComponent implements OnInit {
  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #sanitizer = inject(DomSanitizer);

  readonly #service = inject(StorageService);

  isDetailLoading = signal(true);
  isRecordingsLoading = signal(true);
  isImagesLoading = computed(() => this.#imageLoadCounter() > 0);
  detail = signal<SpeciesDetail | null>(null);

  recordings = signal<RecordingSearchResult | null>(null);
  isComparatorShown = signal(false);
  #imageLoadCounter = signal<number>(Number.MAX_VALUE);

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
        map((params) => params.get('code') ?? ''),
        switchMap((paramCode) => (paramCode ? this.#service.getSpeciesDetail(paramCode) : of(null))),
      )
      .pipe(
        tap((detail) => {
          this.detail.set(detail);
          this.#imageLoadCounter.set(detail?.images.length ?? 0);
          this.isDetailLoading.set(false);
        }),
        switchMap((detail) => (detail ? this.#service.getSoundRecordings(detail.name.latin) : of(null))),
        tap((result) => {
          if (result) {
            const items: RecordingSearchResult = {
              numRecordings: result.numRecordings,
              numSpecies: result.numSpecies,
              page: result.page,
              numPages: result.numPages,
              recordings: result.recordings.splice(0, 5), // Show only first 5 records
            };
            this.recordings.set(items);
          }
          this.isRecordingsLoading.set(false);
        }),
      )
      .subscribe();
  }

  imageLoaded() {
    this.#imageLoadCounter.update((value) => value - 1);
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

  recordingUrl(id: string) {
    return this.#sanitizer.bypassSecurityTrustResourceUrl('https://xeno-canto.org/' + id + '/embed?simple=1');
  }
}
