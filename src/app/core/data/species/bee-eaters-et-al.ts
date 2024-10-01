import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'beeEatersEtAl';

const data: GroupData = {
  name: { en: 'Bee-eaters et al.', sk: 'Včeláriky et al.' },
  species: [
    {
      name: {
        latin: 'Upupa epops',
        localized: {
          en: 'Eurasian Hoopoe',
          sk: 'Dudok chochlatý'
        }
      },
      imageAssets: [
        { assetId: '40358641', metadata: 'unknown' },
        { assetId: '44255471', metadata: 'unknown' },
        { assetId: '36249331', metadata: 'unknown' },
        { assetId: '29332781', metadata: 'unknown' },
        { assetId: '38430241', metadata: 'unknown' }
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: { adult: ['Garrulus glandarius'] }
    },
    {
      name: {
        latin: 'Merops apiaster',
        localized: {
          en: 'European Bee-eater',
          sk: 'Včelárik zlatý'
        }
      },
      imageAssets: [
        { assetId: '205148301', metadata: 'adult' },
        { assetId: '42895681', metadata: 'adult' },
        { assetId: '42482511', metadata: 'adult' },
        { assetId: '204615101', metadata: 'adult' },
        { assetId: '41561101', metadata: 'immature' }
      ],
      skAbundance: 'common',
      movementPattern: 'migratory'
    },
    {
      name: {
        latin: 'Coracias garrulus',
        localized: {
          en: 'European Roller',
          sk: 'Krakľa belasá'
        }
      },
      imageAssets: [
        { assetId: '204441381', metadata: 'unknown' },
        { assetId: '41454611', metadata: 'unknown' },
        { assetId: '43952241', metadata: 'unknown' },
        { assetId: '251033331', metadata: 'unknown' },
        { assetId: '44933261', metadata: 'unknown' }
      ],
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: { adult: ['Merops apiaster'] }
    }
  ]
};

export const beeEatersEtAlGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const beeEatersEtAlSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
