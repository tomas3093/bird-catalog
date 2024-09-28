import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'cormorants-pelicans';

const data: GroupData = {
  name: { en: 'Cormorants & pelicans', sk: 'Kormorány a pelikány' },
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
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Gulosus aristotelis', 'Microcarbo pygmaeus'],
        juvenile: ['Gulosus aristotelis'],
      },
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
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Phalacrocorax carbo', 'Gulosus aristotelis'],
      },
    },
    {
      name: {
        latin: 'Gulosus aristotelis',
        localized: {
          en: 'European Shag',
          sk: 'Kormorán chochlatý',
        },
      },
      imageAssets: [
        { assetId: '64902001', metadata: 'breeding adult' },
        { assetId: '34403961', metadata: 'nonbreeding adult' },
        { assetId: '50334021', metadata: 'breeding adult' },
        { assetId: '30447851', metadata: 'nonbreeding adult' },
        { assetId: '246507621', metadata: 'immature' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adult: ['Phalacrocorax carbo'],
        juvenile: ['Phalacrocorax carbo'],
      },
    },
    {
      name: {
        latin: 'Pelecanus crispus',
        localized: {
          en: 'Dalmatian Pelican',
          sk: 'Pelikán kučeravý',
        },
      },
      imageAssets: [
        { assetId: '138227691', metadata: 'nonbreeding/immature' },
        { assetId: '135835191', metadata: 'breeding adult' },
        { assetId: '125792371', metadata: 'breeding adult' },
        { assetId: '106473001', metadata: 'nonbreeding/immature' },
        { assetId: '44827341', metadata: 'nonbreeding/immature' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adult: ['Pelecanus onocrotalus'],
      },
    },
    {
      name: {
        latin: 'Pelecanus onocrotalus',
        localized: {
          en: 'Great White Pelican',
          sk: 'Pelikán ružový',
        },
      },
      imageAssets: [
        { assetId: '65630041', metadata: 'adult' },
        { assetId: '89602721', metadata: 'adult' },
        { assetId: '78548051', metadata: 'immature' },
        { assetId: '65629941', metadata: 'juvenile' },
        { assetId: '65629061', metadata: 'adult' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Pelecanus crispus'],
      },
    },
  ],
};

export const cormorantsPelicansGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const cormorantsPelicansSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
