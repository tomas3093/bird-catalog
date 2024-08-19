import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'terns';

const data: GroupData = {
  name: { en: 'Terns', sk: 'Rybáre' },
  subGroups: [
    {
      name: { en: 'Terns', sk: 'Rybáre' },
      species: [
        {
          name: {
            latin: 'Sternula albifrons',
            localized: { en: 'Little Tern', sk: 'Rybár malý' },
          },
          imageAssets: [
            { assetId: '53146761', metadata: 'breeding adult' },
            { assetId: '51622991', metadata: 'breeding adult' },
            { assetId: '43154401', metadata: 'immature' },
            { assetId: '47503851', metadata: 'juvenile' },
            { assetId: '78728271', metadata: 'immature' },
            { assetId: '122819371', metadata: 'nonbreeding adult' },
          ],
        },
        {
          name: {
            latin: 'Sterna hirundo',
            localized: { en: 'Common Tern', sk: 'Rybár riečny' },
          },
          imageAssets: [
            { assetId: '170212981', metadata: 'breeding adult' },
            { assetId: '168688591', metadata: 'breeding adult' },
            { assetId: '67964021', metadata: 'nonbreeding adult' },
            { assetId: '69995361', metadata: 'immature' },
            { assetId: '109125641', metadata: 'juvenile' },
            { assetId: '110663521', metadata: 'immature' },
          ],
        },
        {
          name: {
            latin: 'Hydroprogne caspia',
            localized: { en: 'Caspian Tern', sk: 'Čegrava veľkozobá' },
          },
          imageAssets: [
            { assetId: '55539951', metadata: 'breeding adult' },
            { assetId: '34860421', metadata: 'breeding adult' },
            { assetId: '117794291', metadata: 'nonbreeding adult' },
            { assetId: '263223581', metadata: 'juvenile' },
            { assetId: '66193821', metadata: 'nonbreeding adult' },
          ],
        },
      ],
    },
    {
      name: { en: 'Marsh terns', sk: 'Čoríky' },
      species: [
        {
          name: {
            latin: 'Chlidonias niger',
            localized: { en: 'Black Tern', sk: 'Čorík čierny' },
          },
          imageAssets: [
            { assetId: '192237331', metadata: 'breeding adult' },
            { assetId: '223812461', metadata: 'nonbreeding adult' },
            { assetId: '273565651', metadata: 'nonbreeding adult' },
            { assetId: '64282521', metadata: 'molting adult' },
            { assetId: '174336261', metadata: 'juvenile' },
          ],
        },
        {
          name: {
            latin: 'Chlidonias leucopterus',
            localized: { en: 'White-winged Tern', sk: 'Čorík bielokrídly' },
          },
          imageAssets: [
            { assetId: '30334121', metadata: 'breeding adult' },
            { assetId: '35856441', metadata: 'nonbreeding adult' },
            { assetId: '33605791', metadata: 'immature' },
            { assetId: '45876991', metadata: 'nonbreeding/immature' },
          ],
        },
        {
          name: {
            latin: 'Chlidonias hybrida',
            localized: { en: 'Whiskered Tern', sk: 'Čorík bahenný' },
          },
          imageAssets: [
            { assetId: '30334171', metadata: 'breeding adult' },
            { assetId: '45882531', metadata: 'nonbreeding adult' },
            { assetId: '45168521', metadata: 'breeding adult' },
            { assetId: '67922761', metadata: 'juvenile' },
            { assetId: '42047811', metadata: 'nonbreeding adult' },
          ],
        },
      ],
    },
  ],
};

export const ternsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const ternsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
