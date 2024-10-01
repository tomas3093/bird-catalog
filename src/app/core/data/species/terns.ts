import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'terns';

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
          skAbundance: 'rare',
          movementPattern: 'migratory',
          similarSpecies: {
            adultSummer: ['Thalasseus sandvicensis'],
            juvenile: ['Thalasseus sandvicensis'],
          },
        },
        {
          name: {
            latin: 'Thalasseus sandvicensis',
            localized: {
              en: 'Sandwich Tern',
              sk: 'Rybár sivý',
            },
          },
          imageAssets: [
            { assetId: '64794711', metadata: 'breeding adult' },
            { assetId: '253449731', metadata: 'nonbreeding adult' },
            { assetId: '21109081', metadata: 'immature' },
            { assetId: '204658121', metadata: 'juvenile' },
            { assetId: '32464101', metadata: 'unknown' },
          ],
          skAbundance: 'historical',
          movementPattern: 'migratory',
          similarSpecies: {
            adultSummer: ['Gelochelidon nilotica'],
            juvenile: [
              { metadata: 'juvenile', species: 'Sternula albifrons' },
              { metadata: 'juvenile', species: 'Sterna hirundo' },
              { metadata: 'first winter', species: 'Gelochelidon nilotica' },
            ],
          },
        },
        {
          name: {
            latin: 'Gelochelidon nilotica',
            localized: {
              en: 'Gull-billed Tern',
              sk: 'Rybárka krátkozobá',
            },
          },
          imageAssets: [
            { assetId: '57046791', metadata: 'breeding adult' },
            { assetId: '34468111', metadata: 'nonbreeding adult' },
            { assetId: '463429461', metadata: 'breeding adult' },
            { assetId: '244737001', metadata: 'breeding adult' },
            { assetId: '257325241', metadata: 'juvenile' },
          ],
          skAbundance: 'rare',
          movementPattern: 'migratory',
          similarSpecies: {
            adultSummer: ['Thalasseus sandvicensis'],
            firstWinter: [{ metadata: 'juvenile', species: 'Thalasseus sandvicensis' }],
          },
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
          skAbundance: 'common',
          movementPattern: 'migratory',
          similarSpecies: {
            adultSummer: ['Sterna paradisaea', 'Chlidonias hybrida'],
            juvenile: ['Sterna paradisaea'],
          },
        },
        {
          name: {
            latin: 'Sterna paradisaea',
            localized: {
              en: 'Arctic Tern',
              sk: 'Rybár dlhochvostý',
            },
          },
          imageAssets: [
            { assetId: '249987771', metadata: 'breeding adult' },
            { assetId: '53770491', metadata: 'breeding adult' },
            { assetId: '114017081', metadata: 'breeding adult' },
            { assetId: '33057781', metadata: 'nonbreeding adult' },
            { assetId: '62268111', metadata: 'breeding adult' },
          ],
          skAbundance: 'rare',
          movementPattern: 'migratory',
          similarSpecies: {
            adultSummer: ['Sterna hirundo', 'Chlidonias hybrida'],
            juvenile: ['Sterna hirundo'],
          },
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
          skAbundance: 'rare',
          movementPattern: 'migratory',
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
          skAbundance: 'uncommon',
          movementPattern: 'migratory',
          similarSpecies: {
            adultSummer: [{ metadata: 'juvenile', species: 'Chlidonias leucopterus' }],
            adultWinter: ['Chlidonias leucopterus', 'Chlidonias hybrida'],
            juvenile: ['Chlidonias leucopterus', 'Chlidonias hybrida'],
          },
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
          skAbundance: 'occasional',
          movementPattern: 'migratory',
          similarSpecies: {
            adultSummer: ['Chlidonias niger'],
            adultWinter: ['Chlidonias hybrida', 'Chlidonias niger'],
            juvenile: ['Chlidonias niger', 'Chlidonias hybrida'],
          },
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
          skAbundance: 'uncommon',
          movementPattern: 'migratory',
          similarSpecies: {
            adultSummer: ['Sterna hirundo', 'Sterna paradisaea'],
            adultWinter: ['Chlidonias leucopterus'],
            juvenile: ['Chlidonias leucopterus', 'Chlidonias niger'],
          },
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
