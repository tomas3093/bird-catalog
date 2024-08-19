import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'swifts';

const data: GroupData = {
  name: { en: 'Swifts', sk: 'Dážďovníky' },
  species: [
    {
      name: {
        latin: 'Apus apus',
        localized: {
          en: 'Common Swift',
          sk: 'Dážďovník obyčajný',
        },
      },
      imageAssets: [
        { assetId: '36129661', metadata: 'unknown' },
        { assetId: '36107301', metadata: 'unknown' },
        { assetId: '28140361', metadata: 'unknown' },
        { assetId: '28140371', metadata: 'unknown' },
        { assetId: '35421901', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Tachymarptis melba',
        localized: {
          en: 'Alpine Swift',
          sk: 'Dážďovník skalný',
        },
      },
      imageAssets: [
        { assetId: '34748631', metadata: 'unknown' },
        { assetId: '38490151', metadata: 'unknown' },
        { assetId: '42814531', metadata: 'unknown' },
        { assetId: '204607451', metadata: 'unknown' },
        { assetId: '204607451', metadata: 'unknown' },
      ],
    },
  ],
};

export const swiftsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const swiftsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
