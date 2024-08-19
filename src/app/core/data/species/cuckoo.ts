import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'cuckoo';

const data: GroupData = {
  name: { en: 'Cuckoo', sk: 'Kukučka' },
  species: [
    {
      name: {
        latin: 'Cuculus canorus',
        localized: {
          en: 'Common Cuckoo',
          sk: 'Kukučka obyčajná',
        },
      },
      imageAssets: [
        { assetId: '39678671', metadata: 'adult male' },
        { assetId: '27780751', metadata: 'female' },
        { assetId: '39961281', metadata: 'female/immature male' },
        { assetId: '38572051', metadata: 'adult male' },
        { assetId: '38117681', metadata: 'adult male' },
      ],
    },
  ],
};

export const cuckooGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const cuckooSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
