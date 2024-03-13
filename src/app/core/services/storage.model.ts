import { SpeciesName, Habitat, ImageMetadata } from '../model/species';

export interface DataItem {
  id: string;
  name: SpeciesName;
  habitats: Habitat[];
  imageAssets: { assetId: string; metadata: ImageMetadata }[];
  // Range in cm
  length: {
    from: number;
    to: number;
  };
  // Range in cm
  wingspan: {
    from: number;
    to: number;
  };
  breedingInSk: boolean;
  monthsPresentInSk: {
    from: number;
    to: number;
  };
}
