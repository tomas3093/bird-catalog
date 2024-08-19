import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'crane';

const data: GroupData = {
  name: { en: 'Crane', sk: 'Žeriav' },
  species: [
    {
      name: {
        latin: 'Grus grus',
        localized: {
          en: 'Common Crane',
          sk: 'Žeriav popolavý',
        },
      },
      imageAssets: [
        { assetId: '67533851', metadata: 'adult' },
        { assetId: '37517751', metadata: 'juvenile' },
        { assetId: '39771581', metadata: 'juvenile' },
        { assetId: '31850001', metadata: 'adult' },
        { assetId: '42353741', metadata: 'unknown' },
      ],
    },
  ],
};

export const craneGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const craneSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
