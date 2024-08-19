import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'gulls';

const data: GroupData = {
  name: { en: 'Gulls', sk: 'Čajky' },
  species: [
    {
      name: {
        latin: 'Chroicocephalus ridibundus',
        localized: { en: 'Black-headed Gull', sk: 'Čajka smejivá' },
      },
      imageAssets: [
        { assetId: '204656501', metadata: 'breeding adult' },
        { assetId: '43163081', metadata: 'breeding adult' },
        { assetId: '43893491', metadata: 'nonbreeding adult' },
        { assetId: '84605841', metadata: 'immature' },
        { assetId: '65518901', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Hydrocoloeus minutus',
        localized: { en: 'Little Gull', sk: 'Čajka malá' },
      },
      imageAssets: [
        { assetId: '81497591', metadata: 'breeding adult' },
        { assetId: '41205791', metadata: 'nonbreeding adult' },
        { assetId: '29757531', metadata: 'first winter' },
        { assetId: '178438401', metadata: 'juvenile' },
        { assetId: '80060961', metadata: 'nonbreeding adult' },
      ],
    },
    {
      name: {
        latin: 'Larus canus',
        localized: { en: 'Common Gull', sk: 'Čajka sivá' },
      },
      imageAssets: [
        { assetId: '195654021', metadata: 'breeding adult' },
        { assetId: '51355861', metadata: 'nonbreeding adult' },
        { assetId: '23930421', metadata: 'first winter' },
        { assetId: '328765151', metadata: 'first summer' },
        { assetId: '22392791', metadata: 'nonbreeding adult' },
        { assetId: '107164471', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Ichthyaetus melanocephalus',
        localized: { en: 'Mediterranean Gull', sk: 'Čajka čiernohlavá' },
      },
      imageAssets: [
        { assetId: '205045531', metadata: 'breeding adult' },
        { assetId: '111221621', metadata: 'nonbreeding adult' },
        { assetId: '29116191', metadata: 'breeding adult' },
        { assetId: '248461961', metadata: 'first winter' },
        { assetId: '171056401', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Larus argentatus',
        localized: { en: 'Herring Gull', sk: 'Čajka striebristá' },
      },
      imageAssets: [
        { assetId: '169295191', metadata: 'breeding adult' },
        { assetId: '64789951', metadata: 'nonbreeding adult' },
        { assetId: '37975941', metadata: 'nonbreeding adult' },
        { assetId: '46145851', metadata: 'second winter' },
        { assetId: '67352161', metadata: 'juvenile' },
        { assetId: '65430271', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Larus michahellis',
        localized: { en: 'Yellow-legged Gull', sk: 'Čajka žltonohá' },
      },
      imageAssets: [
        { assetId: '26870071', metadata: 'breeding adult' },
        { assetId: '42629671', metadata: 'nonbreeding adult' },
        { assetId: '42936411', metadata: 'breeding adult' },
        { assetId: '40237511', metadata: 'juvenile' },
        { assetId: '43794641', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Larus cachinnans',
        localized: { en: 'Caspian Gull', sk: 'Čajka bielohlavá' },
      },
      imageAssets: [
        { assetId: '204953931', metadata: 'adult' },
        { assetId: '43985061', metadata: 'first winter' },
        { assetId: '34393131', metadata: 'juvenile' },
        { assetId: '80209851', metadata: 'unknown' },
        { assetId: '40107131', metadata: 'first winter' },
      ],
    },
    {
      name: {
        latin: 'Larus fuscus',
        localized: { en: 'Lesser Black-backed Gull', sk: 'Čajka tmavá' },
      },
      imageAssets: [
        { assetId: '265452641', metadata: 'breeding adult' },
        { assetId: '133683661', metadata: 'breeding adult' },
        { assetId: '200223821', metadata: 'first winter' },
        { assetId: '86683811', metadata: 'nonbreeding adult' },
        { assetId: '38647251', metadata: 'juvenile' },
      ],
    },
  ],
};

export const gullsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const gullsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
