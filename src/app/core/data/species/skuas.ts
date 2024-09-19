import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'skuas';

const data: GroupData = {
  name: { en: 'Skuas', sk: 'Pomorníky' },
  species: [
    {
      name: {
        latin: 'Stercorarius longicaudus',
        localized: {
          en: 'Long-tailed Skua',
          sk: 'Pomorník malý',
        },
      },
      imageAssets: [
        { assetId: '31703181', metadata: 'adult' },
        { assetId: '31703181', metadata: 'juvenile' },
        { assetId: '37392451', metadata: 'first summer' },
        { assetId: '171518841', metadata: 'subadult' },
        { assetId: '67970231', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Stercorarius parasiticus',
        localized: {
          en: 'Arctic Skua',
          sk: 'Pomorník príživný',
        },
      },
      imageAssets: [
        { assetId: '64787191', metadata: 'adult light morph' },
        { assetId: '107701751', metadata: 'adult dark morph' },
        { assetId: '274396611', metadata: 'juvenile' },
        { assetId: '35389701', metadata: 'immature' },
        { assetId: '64787191', metadata: 'subadult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Stercorarius pomarinus',
        localized: {
          en: 'Pomarine Skua',
          sk: 'Pomorník stredný',
        },
      },
      imageAssets: [
        { assetId: '107100071', metadata: 'adult' },
        { assetId: '27329601', metadata: 'adult' },
        { assetId: '107100071', metadata: 'juvenile' },
        { assetId: '75112941', metadata: 'juvenile' },
        { assetId: '107100071', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
  ],
};

export const skuasGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const skuasSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
