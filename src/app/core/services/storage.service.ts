import { Injectable } from '@angular/core';
import { data, speciesMainImage } from './data';
import { Species } from '../model/species';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storage = data;

  getAllSpecies(): Observable<Species[]> {
    const result = this.storage.map((_) => ({
      name: _.name,
      mainImageSrc: speciesMainImage(
        _.imageAssets.map((_) => _.assetId),
        false
      ),
      thumbnailSrc: speciesMainImage(
        _.imageAssets.map((_) => _.assetId),
        true
      ),
    }));

    return of(result);
  }
}
