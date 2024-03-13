import { Component, OnInit, inject, signal } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { Species } from '../../core/model/species';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ImageModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  #service = inject(StorageService);

  loading = signal(true);
  species = signal<Species[]>([]);

  ngOnInit() {
    this.#service
      .getAllSpecies()
      .pipe(
        tap((_) => {
          this.species.set(_);
          this.loading.set(false);
        })
      )
      .subscribe();
  }
}
