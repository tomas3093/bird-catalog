export interface Species {
  name: SpeciesName;
  mainImageSrc: string;
  thumbnailSrc: string;
}

export interface SpeciesName {
  latin: string;
  sk: string;
  en: string;
}

export type Habitat = 'water' | 'forest' | 'field-steppe' | 'urban';
export type ImageMetadata =
  | 'adult'
  | 'juvenile'
  | 'nonbreeding/immature'
  | 'breeding male'
  | 'female'
  | 'flock'
  | 'habitat';
