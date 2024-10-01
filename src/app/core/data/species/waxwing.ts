import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'waxwing';

const data: GroupData = {
  name: { en: 'Waxwing', sk: 'Chochláč' },
  species: [
    {
      name: {
        latin: 'Bombycilla garrulus',
        localized: {
          en: 'Bohemian Waxwing',
          sk: 'Chochláč severský',
        },
      },
      imageAssets: [
        { assetId: '134340871', metadata: 'adult' },
        { assetId: '51172941', metadata: 'adult' },
        { assetId: '51481651', metadata: 'adult' },
        { assetId: '46502171', metadata: 'adult' },
        { assetId: '130660671', metadata: 'adult' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'irruptive',
      similarSpecies: {
        adultMale: [{ metadata: 'juvenile', species: 'Sturnus vulgaris' }],
      },
    },
  ],
};

export const waxwingGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const waxwingSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
