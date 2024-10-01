import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'shrikes';

const data: GroupData = {
  name: { en: 'Shrikes', sk: 'Strakoše' },
  species: [
    {
      name: {
        latin: 'Lanius excubitor',
        localized: {
          en: 'Great Grey Shrike',
          sk: 'Strakoš veľký',
        },
      },
      imageAssets: [
        { assetId: '66108031', metadata: 'adult' },
        { assetId: '40965881', metadata: 'adult' },
        { assetId: '54131871', metadata: 'adult' },
        { assetId: '62667591', metadata: 'adult' },
        { assetId: '47652151', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: [
          { metadata: 'adult', species: 'Lanius minor' },
          { metadata: 'adult male', species: 'Lanius collurio' },
        ],
      },
    },
    {
      name: {
        latin: 'Lanius minor',
        localized: {
          en: 'Lesser Grey Shrike',
          sk: 'Strakoš kolesár',
        },
      },
      imageAssets: [
        { assetId: '204560441', metadata: 'adult' },
        { assetId: '47420861', metadata: 'immature' },
        { assetId: '107451381', metadata: 'juvenile' },
        { assetId: '37479361', metadata: 'adult' },
        { assetId: '34154001', metadata: 'immature' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: [
          { metadata: 'adult male', species: 'Lanius excubitor' },
          { metadata: 'adult male', species: 'Lanius collurio' },
        ],
      },
    },
    {
      name: {
        latin: 'Lanius collurio',
        localized: {
          en: 'Red-backed Shrike',
          sk: 'Strakoš obyčajný',
        },
      },
      imageAssets: [
        { assetId: '47430491', metadata: 'adult male' },
        { assetId: '28771861', metadata: 'female' },
        { assetId: '28345901', metadata: 'adult male' },
        { assetId: '33665471', metadata: 'female' },
        { assetId: '35545181', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: [
          { metadata: 'adult', species: 'Lanius minor' },
          { metadata: 'breeding male', species: 'Lanius senator' },
          { metadata: 'adult male', species: 'Remiz pendulinus' },
        ],
      },
    },
    {
      name: {
        latin: 'Lanius senator',
        localized: {
          en: 'Woodchat Shrike',
          sk: 'Strakoš červenohlavý',
        },
      },
      imageAssets: [
        { assetId: '51309681', metadata: 'adult' },
        { assetId: '30796291', metadata: 'juvenile' },
        { assetId: '46955491', metadata: 'adult' },
        { assetId: '46955491', metadata: 'adult' },
        { assetId: '46583441', metadata: 'adult' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        breedingMale: [
          { metadata: 'adult male', species: 'Lanius collurio' },
          { metadata: 'adult', species: 'Lanius minor' },
        ],
      },
    },
  ],
};

export const shrikesGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const shrikesSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
