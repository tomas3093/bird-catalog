import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'grebes';

const data: GroupData = {
  name: { en: 'Grebes', sk: 'Potápky' },
  species: [
    {
      name: {
        latin: 'Podiceps auritus',
        localized: {
          en: 'Slavonian Grebe',
          sk: 'Potápka ušatá',
        },
      },
      imageAssets: [
        { assetId: '204241621', metadata: 'breeding adult' },
        { assetId: '126595021', metadata: 'nonbreeding adult' },
        { assetId: '93473001', metadata: 'molting adult' },
        { assetId: '197100761', metadata: 'immature' },
        { assetId: '51347611', metadata: 'molting adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Podiceps nigricollis',
        localized: {
          en: 'Black-necked Grebe',
          sk: 'Potápka čiernokrká',
        },
      },
      imageAssets: [
        { assetId: '157218471', metadata: 'breeding adult' },
        { assetId: '62112951', metadata: 'nonbreeding/immature' },
        { assetId: '210406731', metadata: 'immature' },
        { assetId: '94529191', metadata: 'molting adult' },
        { assetId: '58158991', metadata: 'breeding adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Tachybaptus ruficollis',
        localized: {
          en: 'Little Grebe',
          sk: 'Potápka malá',
        },
      },
      imageAssets: [
        { assetId: '84194951', metadata: 'breeding adult' },
        { assetId: '43868961', metadata: 'nonbreeding adult' },
        { assetId: '166550911', metadata: 'juvenile' },
        { assetId: '33607961', metadata: 'breeding adult' },
        { assetId: '39495931', metadata: 'nonbreeding adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Podiceps cristatus',
        localized: {
          en: 'Great Crested Grebe',
          sk: 'Potápka chochlatá',
        },
      },
      imageAssets: [
        { assetId: '144916431', metadata: 'breeding adult' },
        { assetId: '26856801', metadata: 'nonbreeding/immature' },
        { assetId: '204572711', metadata: 'breeding adult' },
        { assetId: '41559401', metadata: 'juvenile' },
        { assetId: '26855801', metadata: 'nonbreeding/immature' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Podiceps grisegena',
        localized: {
          en: 'Red-necked Grebe',
          sk: 'Potápka červenokrká',
        },
      },
      imageAssets: [
        { assetId: '59011691', metadata: 'breeding adult' },
        { assetId: '61192271', metadata: 'nonbreeding/immature' },
        { assetId: '20783571', metadata: 'immature' },
        { assetId: '31581811', metadata: 'juvenile' },
        { assetId: '27365721', metadata: 'breeding adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
  ],
};

export const grebesGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const grebesSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
