import { Injectable, inject } from '@angular/core';
import { data, macaulayImgAssetUrl, speciesMainImage, taxonomy } from './data';
import { Species, SpeciesDetail } from '../model/species';
import { of } from 'rxjs';
import { GroupItem } from './storage.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  speciesStorage = data;
  groupStorage = taxonomy;

  private api = inject(ApiService);

  getSpeciesGroups() {
    const result = this.groupStorage;

    return this.api.performCall<GroupItem[]>(() => of(result));
  }

  getAllSpecies() {
    const result = this.speciesStorage.map((species) => {
      const group = this.groupStorage.find((_) => _.id === species.groupId);
      if (!group) {
        throw Error('Unknown species group.');
      }

      const group2 = group.parentGroupId
        ? this.groupStorage.find((_) => _.id === group.parentGroupId)
        : undefined;

      if (group.parentGroupId !== null && !group2) {
        throw Error('Unknown species subGroup.');
      }

      const item: Species = {
        code: species.code,
        name: species.name,
        thumbnailSrc: speciesMainImage(
          species.imageAssets.map((_) => _.assetId),
          false
        ),
        fullsizeImgSrc: speciesMainImage(
          species.imageAssets.map((_) => _.assetId),
          true
        ),
        taxonomy:
          group.parentGroupId === null
            ? { group: group.name }
            : {
                group: group2!.name,
                subGroup: group.name,
              },
      };

      return item;
    });

    return this.api.performCall<Species[]>(() => of(result));
  }

  getSpeciesDetail(code: string) {
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

    return this.api.performCall<SpeciesDetail>(() => of(result));
  }
}
