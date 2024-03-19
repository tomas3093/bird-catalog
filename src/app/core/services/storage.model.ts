import { SpeciesName, ImageMetadata } from '../model/species';

export interface DataItem {
  code: string;
  name: SpeciesName;
  groupId: number;
  imageAssets: { assetId: string; metadata: ImageMetadata }[];
  // Range in cm
  // length: {
  //   from: number;
  //   to: number;
  // };
  // Range in cm
  // wingspan: {
  //   from: number;
  //   to: number;
  // };
  // breedingInSk: boolean;
  // monthsPresentInSk: {
  //   from: number;
  //   to: number;
  // };
}

export interface GroupItem {
  id: number;
  en: string;
  sk: string;
  subGroup?: {
    en: string;
    sk: string;
  };
}
