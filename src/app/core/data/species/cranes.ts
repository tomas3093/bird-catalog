import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'cranes';

const data: GroupData = {
  name: { en: 'Cranes', sk: 'Žeriavy' },
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
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Ardea cinerea'],
        juvenile: ['Ardea cinerea'],
      },
    },
    {
      name: {
        latin: 'Anthropoides virgo',
        localized: {
          en: 'Demoiselle Crane',
          sk: 'Žeriav stepný',
        },
      },
      imageAssets: [
        { assetId: '135206521', metadata: 'unknown' },
        { assetId: '59740801', metadata: 'unknown' },
        { assetId: '104750861', metadata: 'unknown' },
        { assetId: '110084431', metadata: 'unknown' },
        { assetId: '59740761', metadata: 'unknown' },
      ],
      skAbundance: 'historical',
    },
  ],
};

export const cranesGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const cranesSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
