import { GroupData, hasSubgroups, SpeciesGroupModel, SpeciesModel } from '../data/model';
import { CatalogItem } from '../model/species';

/**
 * Returns image URL according to specified asset ID from Macaulay library
 * @param assetId
 * @param fullSize
 * @returns
 */
export const macaulayImgAssetUrl = (assetId: string, fullSize: boolean): string => {
  const url = 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/' + assetId;
  return fullSize ? `${url}/1200` : url;
};

/**
 * Returns main image URL from species asset list
 * @param speciesImageAssets
 * @param fullSize
 * @returns
 */
export const speciesMainImage = (speciesImageAssets: string[], fullSize: boolean): string => {
  if (!speciesImageAssets || speciesImageAssets.length <= 0) {
    throw Error('Image assets not available.');
  }

  return macaulayImgAssetUrl(speciesImageAssets[0], fullSize);
};

/**
 * Returns URL of search endpoint in xeno-canto database for particular species
 * @param speciesName
 * @returns
 */
export const xenoCantoSearchUrl = (speciesName: string): string => {
  return 'https://xeno-canto.org/api/2/recordings?query=' + speciesName.toLowerCase().replaceAll(' ', '+') + '+q:A';
};

/**
 * Remove diacritics and converts string to lower case for better use in comparision
 * @param value
 * @returns
 */
export const normalizeString = (value: string): string => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

/**
 * Generates array of groups and subgroups (if available) for specific GroupData hierarchy tree (file)
 * @param data
 * @param groupId
 * @returns
 */
export const generateGroups = (data: GroupData, groupId: string): SpeciesGroupModel[] => {
  const res: SpeciesGroupModel[] = [];
  res.push({ id: groupId, name: data.name, parentGroupId: null });
  if (hasSubgroups(data)) {
    res.push(
      ...data.subGroups.map(
        (subGroup, index) => ({ id: `${groupId}-${index}`, name: subGroup.name, parentGroupId: groupId }) as SpeciesGroupModel,
      ),
    );
  }
  return res;
};

/**
 * Generates array of all species (from groups and subgroups) for specific GroupData hierarchy tree (file)
 * @param data
 * @param groupId
 * @returns
 */
export const generateSpecies = (data: GroupData, groupId: string): SpeciesModel[] => {
  const res: SpeciesModel[] = [];
  if (!hasSubgroups(data)) {
    res.push(
      ...data.species.map(
        (species, index) =>
          ({
            id: `${groupId}-${index}`,
            name: species.name,
            groupId: groupId,
            imageAssets: species.imageAssets,
          }) as SpeciesModel,
      ),
    );
  } else {
    data.subGroups.forEach((subGroup, subGroupIndex) => {
      const subGroupId = `${groupId}-${subGroupIndex}`;
      res.push(
        ...subGroup.species.map(
          (species, speciesIndex) =>
            ({
              id: `${subGroupId}-${speciesIndex}`,
              name: species.name,
              groupId: subGroupId,
              imageAssets: species.imageAssets,
            }) as SpeciesModel,
        ),
      );
    });
  }
  return res;
};

/**
 * Get N random items from an array
 * @param arr
 * @param numItems
 * @returns
 */
export const getRandomItems = <T>(arr: T[], numItems: number): T[] => {
  // Create a copy of the array to avoid mutating the original array
  const shuffled = arr.slice();

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return the first 'numItems' elements from the shuffled array
  return shuffled.slice(0, numItems);
};

/**
 * Returns 3 items which are either random or similar to correctAnswer (to achieve higher difficulty)
 * @param allSpecies
 * @param correctAnswer
 * @param random
 */
export const getSimilarSpecies = (allSpecies: CatalogItem[], correctAnswer: CatalogItem, random = false): CatalogItem[] => {
  // TODO add non random algorithm
  const array = allSpecies.filter((_) => _.id !== correctAnswer.id);
  return getRandomItems(array, 3);
};
