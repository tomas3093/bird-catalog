import { QuizDifficulty } from '../../components/quiz/quiz.store';
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
 * Return items which are either random or similar to correctAnswer according to difficulty
 * @param allSpecies
 * @param correctAnswer
 * @param difficulty
 * @param count number of items to return
 */
export const getSimilarSpecies = (
  allSpecies: CatalogItem[],
  correctAnswer: CatalogItem,
  difficulty: QuizDifficulty,
  count: number,
): CatalogItem[] => {
  const array = allSpecies.filter((_) => _.id !== correctAnswer.id);
  const res: CatalogItem[] = [];
  let tmp: CatalogItem[] = [];

  // Auto generated unique ID, format: <groupId>-<(optional) subGroupId>-<speciesId>
  const groupName = correctAnswer.id.split('-')[0];
  const subGroupId = correctAnswer.id.split('-').length === 3 ? correctAnswer.id.split('-')[1] : null;

  switch (difficulty) {
    case QuizDifficulty.BEGINNER:
      return getRandomItems(array, count); // all random

    case QuizDifficulty.ADVANCED:
      if (subGroupId !== null) {
        // push items from subgroup
        res.push(
          ...array.filter((_) => {
            const s = _.id.split('-');
            _.id.startsWith(groupName) && s.length === 3 && subGroupId === s[1];
          }),
        );

        if (res.length >= count) {
          return getRandomItems(res, count); // take count and shuffle
        }
      }

      // push items from group
      if (res.length > 0) {
        tmp = array.filter((_) => _.id.startsWith(groupName) && !res.map((item) => item.id).includes(_.id));
        res.push(...tmp.slice(0, count - res.length));
      } else {
        res.push(...array.filter((_) => _.id.startsWith(groupName)));
      }
      if (res.length >= count) {
        return getRandomItems(res, count);
      }

      // push random items
      tmp = array.filter((_) => !res.map((item) => item.id).includes(_.id));
      res.push(...tmp.slice(0, count - res.length));
      return getRandomItems(res, count); // shuffle

    case QuizDifficulty.EXPERT:
      const latinNameSplit = correctAnswer.name.latin.split(' ');
      // push items with the same latin name (Turdus sp., Curruca sp. ...)
      res.push(...array.filter((_) => _.name.latin.includes(latinNameSplit[0])));
      if (res.length >= count) {
        return getRandomItems(res, count);
      }

      if (subGroupId !== null) {
        // push items from subgroup
        tmp = array.filter((_) => {
          const s = _.id.split('-');
          _.id.startsWith(groupName) && s.length === 3 && subGroupId === s[1];
        });
        res.push(...tmp.slice(0, count - res.length));

        if (res.length >= count) {
          return getRandomItems(res, count);
        }
      }

      // push items from group
      if (res.length > 0) {
        tmp = array.filter((_) => _.id.startsWith(groupName) && !res.map((item) => item.id).includes(_.id));
        res.push(...tmp.slice(0, count - res.length));
      } else {
        res.push(...array.filter((_) => _.id.startsWith(groupName)));
      }
      if (res.length >= count) {
        return getRandomItems(res, count);
      }

      // push random items
      tmp = array.filter((_) => !res.map((item) => item.id).includes(_.id));
      res.push(...tmp.slice(0, count - res.length));
      return getRandomItems(res, count); // shuffle
  }
};
