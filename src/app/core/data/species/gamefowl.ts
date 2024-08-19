import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'gamefowl';

const data: GroupData = {
  name: { en: 'Gamefowl', sk: 'Hrabavce' },
  subGroups: [
    {
      name: { en: 'Grouse', sk: 'Tetrovy' },
      species: [
        {
          name: {
            latin: 'Tetrao urogallus',
            localized: {
              en: 'Western Capercaillie',
              sk: 'Hlucháň hôrny',
            },
          },
          imageAssets: [
            {
              assetId: '228651041',
              metadata: 'adult male',
            },
            {
              assetId: '612695735',
              metadata: 'female',
            },
            {
              assetId: '571200061',
              metadata: 'adult male',
            },
            {
              assetId: '205368841',
              metadata: 'adult male',
            },
            {
              assetId: '144005581',
              metadata: 'female',
            },
          ],
        },
        {
          name: {
            latin: 'Lyrurus tetrix',
            localized: {
              en: 'Black Grouse',
              sk: 'Tetrov hoľniak',
            },
          },
          imageAssets: [
            {
              assetId: '54593301',
              metadata: 'adult male',
            },
            {
              assetId: '204964421',
              metadata: 'female',
            },
            {
              assetId: '116273501',
              metadata: 'adult male',
            },
            {
              assetId: '189763131',
              metadata: 'female',
            },
            {
              assetId: '62519991',
              metadata: 'female',
            },
          ],
        },
        {
          name: {
            latin: 'Tetrastes bonasia',
            localized: {
              en: 'Hazel Grouse',
              sk: 'Jariabok hôrny',
            },
          },
          imageAssets: [
            {
              assetId: '30316531',
              metadata: 'adult male',
            },
            {
              assetId: '104090901',
              metadata: 'female',
            },
            {
              assetId: '213144591',
              metadata: 'adult male',
            },
            {
              assetId: '206035251',
              metadata: 'immature',
            },
            {
              assetId: '205330961',
              metadata: 'female',
            },
          ],
        },
      ],
    },
    {
      name: { en: 'Partridges & pheasants', sk: 'Prepelice, bažanty, et al.' },
      species: [
        {
          name: {
            latin: 'Perdix perdix',
            localized: {
              en: 'Grey Partridge',
              sk: 'Jarabica poľná',
            },
          },
          imageAssets: [
            {
              assetId: '204300471',
              metadata: 'adult',
            },
            {
              assetId: '166939901',
              metadata: 'adult',
            },
            {
              assetId: '174863511',
              metadata: 'juvenile',
            },
            {
              assetId: '93771111',
              metadata: 'adult',
            },
            {
              assetId: '64643661',
              metadata: 'adult',
            },
          ],
        },
        {
          name: {
            latin: 'Coturnix coturnix',
            localized: {
              en: 'Common Quail',
              sk: 'Prepelica poľná',
            },
          },
          imageAssets: [
            {
              assetId: '181537191',
              metadata: 'unknown',
            },
            {
              assetId: '63309371',
              metadata: 'unknown',
            },
            {
              assetId: '26569891',
              metadata: 'unknown',
            },
            {
              assetId: '134297931',
              metadata: 'unknown',
            },
            {
              assetId: '134297931',
              metadata: 'unknown',
            },
          ],
        },
        {
          name: {
            latin: 'Phasianus colchicus',
            localized: {
              en: 'Common Pheasant',
              sk: 'Bažant obyčajný',
            },
          },
          imageAssets: [
            {
              assetId: '44636461',
              metadata: 'adult male',
            },
            {
              assetId: '125602631',
              metadata: 'female',
            },
            {
              assetId: '215152411',
              metadata: 'adult male',
            },
            {
              assetId: '215152411',
              metadata: 'adult male',
            },
            {
              assetId: '61213491',
              metadata: 'adult male',
            },
          ],
        },
      ],
    },
  ],
};

export const gamefowlGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const gamefowlSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
