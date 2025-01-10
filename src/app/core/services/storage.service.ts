import { Injectable, inject } from '@angular/core';
import { CatalogGroup, CatalogItem, SpeciesDetail } from '../model/species';
import { Observable, of, switchMap } from 'rxjs';
import { ApiService } from './api.service';
import { macaulayImgAssetUrl, speciesMainImage, xenoCantoSearchUrl } from '../misc/util';
import { RecordingSearchResult } from '../model/sound-recording';
import { groups, species } from '../data/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private groupStorage = groups;
  private speciesStorage = species;

  private api = inject(ApiService);

  getSpeciesCatalog(): Observable<Readonly<CatalogGroup[]>> {
    let result: CatalogGroup[] = this.groupStorage
      .filter(group => group.parentGroupId === null)
      .map(_ => {
        const subGroups = this.groupStorage.filter(x => x.parentGroupId === _.id);

        return subGroups.length > 0
          ? {
              id: _.id,
              name: _.name,
              thumbnailSrc: '',
              hasChildren: true,
              subGroups: subGroups.map(y => ({
                name: y.name,
                species: this.speciesStorage
                  .filter(z => z.groupId === y.id)
                  .map(a => ({
                    id: a.id,
                    name: a.name,
                    thumbnailSrc: speciesMainImage(
                      a.imageAssets.map(b => b.assetId),
                      false
                    ),
                    fullsizeImgSrc: speciesMainImage(
                      a.imageAssets.map(b => b.assetId),
                      true
                    )
                  }))
              }))
            }
          : {
              id: _.id,
              name: _.name,
              thumbnailSrc: '',
              hasChildren: false,
              species: this.speciesStorage
                .filter(y => y.groupId === _.id)
                .map(a => ({
                  id: a.id,
                  name: a.name,
                  thumbnailSrc: speciesMainImage(
                    a.imageAssets.map(b => b.assetId),
                    false
                  ),
                  fullsizeImgSrc: speciesMainImage(
                    a.imageAssets.map(b => b.assetId),
                    true
                  )
                }))
            };
      });

    result = result.map(_ => {
      if (_.hasChildren) {
        _.thumbnailSrc = _.subGroups[0].species[0].thumbnailSrc;
      } else {
        _.thumbnailSrc = _.species[0].thumbnailSrc;
      }

      return _;
    });

    return this.api.performCall<CatalogGroup[]>(() => of(result));
  }

  getAllCatalogSpecies(): Observable<Readonly<CatalogItem[]>> {
    const result = this.speciesStorage.map(species => {
      const group = this.groupStorage.find(_ => _.id === species.groupId);
      if (!group) {
        throw Error('Unknown species group.');
      }

      const group2 = group.parentGroupId ? this.groupStorage.find(_ => _.id === group.parentGroupId) : undefined;

      if (group.parentGroupId !== null && !group2) {
        throw Error('Unknown species subGroup.');
      }

      const item: CatalogItem = {
        id: species.id,
        name: species.name,
        thumbnailSrc: speciesMainImage(
          species.imageAssets.map(_ => _.assetId),
          false
        )
      };

      return item;
    });

    return this.api.performCall<CatalogItem[]>(() => of(result));
  }

  getSpeciesDetail(id: string): Observable<Readonly<SpeciesDetail>> {
    const item = this.speciesStorage.find(_ => _.id === id);
    if (!item) {
      throw Error('Species not found');
    }

    const result: SpeciesDetail = {
      id: item.id,
      name: item.name,
      images: item.imageAssets.map(_ => ({
        imageSrc: macaulayImgAssetUrl(_.assetId, true),
        thumbnailSrc: macaulayImgAssetUrl(_.assetId, false),
        metadata: _.metadata
      })),
      skAbundance: item.skAbundance,
      movementPattern: item.movementPattern,
      similarSpecies: item.similarSpecies
    };

    return this.api.performCall<SpeciesDetail>(() => of(result));
  }

  getAllSpeciesDetail(): Observable<Readonly<SpeciesDetail[]>> {
    const result: SpeciesDetail[] = this.speciesStorage.map(item => ({
      id: item.id,
      name: item.name,
      images: item.imageAssets.map(asset => ({
        imageSrc: macaulayImgAssetUrl(asset.assetId, true),
        thumbnailSrc: macaulayImgAssetUrl(asset.assetId, false),
        metadata: asset.metadata
      })),
      skAbundance: item.skAbundance,
      movementPattern: item.movementPattern,
      similarSpecies: item.similarSpecies
    }));
    return this.api.performCall<SpeciesDetail[]>(() => of(result));
  }

  getSoundRecordings(id: string) {
    return this.getSpeciesDetail(id).pipe(
      switchMap(speciesDetail =>
        this.api.getRequest<RecordingSearchResult>(xenoCantoSearchUrl(speciesDetail.name.latin))
      )
    );
  }
}
