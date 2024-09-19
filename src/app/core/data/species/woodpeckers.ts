import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'woodpeckers';

const data: GroupData = {
  name: { en: 'Woodpeckers', sk: 'Ďatle' },
  species: [
    {
      name: {
        latin: 'Dryocopus martius',
        localized: {
          en: 'Black Woodpecker',
          sk: 'Tesár čierny',
        },
      },
      imageAssets: [
        { assetId: '206040631', metadata: 'adult male' },
        { assetId: '24651601', metadata: 'adult male' },
        { assetId: '30454481', metadata: 'female' },
        { assetId: '29708811', metadata: 'adult male' },
        { assetId: '39710611', metadata: 'adult male' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Picus viridis',
        localized: {
          en: 'Eurasian Green Woodpecker',
          sk: 'Žlna zelená',
        },
      },
      imageAssets: [
        { assetId: '89004051', metadata: 'adult male' },
        { assetId: '225797001', metadata: 'female' },
        { assetId: '204976721', metadata: 'juvenile' },
        { assetId: '156782581', metadata: 'female' },
        { assetId: '251033171', metadata: 'adult male' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Picus canus',
        localized: {
          en: 'Grey-headed Woodpecker',
          sk: 'Žlna sivá',
        },
      },
      imageAssets: [
        { assetId: '204241861', metadata: 'adult male' },
        { assetId: '212428741', metadata: 'female' },
        { assetId: '44929991', metadata: 'female' },
        { assetId: '45922101', metadata: 'female' },
        { assetId: '204615631', metadata: 'adult male' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Dendrocopos major',
        localized: {
          en: 'Great Spotted Woodpecker',
          sk: 'Ďateľ veľký',
        },
      },
      imageAssets: [
        { assetId: '180000101', metadata: 'adult male' },
        { assetId: '32361981', metadata: 'female' },
        { assetId: '32037111', metadata: 'female' },
        { assetId: '34315971', metadata: 'unknown' },
        { assetId: '112095411', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Dendrocopos syriacus',
        localized: {
          en: 'Syrian Woodpecker',
          sk: 'Ďateľ hnedkavý',
        },
      },
      imageAssets: [
        { assetId: '510944671', metadata: 'adult male' },
        { assetId: '404446301', metadata: 'female' },
        { assetId: '42722871', metadata: 'adult male' },
        { assetId: '152231331', metadata: 'juvenile' },
        { assetId: '156123151', metadata: 'adult male' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Dendrocoptes medius',
        localized: {
          en: 'Middle Spotted Woodpecker',
          sk: 'Ďateľ prostredný',
        },
      },
      imageAssets: [
        { assetId: '23422691', metadata: 'unknown' },
        { assetId: '45028421', metadata: 'unknown' },
        { assetId: '23595961', metadata: 'unknown' },
        { assetId: '41802641', metadata: 'unknown' },
        { assetId: '41802641', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Dendrocopos leucotos',
        localized: {
          en: 'White-backed Woodpecker',
          sk: 'Ďateľ bielochrbtý',
        },
      },
      imageAssets: [
        { assetId: '212416291', metadata: 'adult male' },
        { assetId: '39312481', metadata: 'female' },
        { assetId: '211638041', metadata: 'adult male' },
        { assetId: '26349401', metadata: 'female' },
        { assetId: '40529111', metadata: 'female' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Picoides tridactylus',
        localized: {
          en: 'Eurasian Three-toed Woodpecker',
          sk: 'Ďubník trojprstý',
        },
      },
      imageAssets: [
        { assetId: '144004211', metadata: 'adult male' },
        { assetId: '64175711', metadata: 'female' },
        { assetId: '64175671', metadata: 'adult male' },
        { assetId: '44662801', metadata: 'adult male' },
        { assetId: '33821311', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Dryobates minor',
        localized: {
          en: 'Lesser Spotted Woodpecker',
          sk: 'Ďateľ malý',
        },
      },
      imageAssets: [
        { assetId: '44667321', metadata: 'adult male' },
        { assetId: '43896221', metadata: 'female' },
        { assetId: '45946011', metadata: 'adult male' },
        { assetId: '21752041', metadata: 'adult male' },
        { assetId: '41655431', metadata: 'adult male' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Jynx torquilla',
        localized: {
          en: 'Eurasian Wryneck',
          sk: 'Krutohlav hnedý',
        },
      },
      imageAssets: [
        { assetId: '40415931', metadata: 'unknown' },
        { assetId: '45490741', metadata: 'unknown' },
        { assetId: '26570001', metadata: 'unknown' },
        { assetId: '38966641', metadata: 'unknown' },
        { assetId: '45438521', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
  ],
};

export const woodpeckersGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const woodpeckersSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
