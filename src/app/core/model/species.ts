export interface Species {
  code: string;
  name: SpeciesName;
  thumbnailSrc: string;
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
  | 'nonbreeding/immature'
  | 'immature' // Immature includes juvenile & subadult
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
