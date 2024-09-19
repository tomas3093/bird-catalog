import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'cuckoos';

const data: GroupData = {
  name: { en: 'Cuckoos', sk: 'Kukučky' },
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
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Clamator glandarius',
        localized: {
          en: 'Great Spotted Cuckoo',
          sk: 'Kukavica chochlatá',
        },
      },
      imageAssets: [
        { assetId: '97496771', metadata: 'adult' },
        { assetId: '50768941', metadata: 'immature' },
        { assetId: '31685781', metadata: 'adult' },
        { assetId: '42853171', metadata: 'adult' },
        { assetId: '60186021', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
  ],
};

export const cuckoosGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const cuckoosSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
