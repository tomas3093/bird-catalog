import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'nuthatchCreepers';

const data: GroupData = {
  name: { en: 'Nuthatch & creepers', sk: 'Brhlík, kôrovníky et al.' },
  species: [
    {
      name: {
        latin: 'Sitta europaea',
        localized: {
          en: 'Eurasian Nuthatch',
          sk: 'Brhlík obyčajný'
        }
      },
      imageAssets: [
        { assetId: '188708831', metadata: 'unknown' },
        { assetId: '226142841', metadata: 'unknown' },
        { assetId: '37292551', metadata: 'unknown' }
      ],
      skAbundance: 'common',
      movementPattern: 'resident'
    },
    {
      name: {
        latin: 'Tichodroma muraria',
        localized: {
          en: 'Wallcreeper',
          sk: 'Murárik červenokrídly'
        }
      },
      imageAssets: [
        { assetId: '154641721', metadata: 'breeding male' },
        { assetId: '45370261', metadata: 'nonbreeding adult' },
        { assetId: '23872781', metadata: 'immature' },
        { assetId: '205835591', metadata: 'nonbreeding adult' },
        { assetId: '45767981', metadata: 'nonbreeding adult' }
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Certhia brachydactyla', 'Certhia familiaris']
      }
    },
    {
      name: {
        latin: 'Certhia familiaris',
        localized: {
          en: 'Eurasian Treecreeper',
          sk: 'Kôrovník dlhoprstý'
        }
      },
      imageAssets: [
        { assetId: '35462121', metadata: 'unknown' },
        { assetId: '39867111', metadata: 'unknown' },
        { assetId: '26224731', metadata: 'unknown' },
        { assetId: '40130291', metadata: 'unknown' },
        { assetId: '40130291', metadata: 'unknown' }
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Certhia brachydactyla', 'Troglodytes troglodytes']
      }
    },
    {
      name: {
        latin: 'Certhia brachydactyla',
        localized: {
          en: 'Short-toed Treecreeper',
          sk: 'Kôrovník krátkoprstý'
        }
      },
      imageAssets: [
        { assetId: '66036851', metadata: 'unknown' },
        { assetId: '63408941', metadata: 'unknown' },
        { assetId: '21600311', metadata: 'unknown' },
        { assetId: '44401291', metadata: 'unknown' },
        { assetId: '44819471', metadata: 'unknown' }
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Certhia familiaris', 'Troglodytes troglodytes']
      }
    }
  ]
};

export const nuthatchCreepersGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const nuthatchCreepersSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
