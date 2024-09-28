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
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adultSummer: ['Ichthyaetus melanocephalus', 'Hydrocoloeus minutus', 'Chroicocephalus genei'],
        adultWinter: [
          { metadata: 'second winter', species: 'Ichthyaetus melanocephalus' },
          { metadata: 'nonbreeding adult', species: 'Hydrocoloeus minutus' },
          { metadata: 'breeding adult', species: 'Chroicocephalus genei' },
        ],
        juvenile: [
          { metadata: 'juvenile', species: 'Chroicocephalus genei' },
          { metadata: 'juvenile', species: 'Hydrocoloeus minutus' },
          { metadata: 'first winter', species: 'Ichthyaetus melanocephalus' },
          { metadata: 'juvenile', species: 'Larus canus' },
        ],
      },
    },
    {
      name: {
        latin: 'Chroicocephalus genei',
        localized: {
          en: 'Slender-billed Gull',
          sk: 'Čajka tenkozobá',
        },
      },
      imageAssets: [
        { assetId: '88090541', metadata: 'adult' },
        { assetId: '74565861', metadata: 'immature' },
        { assetId: '42048601', metadata: 'immature' },
        { assetId: '44178571', metadata: 'adult' },
        { assetId: '88090631', metadata: 'adult' },
      ],
      skAbundance: 'rare',
      similarSpecies: {
        adult: [
          { metadata: 'nonbreeding adult', species: 'Chroicocephalus ridibundus' },
          { metadata: 'second winter', species: 'Ichthyaetus melanocephalus' },
        ],
        juvenile: [
          { metadata: 'juvenile', species: 'Chroicocephalus ridibundus' },
          { metadata: 'first winter', species: 'Ichthyaetus melanocephalus' },
        ],
      },
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
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: ['Ichthyaetus melanocephalus', 'Chroicocephalus ridibundus'],
        adultWinter: [
          { metadata: 'nonbreeding adult', species: 'Chroicocephalus ridibundus' },
          { metadata: 'second winter', species: 'Ichthyaetus melanocephalus' },
        ],
        firstWinter: [{ metadata: 'juvenile', species: 'Rissa tridactyla' }],
        juvenile: ['Rissa tridactyla', 'Xema sabini'],
      },
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
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: [
          { metadata: 'nonbreeding adult', species: 'Larus argentatus' },
          { metadata: 'breeding adult', species: 'Larus delawarensis' },
        ],
        firstWinter: [
          { metadata: 'second winter', species: 'Larus argentatus' },
          { metadata: 'first winter', species: 'Larus delawarensis' },
        ],
        juvenile: [
          { metadata: 'first winter', species: 'Ichthyaetus melanocephalus' },
          { metadata: 'first winter', species: 'Larus argentatus' },
        ],
      },
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
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: ['Chroicocephalus ridibundus', 'Hydrocoloeus minutus', 'Ichthyaetus ichthyaetus'],
        secondWinter: [
          { metadata: 'nonbreeding adult', species: 'Chroicocephalus ridibundus' },
          { metadata: 'nonbreeding adult', species: 'Hydrocoloeus minutus' },
          { metadata: 'first winter', species: 'Ichthyaetus ichthyaetus' },
        ],
        firstWinter: [
          { metadata: 'first winter', species: 'Larus canus' },
          { metadata: 'first winter', species: 'Hydrocoloeus minutus' },
          { metadata: 'juvenile', species: 'Chroicocephalus ridibundus' },
          { metadata: 'first winter', species: 'Ichthyaetus ichthyaetus' },
        ],
      },
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
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adultWinter: [
          { metadata: 'breeding adult', species: 'Larus michahellis' },
          { metadata: 'breeding adult', species: 'Larus fuscus' },
          { metadata: 'breeding adult', species: 'Larus canus' },
        ],
        secondWinter: [
          { metadata: 'first winter', species: 'Larus michahellis' },
          { metadata: 'second winter', species: 'Larus fuscus' },
          { metadata: 'first winter', species: 'Larus canus' },
        ],
        firstWinter: [
          { metadata: 'first winter', species: 'Larus michahellis' },
          { metadata: 'juvenile', species: 'Larus fuscus' },
          { metadata: 'juvenile', species: 'Larus canus' },
          { metadata: 'juvenile', species: 'Larus marinus' },
        ],
        juvenile: [
          { metadata: 'first winter', species: 'Larus michahellis' },
          { metadata: 'juvenile', species: 'Larus fuscus' },
          { metadata: 'juvenile', species: 'Larus marinus' },
        ],
      },
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
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adultSummer: [
          { metadata: 'breeding adult', species: 'Larus fuscus' },
          { metadata: 'nonbreeding adult', species: 'Larus argentatus' },
          { metadata: 'breeding adult', species: 'Larus cachinnans' },
        ],
        firstWinter: [
          { metadata: 'juvenile', species: 'Larus fuscus' },
          { metadata: 'first winter', species: 'Larus argentatus' },
          { metadata: 'first winter', species: 'Larus cachinnans' },
        ],
      },
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
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adultSummer: [
          { metadata: 'nonbreeding adult', species: 'Larus argentatus' },
          { metadata: 'breeding adult', species: 'Larus michahellis' },
        ],
        firstWinter: [
          { metadata: 'juvenile', species: 'Larus argentatus' },
          { metadata: 'first winter', species: 'Larus michahellis' },
        ],
      },
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
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: [
          { metadata: 'breeding adult', species: 'Larus marinus' },
          { metadata: 'breeding adult', species: 'Larus michahellis' },
          { metadata: 'nonbreeding adult', species: 'Larus argentatus' },
        ],
        secondWinter: [
          { metadata: 'second winter', species: 'Larus argentatus' },
          { metadata: 'first winter', species: 'Larus michahellis' },
        ],
        juvenile: [
          { metadata: 'juvenile', species: 'Larus argentatus' },
          { metadata: 'first winter', species: 'Larus michahellis' },
        ],
      },
    },
    {
      name: {
        latin: 'Ichthyaetus ichthyaetus',
        localized: {
          en: "Pallas's Gull",
          sk: 'Čajka orlia',
        },
      },
      imageAssets: [
        { assetId: '85358341', metadata: 'breeding adult' },
        { assetId: '132698401', metadata: 'nonbreeding adult' },
        { assetId: '81349821', metadata: 'first year' },
        { assetId: '66607041', metadata: 'juvenile' },
        { assetId: '81480741', metadata: 'nonbreeding adult' },
      ],
      skAbundance: 'rare',
      movementPattern: 'vagrant',
      similarSpecies: {
        adultSummer: ['Ichthyaetus melanocephalus', 'Chroicocephalus ridibundus'],
        firstWinter: [
          { metadata: 'second winter', species: 'Larus argentatus' },
          { metadata: 'first winter', species: 'Larus cachinnans' },
          { metadata: 'first winter', species: 'Ichthyaetus melanocephalus' },
        ],
      },
    },
    {
      name: {
        latin: 'Larus delawarensis',
        localized: {
          en: 'Ring-billed Gull',
          sk: 'Čajka obrúčkozobá',
        },
      },
      imageAssets: [
        { assetId: '56460521', metadata: 'breeding adult' },
        { assetId: '410575291', metadata: 'nonbreeding adult' },
        { assetId: '66236411', metadata: 'second winter' },
        { assetId: '25183861', metadata: 'first winter' },
        { assetId: '47271961', metadata: 'juvenile' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adultSummer: [
          { metadata: 'breeding adult', species: 'Larus canus' },
          { metadata: 'nonbreeding adult', species: 'Larus argentatus' },
        ],
        firstWinter: [
          { metadata: 'first winter', species: 'Larus canus' },
          { metadata: 'second winter', species: 'Larus argentatus' },
        ],
      },
    },
    {
      name: {
        latin: 'Larus hyperboreus',
        localized: {
          en: 'Glaucous Gull',
          sk: 'Čajka bledá',
        },
      },
      imageAssets: [
        { assetId: '198090131', metadata: 'adult' },
        { assetId: '26859221', metadata: 'nonbreeding adult' },
        { assetId: '295141561', metadata: 'first winter' },
        { assetId: '50780421', metadata: 'first winter' },
        { assetId: '294064671', metadata: 'first winter' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adultWinter: ['Larus argentatus'],
        juvenile: ['Larus marinus'],
      },
    },
    {
      name: {
        latin: 'Larus marinus',
        localized: {
          en: 'Great Black-backed Gull',
          sk: 'Čajka morská',
        },
      },
      imageAssets: [
        { assetId: '105244651', metadata: 'breeding adult' },
        { assetId: '52886541', metadata: 'breeding adult' },
        { assetId: '139313651', metadata: 'first winter' },
        { assetId: '291461991', metadata: 'first winter' },
        { assetId: '54975411', metadata: 'second summer' },
      ],
      skAbundance: 'rare',
      movementPattern: 'vagrant',
      similarSpecies: {
        adultSummer: ['Larus fuscus'],
        juvenile: [
          { metadata: 'juvenile', species: 'Larus argentatus' },
          { metadata: 'first winter', species: 'Larus michahellis' },
          { metadata: 'juvenile', species: 'Larus fuscus' },
        ],
      },
    },
    {
      name: {
        latin: 'Rissa tridactyla',
        localized: {
          en: 'Black-legged Kittiwake',
          sk: 'Čajka trojprstá',
        },
      },
      imageAssets: [
        { assetId: '64889231', metadata: 'breeding adult' },
        { assetId: '45310491', metadata: 'nonbreeding adult' },
        { assetId: '172151191', metadata: 'immature' },
        { assetId: '136257511', metadata: 'immature' },
        { assetId: '20945991', metadata: 'nonbreeding adult' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: ['Larus canus', 'Xema sabini'],
        juvenile: ['Xema sabini', 'Hydrocoloeus minutus', 'Chroicocephalus ridibundus'],
      },
    },
    {
      name: {
        latin: 'Xema sabini',
        localized: {
          en: "Sabine's Gull",
          sk: 'Čajka vidlochvostá',
        },
      },
      imageAssets: [
        { assetId: '237435121', metadata: 'breeding adult' },
        { assetId: '186223321', metadata: 'juvenile' },
        { assetId: '249068921', metadata: 'nonbreeding adult' },
        { assetId: '105585501', metadata: 'breeding adult' },
        { assetId: '70085081', metadata: 'juvenile' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        juvenile: [
          { metadata: 'juvenile', species: 'Rissa tridactyla' },
          { metadata: 'first winter', species: 'Hydrocoloeus minutus' },
        ],
      },
    },
  ],
};

export const gullsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const gullsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
