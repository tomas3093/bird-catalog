import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'cormorants';

const data: GroupData = {
  name: { en: 'Cormorants', sk: 'Kormorány' },
  species: [
    {
      name: {
        latin: 'Phalacrocorax carbo',
        localized: {
          en: 'Great Cormorant',
          sk: 'Kormorán veľký',
        },
      },
      imageAssets: [
        { assetId: '255272571', metadata: 'breeding adult' },
        { assetId: '20800341', metadata: 'adult' },
        { assetId: '63894701', metadata: 'unknown' },
        { assetId: '37815671', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Microcarbo pygmaeus',
        localized: {
          en: 'Pygmy Cormorant',
          sk: 'Kormorán malý',
        },
      },
      imageAssets: [
        { assetId: '203323181', metadata: 'breeding adult' },
        { assetId: '198730061', metadata: 'unknown' },
        { assetId: '44308411', metadata: 'nonbreeding adult' },
        { assetId: '223159421', metadata: 'immature' },
        { assetId: '80139281', metadata: 'nonbreeding adult' },
      ],
    },
  ],
};

export const cormorantsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const cormorantsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
