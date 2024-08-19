import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'accentors';

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
    },
  ],
};

export const accentorsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const accentorsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
