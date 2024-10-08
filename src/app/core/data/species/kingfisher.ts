import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'kingfisher';

const data: GroupData = {
  name: { en: 'Kingfisher', sk: 'Rybárik' },
  species: [
    {
      name: {
        latin: 'Alcedo atthis',
        localized: {
          en: 'Common Kingfisher',
          sk: 'Rybárik riečny',
        },
      },
      imageAssets: [
        { assetId: '26854431', metadata: 'adult male' },
        { assetId: '250309701', metadata: 'female' },
        { assetId: '43317661', metadata: 'adult male' },
        { assetId: '42320871', metadata: 'adult male' },
        { assetId: '42817471', metadata: 'female' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Sitta europaea'],
      },
    },
  ],
};

export const kingfisherGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const kingfisherSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
