import { Injectable } from '@angular/core';
import { data, macaulayImgAssetUrl, speciesMainImage, taxonomy } from './data';
import { Species, SpeciesDetail } from '../model/species';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  speciesStorage = data;
  groupStorage = taxonomy;

  getAllSpecies(): Observable<Species[]> {
    const result = this.speciesStorage.map((species) => {
      const group = this.groupStorage.find((_) => _.id === species.groupId);
      if (!group) {
        throw Error('Unknown species group.');
      }

      const item = {
        code: species.code,
        name: species.name,
        mainImageSrc: speciesMainImage(
          species.imageAssets.map((_) => _.assetId),
          false
        ),
        thumbnailSrc: speciesMainImage(
          species.imageAssets.map((_) => _.assetId),
          true
        ),
        group: group,
      };

      return item;
    });

    return of(result);
  }

  getSpeciesDetail(code: string): Observable<SpeciesDetail> {
    const item = this.speciesStorage.find((_) => _.code === code);
    if (!item) {
      throw Error('Species not found');
    }

    const result: SpeciesDetail = {
      code: item.code,
      name: item.name,
      images: item.imageAssets.map((_) => ({
        imageSrc: macaulayImgAssetUrl(_.assetId, true),
        thumbnailSrc: macaulayImgAssetUrl(_.assetId, false),
        metadata: _.metadata,
      })),
    };

    return of(result);
  }
}
