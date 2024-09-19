import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'bustards';

const data: GroupData = {
  name: { en: 'Bustards', sk: 'Dropy' },
  species: [
    {
      name: {
        latin: 'Otis tarda',
        localized: {
          en: 'Great Bustard',
          sk: 'Drop veľký',
        },
      },
      imageAssets: [
        { assetId: '204572701', metadata: 'breeding male' },
        { assetId: '125195111', metadata: 'nonbreeding adult' },
        { assetId: '68356911', metadata: 'nonbreeding adult' },
        { assetId: '25384161', metadata: 'breeding male' },
        { assetId: '70116951', metadata: 'nonbreeding adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Chlamydotis macqueenii',
        localized: {
          en: "Macqueen's Bustard",
          sk: 'Drop hrivnatý',
        },
      },
      imageAssets: [
        { assetId: '65161281', metadata: 'unknown' },
        { assetId: '133958491', metadata: 'unknown' },
        { assetId: '98485601', metadata: 'unknown' },
        { assetId: '80085471', metadata: 'unknown' },
        { assetId: '93110631', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Tetrax tetrax',
        localized: {
          en: 'Little Bustard',
          sk: 'Drop malý',
        },
      },
      imageAssets: [
        { assetId: '523688131', metadata: 'breeding male' },
        { assetId: '239343491', metadata: 'female/immature male' },
        { assetId: '612040436', metadata: 'female/immature male' },
        { assetId: '371002991', metadata: 'female/immature male' },
        { assetId: '204572671', metadata: 'breeding male' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
  ],
};

export const bustardsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const bustardsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
