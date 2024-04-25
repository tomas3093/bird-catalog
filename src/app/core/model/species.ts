export type CatalogGroup =
  | {
      name: LocalizedText;
      thumbnailSrc: string;
      hasChildren: false;
      species: CatalogItem[];
    }
  | {
      name: LocalizedText;
      thumbnailSrc: string;
      hasChildren: true;
      subGroups: {
        name: LocalizedText;
        species: CatalogItem[];
      }[];
    };

interface CatalogItem {
  code: string;
  name: SpeciesName;
  thumbnailSrc: string;
  fullsizeImgSrc: string;
}

// TODO: Could be removed
export interface Species extends CatalogItem {
  taxonomy: SpeciesGroup;
}

export interface SpeciesDetail {
  code: string;
  name: SpeciesName;
  images: {
    imageSrc: string;
    thumbnailSrc: string;
    metadata: ImageMetadata;
  }[];
}

export interface LocalizedText {
  sk: string;
  en: string;
}

export interface SpeciesName {
  latin: string;
  localized: LocalizedText;
}

export interface SpeciesGroup {
  group: LocalizedText;
  subGroup?: LocalizedText;
}

export type ImageMetadata =
  | 'adult'
  | 'adult light morph'
  | 'adult rufous morph'
  | 'adult dark morph'
  | 'nonbreeding/immature'
  | 'immature' // Immature includes juvenile & subadult
  | 'immature light morph'
  | 'juvenile' // 1st year
  | 'subadult' // mostly for raptors
  | 'breeding male'
  | 'adult male'
  | 'immature male'
  | 'adult female'
  | 'female'
  | 'female/immature male'
  | 'immature female'
  | 'unknown';
