import { Injectable, inject } from '@angular/core';
import { CatalogGroup, Species, SpeciesDetail } from '../model/species';
import { of } from 'rxjs';
import { ApiService } from './api.service';
import { species } from '../data/species';
import { groups } from '../data/groups';
import { macaulayImgAssetUrl, speciesMainImage } from '../misc/util';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  groupStorage = groups;
  speciesStorage = species;

  private api = inject(ApiService);

  getSpeciesCatalog() {
    let result: CatalogGroup[] = this.groupStorage
      .filter((group) => group.parentGroupId === null)
      .map((_) => {
        const subGroups = this.groupStorage.filter((x) => x.parentGroupId === _.id);

        return subGroups.length > 0
          ? {
              name: _.name,
              thumbnailSrc: '',
              hasChildren: true,
              subGroups: subGroups.map((y) => ({
                name: y.name,
                species: this.speciesStorage
                  .filter((z) => z.groupId === y.id)
                  .map((a) => ({
                    code: a.code,
                    name: a.name,
                    thumbnailSrc: speciesMainImage(
                      a.imageAssets.map((b) => b.assetId),
                      false,
                    ),
                    fullsizeImgSrc: speciesMainImage(
                      a.imageAssets.map((b) => b.assetId),
                      true,
                    ),
                  })),
              })),
            }
          : {
              name: _.name,
              thumbnailSrc: '',
              hasChildren: false,
              species: this.speciesStorage
                .filter((y) => y.groupId === _.id)
                .map((a) => ({
                  code: a.code,
                  name: a.name,
                  thumbnailSrc: speciesMainImage(
                    a.imageAssets.map((b) => b.assetId),
                    false,
                  ),
                  fullsizeImgSrc: speciesMainImage(
                    a.imageAssets.map((b) => b.assetId),
                    true,
                  ),
                })),
            };
      });

    result = result.map((_) => {
      if (_.hasChildren) {
        _.thumbnailSrc = _.subGroups[0].species[0].thumbnailSrc;
      } else {
        _.thumbnailSrc = _.species[0].thumbnailSrc;
      }

      return _;
    });

    return this.api.performCall<CatalogGroup[]>(() => of(result));
  }

  getAllSpecies() {
    const result = this.speciesStorage.map((species) => {
      const group = this.groupStorage.find((_) => _.id === species.groupId);
      if (!group) {
        throw Error('Unknown species group.');
      }

      const group2 = group.parentGroupId ? this.groupStorage.find((_) => _.id === group.parentGroupId) : undefined;

      if (group.parentGroupId !== null && !group2) {
        throw Error('Unknown species subGroup.');
      }

      const item: Species = {
        code: species.code,
        name: species.name,
        thumbnailSrc: speciesMainImage(
          species.imageAssets.map((_) => _.assetId),
          false,
        ),
        fullsizeImgSrc: speciesMainImage(
          species.imageAssets.map((_) => _.assetId),
          true,
        ),
        // TODO: Could be removed
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
