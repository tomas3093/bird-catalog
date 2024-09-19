import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'larks';

const data: GroupData = {
  name: { en: 'Larks', sk: 'Škovránky' },
  species: [
    {
      name: {
        latin: 'Alauda arvensis',
        localized: {
          en: 'Eurasian Skylark',
          sk: 'Škovránok poľný',
        },
      },
      imageAssets: [
        { assetId: '237452191', metadata: 'unknown' },
        { assetId: '34698591', metadata: 'unknown' },
        { assetId: '26269181', metadata: 'unknown' },
        { assetId: '33471701', metadata: 'unknown' },
        { assetId: '43163571', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Galerida cristata',
        localized: {
          en: 'Crested Lark',
          sk: 'Pipíška chochlatá',
        },
      },
      imageAssets: [
        { assetId: '433921841', metadata: 'adult' },
        { assetId: '40358841', metadata: 'adult' },
        { assetId: '43017761', metadata: 'juvenile' },
        { assetId: '40860071', metadata: 'adult' },
        { assetId: '356473431', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Lullula arborea',
        localized: {
          en: 'Woodlark',
          sk: 'Škovránik stromový',
        },
      },
      imageAssets: [
        { assetId: '112309471', metadata: 'adult' },
        { assetId: '42598651', metadata: 'adult' },
        { assetId: '64187951', metadata: 'unknown' },
        { assetId: '45391051', metadata: 'adult' },
        { assetId: '206003421', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Melanocorypha calandra',
        localized: {
          en: 'Calandra Lark',
          sk: 'Škovran stepný',
        },
      },
      imageAssets: [
        { assetId: '21015311', metadata: 'unknown' },
        { assetId: '26967291', metadata: 'unknown' },
        { assetId: '51244301', metadata: 'unknown' },
        { assetId: '48653811', metadata: 'unknown' },
        { assetId: '36956251', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Calandrella brachydactyla',
        localized: {
          en: 'Greater Short-toed Lark',
          sk: 'Škovránka krátkoprstá',
        },
      },
      imageAssets: [
        { assetId: '112309421', metadata: 'adult' },
        { assetId: '95878441', metadata: 'adult' },
        { assetId: '61901601', metadata: 'juvenile' },
        { assetId: '164290801', metadata: 'adult' },
        { assetId: '152579931', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Eremophila alpestris',
        localized: {
          en: 'Shore Lark',
          sk: 'Uškárik vrchovský',
        },
      },
      imageAssets: [
        { assetId: '63739361', metadata: 'adult male' },
        { assetId: '158290341', metadata: 'female' },
        { assetId: '112757711', metadata: 'female' },
        { assetId: '171923321', metadata: 'juvenile' },
        { assetId: '108016601', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
  ],
};

export const larksGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const larksSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
