import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'sandgrouse';

const data: GroupData = {
  name: { en: 'Sandgrouse', sk: 'Stepiarotvaré' },
  species: [
    {
      name: {
        latin: 'Syrrhaptes paradoxus',
        localized: {
          en: "Pallas's Sandgrouse",
          sk: 'Labkáň stepný',
        },
      },
      imageAssets: [
        { assetId: '205851991', metadata: 'adult male' },
        { assetId: '63141511', metadata: 'female' },
        { assetId: '174029211', metadata: 'male and female' },
        { assetId: '120413431', metadata: 'adult male' },
        { assetId: '120888831', metadata: 'unknown' },
      ],
      skAbundance: 'historical',
      movementPattern: 'irruptive',
    },
  ],
};

export const sandgrouseGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const sandgrouseSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
