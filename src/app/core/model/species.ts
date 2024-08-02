export type CatalogGroup =
  | {
      id: number;
      name: LocalizedText;
      thumbnailSrc: string;
      hasChildren: false;
      species: CatalogItem[];
    }
  | {
      id: number;
      name: LocalizedText;
      thumbnailSrc: string;
      hasChildren: true;
      subGroups: {
        name: LocalizedText;
        species: CatalogItem[];
      }[];
    };

export interface CatalogItem {
  code: string;
  name: SpeciesName;
  thumbnailSrc: string;
  fullsizeImgSrc: string;
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

export type ImageMetadata =
  | 'adult' // TODO: create translations for image metadata
  | 'adult light morph'
  | 'adult rufous morph'
  | 'adult dark morph'
  | 'nonbreeding/immature'
  | 'immature' // Immature includes juvenile & subadult
  | 'immature light morph'
  | 'juvenile' // 1st year
  | 'subadult' // mostly for raptors
  | 'breeding adult'
  | 'breeding male'
  | 'breeding female'
  | 'nonbreeding adult'
  | 'nonbreeding male'
  | 'nonbreeding female'
  | 'adult male'
  | 'immature male'
  | 'adult female'
  | 'female'
  | 'female/immature male'
  | 'immature female'
  | 'molting adult'
  | 'eclipse male' // ducks
  | 'male and female'
  | 'first winter' // mostly for gulls
  | 'first summer' // mostly for gulls
  | 'second winter' // mostly for gulls
  | 'unknown'; // TODO: Handle unknown value - hide metadata in case of unknown value
