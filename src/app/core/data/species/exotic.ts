import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

/** Escapee or provisional category in ebird */
const groupId = 'exotic';

const data: GroupData = {
  name: { en: 'Exotic', sk: 'Exotické' },
  species: [
    {
      name: {
        latin: 'Nymphicus hollandicus',
        localized: {
          en: 'Cockatiel',
          sk: 'Korela chochlatá',
        },
      },
      imageAssets: [
        { assetId: '63888951', metadata: 'adult male' },
        { assetId: '98084971', metadata: 'female' },
        { assetId: '51561491', metadata: 'adult male' },
        { assetId: '109736151', metadata: 'male and female' },
        { assetId: '61654861', metadata: 'unknown' },
      ],
      skAbundance: 'rare',
    },
    {
      name: {
        latin: 'Psittacula krameri',
        localized: {
          en: 'Rose-ringed Parakeet',
          sk: 'Alexander malý',
        },
      },
      imageAssets: [
        { assetId: '612071416', metadata: 'unknown' },
        { assetId: '499418031', metadata: 'unknown' },
        { assetId: '609696468', metadata: 'unknown' },
        { assetId: '51691951', metadata: 'female' },
        { assetId: '52579281', metadata: 'adult male' },
      ],
      skAbundance: 'rare',
    },
    {
      name: {
        latin: 'Taeniopygia guttata',
        localized: {
          en: 'Zebra Finch',
          sk: 'Zebrička červenozobá',
        },
      },
      imageAssets: [
        { assetId: '38358341', metadata: 'adult male' },
        { assetId: '38358351', metadata: 'female' },
        { assetId: '55195881', metadata: 'juvenile' },
        { assetId: '38358331', metadata: 'male and female' },
        { assetId: '110005541', metadata: 'male and female' },
      ],
      skAbundance: 'rare',
    },
    {
      name: {
        latin: 'Pavo cristatus',
        localized: {
          en: 'Indian Peafowl',
          sk: 'Páv korunkatý',
        },
      },
      imageAssets: [
        { assetId: '42442871', metadata: 'adult male' },
        { assetId: '44255101', metadata: 'female' },
        { assetId: '31254781', metadata: 'adult male' },
        { assetId: '80664111', metadata: 'adult male' },
        { assetId: '74435681', metadata: 'female' },
      ],
      skAbundance: 'rare',
    },
    {
      name: {
        latin: 'Cairina moschata',
        localized: {
          en: 'Muscovy Duck',
          sk: 'Pižmovka lesklá',
        },
      },
      imageAssets: [
        { assetId: '204580681', metadata: 'adult male' },
        { assetId: '271319591', metadata: 'adult female' },
        { assetId: '279578401', metadata: 'adult male' },
        { assetId: '40239241', metadata: 'adult' },
        { assetId: '33571601', metadata: 'adult' },
      ],
      skAbundance: 'rare',
    },
    {
      name: {
        latin: 'Pyrrhocorax pyrrhocorax',
        localized: {
          en: 'Red-billed Chough',
          sk: 'Čavka červenozobá',
        },
      },
      imageAssets: [
        { assetId: '37105181', metadata: 'adult' },
        { assetId: '22144101', metadata: 'adult' },
        { assetId: '106090901', metadata: 'juvenile' },
        { assetId: '158216011', metadata: 'adult' },
        { assetId: '338031151', metadata: 'adult' },
      ],
      skAbundance: 'rare',
      similarSpecies: { adult: ['Pyrrhocorax graculus', 'Corvus monedula'] },
    },
    {
      name: {
        latin: 'Cygnus atratus',
        localized: {
          en: 'Black Swan',
          sk: 'Labuť čierna',
        },
      },
      imageAssets: [
        { assetId: '120705851', metadata: 'adult' },
        { assetId: '166588421', metadata: 'adult' },
        { assetId: '344517191', metadata: 'juvenile' },
        { assetId: '621629556', metadata: 'juvenile' },
        { assetId: '44267321', metadata: 'juvenile' },
      ],
      skAbundance: 'occasional',
    },
    {
      name: {
        latin: 'Anser caerulescens',
        localized: {
          en: 'Snow Goose',
          sk: 'Hus snežná',
        },
      },
      imageAssets: [
        { assetId: '290513131', metadata: 'adult' },
        { assetId: '47881261', metadata: 'adult' },
        { assetId: '57178851', metadata: 'adult' },
        { assetId: '90150691', metadata: 'adult' },
        { assetId: '134148511', metadata: 'juvenile' },
      ],
      skAbundance: 'historical',
      similarSpecies: { adult: ['Anser indicus', 'Anser anser'] },
    },
    {
      name: {
        latin: 'Syrmaticus reevesii',
        localized: {
          en: "Reeves's Pheasant",
          sk: 'Bažant kráľovský',
        },
      },
      imageAssets: [
        { assetId: '140007811', metadata: 'adult male' },
        { assetId: '109479451', metadata: 'female' },
        { assetId: '110354301', metadata: 'adult male' },
        { assetId: '109479411', metadata: 'adult male' },
        { assetId: '57263911', metadata: 'adult male' },
      ],
      skAbundance: 'historical',
    },
    {
      name: {
        latin: 'Lophodytes cucullatus',
        localized: {
          en: 'Hooded Merganser',
          sk: 'Potápač prilbatý',
        },
      },
      imageAssets: [
        { assetId: '269638401', metadata: 'adult male' },
        { assetId: '185795991', metadata: 'female' },
        { assetId: '52861341', metadata: 'nonbreeding male' },
        { assetId: '208095791', metadata: 'male and female' },
        { assetId: '57269891', metadata: 'female' },
      ],
      skAbundance: 'historical',
      similarSpecies: { adultFemale: ['Mergus serrator'] },
    },
    {
      name: {
        latin: 'Threskiornis aethiopicus',
        localized: {
          en: 'African Sacred Ibis',
          sk: 'Ibis posvätný',
        },
      },
      imageAssets: [
        { assetId: '42460331', metadata: 'adult' },
        { assetId: '48641341', metadata: 'immature' },
        { assetId: '40697461', metadata: 'adult' },
        { assetId: '53208511', metadata: 'adult' },
        { assetId: '25143811', metadata: 'unknown' },
      ],
      skAbundance: 'historical',
    },
    {
      name: {
        latin: 'Tadorna cana',
        localized: {
          en: 'South African Shelduck',
          sk: 'Kazarka sivohlavá',
        },
      },
      imageAssets: [
        { assetId: '47235121', metadata: 'adult male' },
        { assetId: '204298941', metadata: 'female' },
        { assetId: '67695871', metadata: 'adult male' },
        { assetId: '51301921', metadata: 'male and female' },
        { assetId: '218160591', metadata: 'adult male' },
      ],
      skAbundance: 'rare',
    },
    {
      name: {
        latin: 'Aix sponsa',
        localized: {
          en: 'Wood Duck',
          sk: 'Kačička obojková',
        },
      },
      imageAssets: [
        { assetId: '35998481', metadata: 'adult male' },
        { assetId: '47443411', metadata: 'female' },
        { assetId: '110911841', metadata: 'eclipse male' },
        { assetId: '30161681', metadata: 'female' },
        { assetId: '192681961', metadata: 'male and female' },
      ],
      skAbundance: 'rare',
      similarSpecies: { adultMale: ['Lophodytes cucullatus'], adultFemale: ['Lophodytes cucullatus'] },
    },
    {
      name: {
        latin: 'Anser indicus',
        localized: {
          en: 'Bar-headed Goose',
          sk: 'Hus vrchovská',
        },
      },
      imageAssets: [
        { assetId: '181031211', metadata: 'unknown' },
        { assetId: '42440501', metadata: 'unknown' },
        { assetId: '48034021', metadata: 'unknown' },
        { assetId: '24253121', metadata: 'unknown' },
        { assetId: '144866781', metadata: 'unknown' },
      ],
      skAbundance: 'rare',
      similarSpecies: { adult: ['Anser caerulescens'] },
    },
  ],
};

export const exoticGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const exoticSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
