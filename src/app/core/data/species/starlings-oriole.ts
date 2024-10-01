import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'starlingsOriole';

const data: GroupData = {
  name: { en: 'Starlings & oriole', sk: 'Škorce a vlha' },
  species: [
    {
      name: {
        latin: 'Sturnus vulgaris',
        localized: {
          en: 'Common Starling',
          sk: 'Škorec obyčajný'
        }
      },
      imageAssets: [
        { assetId: '307770421', metadata: 'breeding adult' },
        { assetId: '39278421', metadata: 'nonbreeding/immature' },
        { assetId: '171399331', metadata: 'juvenile' },
        { assetId: '254931801', metadata: 'juvenile' },
        { assetId: '205138871', metadata: 'breeding adult' }
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        juvenile: ['Pastor roseus']
      }
    },
    {
      name: {
        latin: 'Pastor roseus',
        localized: {
          en: 'Rose-coloured Starling',
          sk: 'Pastier ružový'
        }
      },
      imageAssets: [
        { assetId: '118394501', metadata: 'breeding adult' },
        { assetId: '126512721', metadata: 'nonbreeding adult' },
        { assetId: '73867771', metadata: 'juvenile' },
        { assetId: '45751191', metadata: 'breeding adult' },
        { assetId: '112878401', metadata: 'breeding adult' }
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Corvus cornix'],
        juvenile: ['Sturnus vulgaris']
      }
    },
    {
      name: {
        latin: 'Oriolus oriolus',
        localized: {
          en: 'Eurasian Golden Oriole',
          sk: 'Vlha obyčajná'
        }
      },
      imageAssets: [
        { assetId: '246628451', metadata: 'adult male' },
        { assetId: '231927401', metadata: 'female/immature male' },
        { assetId: '229259471', metadata: 'juvenile' },
        { assetId: '97333101', metadata: 'adult male' },
        { assetId: '28723121', metadata: 'adult male' }
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Emberiza melanocephala'],
        juvenile: [{ metadata: 'adult male', species: 'Picus viridis' }]
      }
    }
  ]
};

export const starlingsOrioleGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const starlingsOrioleSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
