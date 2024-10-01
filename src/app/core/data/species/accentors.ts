import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'accentors';

const data: GroupData = {
  name: { en: 'Accentors', sk: 'Vrchárky' },
  species: [
    {
      name: {
        latin: 'Prunella modularis',
        localized: {
          en: 'Dunnock',
          sk: 'Vrchárka modrá',
        },
      },
      imageAssets: [
        { assetId: '28928581', metadata: 'adult' },
        { assetId: '35462091', metadata: 'adult' },
        { assetId: '44824351', metadata: 'adult' },
        { assetId: '34069741', metadata: 'juvenile' },
        { assetId: '28928141', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: [
          { metadata: 'female', species: 'Passer domesticus' },
          { metadata: 'juvenile', species: 'Erithacus rubecula' },
          { metadata: 'immature', species: 'Phoenicurus ochruros' },
        ],
      },
    },
    {
      name: {
        latin: 'Prunella collaris',
        localized: {
          en: 'Alpine Accentor',
          sk: 'Vrchárka červenkavá',
        },
      },
      imageAssets: [
        { assetId: '84441901', metadata: 'unknown' },
        { assetId: '44166391', metadata: 'unknown' },
        { assetId: '43649181', metadata: 'unknown' },
        { assetId: '21163911', metadata: 'unknown' },
        { assetId: '36598171', metadata: 'unknown' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'resident',
      similarSpecies: { adult: ['Prunella modularis'] },
    },
    {
      name: {
        latin: 'Prunella atrogularis',
        localized: {
          en: 'Black-throated Accentor',
          sk: 'Vrchárka čiernohrdlá',
        },
      },
      imageAssets: [
        { assetId: '105105011', metadata: 'unknown' },
        { assetId: '130339441', metadata: 'unknown' },
        { assetId: '130339311', metadata: 'unknown' },
        { assetId: '89067721', metadata: 'unknown' },
        { assetId: '89067721', metadata: 'unknown' },
      ],
      skAbundance: 'historical',
      similarSpecies: { adult: ['Prunella montanella', 'Prunella modularis'] },
    },
    {
      name: {
        latin: 'Prunella montanella',
        localized: {
          en: 'Siberian Accentor',
          sk: 'Vrchárka okrová',
        },
      },
      imageAssets: [
        { assetId: '35510981', metadata: 'unknown' },
        { assetId: '122031371', metadata: 'unknown' },
        { assetId: '122031381', metadata: 'unknown' },
        { assetId: '44824741', metadata: 'unknown' },
        { assetId: '44824741', metadata: 'unknown' },
      ],
      skAbundance: 'historical',
      similarSpecies: { adult: ['Prunella atrogularis'] },
    },
  ],
};

export const accentorsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const accentorsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
