import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'nightjar';

const data: GroupData = {
  name: { en: 'Nightjar', sk: 'Lelek' },
  species: [
    {
      name: {
        latin: 'Caprimulgus europaeus',
        localized: {
          en: 'Eurasian Nightjar',
          sk: 'Lelek lesný',
        },
      },
      imageAssets: [
        { assetId: '30060391', metadata: 'unknown' },
        { assetId: '43639511', metadata: 'unknown' },
        { assetId: '204612121', metadata: 'unknown' },
        { assetId: '38460041', metadata: 'unknown' },
        { assetId: '44318901', metadata: 'adult male' },
      ],
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Jynx torquilla'],
      },
    },
  ],
};

export const nightjarGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const nightjarSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
