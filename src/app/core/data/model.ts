import { GroupName } from '../model/group-name';
import { Abundance, ImageMetadata, LocalizedText, MovementPattern, Similars, SpeciesName } from '../model/species';

/** DB STORAGE OBJECTS
 * Stored in hierarchical structure
 * Generated to UI objects (IDs are computed automatically)
 */
interface Species {
  name: SpeciesName;
  imageAssets: { assetId: string; metadata: ImageMetadata }[];
  skAbundance: Abundance;
  movementPattern?: MovementPattern;
  similarSpecies?: Similars; // List of visually similar species
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

interface GroupDataWithoutSubgroup {
  name: LocalizedText;
  species: Species[];
}

interface GroupDataWithSubgroup {
  name: LocalizedText;
  subGroups: {
    name: LocalizedText;
    species: Species[];
  }[];
}

export type GroupData = GroupDataWithoutSubgroup | GroupDataWithSubgroup;

export function hasSubgroups(obj: GroupData): obj is GroupDataWithSubgroup {
  return (obj as GroupDataWithSubgroup).subGroups !== undefined;
}

/***************************************************************************************************
 ***************************************************************************************************
 **************************************************************************************************/

/** UI OBJECTS
 * Used in UI, fetched by storage service
 */

export interface SpeciesGroupModel {
  id: string;
  name: LocalizedText;
  parentGroupId: GroupName | null;
}

export interface SpeciesModel extends Species {
  id: string; // Auto generated unique ID, format: <groupId>-<(optional) subGroupId>-<speciesId>
  groupId: string;
}
