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
    },
  ],
};

export const larksGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const larksSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
