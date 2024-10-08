import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'loons';

const data: GroupData = {
  name: { en: 'Loons', sk: 'Potáplice' },
  species: [
    {
      name: {
        latin: 'Gavia stellata',
        localized: {
          en: 'Red-throated Diver',
          sk: 'Potáplica malá',
        },
      },
      imageAssets: [
        { assetId: '107460531', metadata: 'breeding adult' },
        { assetId: '127930701', metadata: 'nonbreeding adult' },
        { assetId: '41994681', metadata: 'immature' },
        { assetId: '175078971', metadata: 'breeding adult' },
        { assetId: '217130571', metadata: 'nonbreeding adult' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: ['Gavia arctica'],
        adultWinter: ['Gavia arctica', 'Podiceps cristatus'],
      },
    },
    {
      name: {
        latin: 'Gavia arctica',
        localized: {
          en: 'Black-throated Diver',
          sk: 'Potáplica stredná',
        },
      },
      imageAssets: [
        { assetId: '42407931', metadata: 'breeding adult' },
        { assetId: '204609771', metadata: 'nonbreeding adult' },
        { assetId: '27218401', metadata: 'nonbreeding adult' },
        { assetId: '123723631', metadata: 'immature' },
        { assetId: '304205241', metadata: 'breeding adult' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: ['Gavia stellata'],
        adultWinter: [
          { metadata: 'nonbreeding adult', species: 'Gavia stellata' },
          { metadata: 'nonbreeding adult', species: 'Gavia immer' },
          { metadata: 'juvenile', species: 'Phalacrocorax carbo' },
        ],
      },
    },
    {
      name: {
        latin: 'Gavia immer',
        localized: {
          en: 'Great Northern Diver',
          sk: 'Potáplica veľká',
        },
      },
      imageAssets: [
        { assetId: '245172211', metadata: 'breeding adult' },
        { assetId: '279025221', metadata: 'nonbreeding/immature' },
        { assetId: '50540431', metadata: 'nonbreeding/immature' },
        { assetId: '139394771', metadata: 'immature' },
        { assetId: '229445621', metadata: 'breeding adult' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: ['Gavia adamsii'],
        adultWinter: ['Gavia adamsii', 'Gavia arctica', 'Gavia stellata'],
      },
    },
    {
      name: {
        latin: 'Gavia adamsii',
        localized: {
          en: 'White-billed Diver',
          sk: 'Potáplica bielozobá',
        },
      },
      imageAssets: [
        { assetId: '242495381', metadata: 'breeding adult' },
        { assetId: '27439981', metadata: 'nonbreeding/immature' },
        { assetId: '283287381', metadata: 'breeding adult' },
        { assetId: '31994011', metadata: 'molting adult' },
        { assetId: '27439971', metadata: 'nonbreeding/immature' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adultSummer: ['Gavia immer'],
        adultWinter: ['Gavia immer', 'Gavia arctica'],
      },
    },
  ],
};

export const loonsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const loonsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
