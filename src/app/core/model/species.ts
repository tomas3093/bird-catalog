export type CatalogGroup =
  | {
      id: string;
      name: LocalizedText;
      thumbnailSrc: string;
      hasChildren: false;
      species: CatalogItem[];
    }
  | {
      id: string;
      name: LocalizedText;
      thumbnailSrc: string;
      hasChildren: true;
      subGroups: {
        name: LocalizedText;
        species: CatalogItem[];
      }[];
    };

export interface CatalogItem {
  id: string;
  name: SpeciesName;
  thumbnailSrc: string;
  fullsizeImgSrc: string;
}

export interface SpeciesDetail {
  id: string;
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

// TODO: create translations for image metadata
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
