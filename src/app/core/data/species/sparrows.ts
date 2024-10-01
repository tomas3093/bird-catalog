import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'sparrows';

const data: GroupData = {
  name: { en: 'Sparrows', sk: 'Vrabce' },
  species: [
    {
      name: {
        latin: 'Passer montanus',
        localized: { en: 'Eurasian Tree Sparrow', sk: 'Vrabec poľný' },
      },
      imageAssets: [
        { assetId: '219798061', metadata: 'adult' },
        { assetId: '32123821', metadata: 'adult' },
        { assetId: '189571141', metadata: 'adult' },
        { assetId: '249362541', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: [{ metadata: 'adult male', species: 'Passer domesticus' }],
      },
    },
    {
      name: {
        latin: 'Passer domesticus',
        localized: { en: 'House Sparrow', sk: 'Vrabec domový' },
      },
      imageAssets: [
        { assetId: '51357991', metadata: 'breeding male' },
        { assetId: '69514291', metadata: 'female' },
        { assetId: '41624001', metadata: 'nonbreeding/immature' },
        { assetId: '93464491', metadata: 'breeding male' },
        { assetId: '161700291', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
    },
    {
      name: {
        latin: 'Montifringilla nivalis',
        localized: {
          en: 'White-winged Snowfinch',
          sk: 'Snehárka vrchovská',
        },
      },
      imageAssets: [
        { assetId: '106252441', metadata: 'breeding adult' },
        { assetId: '173212751', metadata: 'nonbreeding/immature' },
        { assetId: '175820581', metadata: 'juvenile' },
        { assetId: '194859521', metadata: 'breeding adult' },
        { assetId: '28817241', metadata: 'breeding adult' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adultMale: ['Plectrophenax nivalis'],
      },
    },
  ],
};

export const sparrowsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const sparrowsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
