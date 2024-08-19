import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'bustard';

const data: GroupData = {
  name: { en: 'Bustard', sk: 'Drop' },
  species: [
    {
      name: {
        latin: 'Otis tarda',
        localized: {
          en: 'Great Bustard',
          sk: 'Drop veľký',
        },
      },
      imageAssets: [
        { assetId: '204572701', metadata: 'breeding male' },
        { assetId: '125195111', metadata: 'nonbreeding adult' },
        { assetId: '68356911', metadata: 'nonbreeding adult' },
        { assetId: '25384161', metadata: 'breeding male' },
        { assetId: '70116951', metadata: 'nonbreeding adult' },
      ],
    },
  ],
};

export const bustardGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const bustardSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
