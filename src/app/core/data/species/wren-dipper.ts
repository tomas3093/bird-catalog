import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'wren-dipper';

const data: GroupData = {
  name: { en: 'Wren & dipper', sk: 'Oriešok a vodnár' },
  species: [
    {
      name: {
        latin: 'Cinclus cinclus',
        localized: {
          en: 'White-throated Dipper',
          sk: 'Vodnár potočný',
        },
      },
      imageAssets: [
        { assetId: '220056451', metadata: 'adult' },
        { assetId: '196695441', metadata: 'adult' },
        { assetId: '166207571', metadata: 'adult' },
        { assetId: '113383231', metadata: 'adult' },
        { assetId: '172475901', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Troglodytes troglodytes',
        localized: {
          en: 'Eurasian Wren',
          sk: 'Oriešok obyčajný',
        },
      },
      imageAssets: [
        { assetId: '396581701', metadata: 'unknown' },
        { assetId: '611623555', metadata: 'unknown' },
        { assetId: '271197701', metadata: 'unknown' },
        { assetId: '416083911', metadata: 'unknown' },
        { assetId: '564313901', metadata: 'unknown' },
      ],
    },
  ],
};

export const wrenDipperGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const wrenDipperSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
