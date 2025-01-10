import { LatinName } from './latin-name';

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
}

export interface SpeciesDetail {
  id: string;
  name: SpeciesName;
  images: {
    imageSrc: string;
    thumbnailSrc: string;
    metadata: ImageMetadata;
  }[];
  skAbundance: Abundance;
  movementPattern?: MovementPattern;
  similarSpecies?: Similars;
}

export interface LocalizedText {
  sk: string;
  en: string;
}

export interface SpeciesName {
  latin: LatinName;
  localized: LocalizedText;
}

interface ComparableSpecies {
  metadata: ImageMetadata;
  species: LatinName;
}

type Comparable = ComparableSpecies | LatinName;
export interface Similars {
  adult?: Comparable[];
  adultWinter?: Comparable[];
  adultSummer?: Comparable[];
  adultMale?: Comparable[];
  adultFemale?: Comparable[];
  breedingMale?: Comparable[];
  firstWinter?: Comparable[];
  secondWinter?: Comparable[];
  immature?: Comparable[];
  juvenile?: Comparable[];
}

export type Abundance =
  | 'common' // A species that is frequently observed in a particular area.
  | 'uncommon' // A species that is not frequently observed but is still present in the area.
  | 'occasional' // A species that appears in the area infrequently and unpredictably. (Less than cca 200 observations in total - higher tens to low hundreds)
  | 'rare' // A species that is seldom seen in the area. (Less than cca 20 observations in total - low tens)
  | 'historical'; // (No observation from year 2015)

export type MovementPattern =
  | 'resident' // A species that lives in the area year-round. (Resident or partial migratory)
  | 'migratory' // A species that moves seasonally between different regions.
  | 'vagrant' // A species that appears outside its normal range, often due to unusual circumstances. SK: Tulácke správanie
  | 'irruptive'; // A species that occasionally move in large numbers to areas outside their normal range, often due to food scarcity. SK: Invazívny pohyb

// TODO: create translations for image metadata
export type ImageMetadata =
  | 'adult'
  | 'adult light morph'
  | 'adult rufous morph'
  | 'adult dark morph'
  | 'light morph'
  | 'dark morph'
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
  | 'first year' // mostly for gulls
  | 'first winter' // mostly for gulls
  | 'first summer' // mostly for gulls
  | 'second winter' // mostly for gulls
  | 'second summer' // mostly for gulls
  | 'unknown'; // TODO: Handle unknown value - hide metadata in case of unknown value
