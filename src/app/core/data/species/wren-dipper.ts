import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'wrenDipper';

const data: GroupData = {
  name: { en: 'Wren & dipper', sk: 'Oriešok a vodnár' },
  species: [
    {
      name: {
        latin: 'Cinclus cinclus',
        localized: {
          en: 'White-throated Dipper',
          sk: 'Vodnár potočný'
        }
      },
      imageAssets: [
        { assetId: '220056451', metadata: 'adult' },
        { assetId: '196695441', metadata: 'adult' },
        { assetId: '166207571', metadata: 'adult' },
        { assetId: '113383231', metadata: 'adult' },
        { assetId: '172475901', metadata: 'juvenile' }
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: [{ metadata: 'adult male', species: 'Turdus torquatus' }],
        juvenile: [{ metadata: 'female', species: 'Turdus torquatus' }]
      }
    },
    {
      name: {
        latin: 'Troglodytes troglodytes',
        localized: {
          en: 'Eurasian Wren',
          sk: 'Oriešok obyčajný'
        }
      },
      imageAssets: [
        { assetId: '396581701', metadata: 'unknown' },
        { assetId: '611623555', metadata: 'unknown' },
        { assetId: '271197701', metadata: 'unknown' },
        { assetId: '416083911', metadata: 'unknown' },
        { assetId: '564313901', metadata: 'unknown' }
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Prunella modularis']
      }
    }
  ]
};

export const wrenDipperGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const wrenDipperSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
