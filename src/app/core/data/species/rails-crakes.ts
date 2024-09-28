import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'rails-crakes';

const data: GroupData = {
  name: { en: 'Rails & crakes', sk: 'Chriaštele' },
  species: [
    {
      name: {
        latin: 'Crex crex',
        localized: {
          en: 'Corncrake',
          sk: 'Chrapkáč poľný',
        },
      },
      imageAssets: [
        { assetId: '96093341', metadata: 'adult' },
        { assetId: '74784141', metadata: 'juvenile' },
        { assetId: '41920401', metadata: 'adult' },
        { assetId: '31442381', metadata: 'adult' },
        { assetId: '39576561', metadata: 'adult' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Perdix perdix', 'Rallus aquaticus'],
      },
    },
    {
      name: {
        latin: 'Rallus aquaticus',
        localized: {
          en: 'Water Rail',
          sk: 'Chriašteľ vodný',
        },
      },
      imageAssets: [
        { assetId: '216064551', metadata: 'adult' },
        { assetId: '32037571', metadata: 'juvenile' },
        { assetId: '43865301', metadata: 'adult' },
        { assetId: '40445761', metadata: 'juvenile' },
        { assetId: '23704831', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: [
          { metadata: 'adult male', species: 'Zapornia parva' },
          { metadata: 'adult', species: 'Zapornia pusilla' },
          { metadata: 'adult', species: 'Porzana porzana' },
          { metadata: 'juvenile', species: 'Gallinula chloropus' },
        ],
      },
    },
    {
      name: {
        latin: 'Porzana porzana',
        localized: {
          en: 'Spotted Crake',
          sk: 'Chriašť bodkovaný',
        },
      },
      imageAssets: [
        { assetId: '207300951', metadata: 'unknown' },
        { assetId: '35307441', metadata: 'unknown' },
        { assetId: '34900861', metadata: 'unknown' },
        { assetId: '25693751', metadata: 'unknown' },
        { assetId: '25693751', metadata: 'unknown' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: [
          { metadata: 'adult', species: 'Rallus aquaticus' },
          { metadata: 'adult', species: 'Crex crex' },
          { metadata: 'juvenile', species: 'Gallinula chloropus' },
        ],
      },
    },
    {
      name: {
        latin: 'Zapornia parva',
        localized: {
          en: 'Little Crake',
          sk: 'Chriašť malý',
        },
      },
      imageAssets: [
        { assetId: '64286061', metadata: 'adult male' },
        { assetId: '153961441', metadata: 'female' },
        { assetId: '21084791', metadata: 'juvenile' },
        { assetId: '204530011', metadata: 'juvenile' },
        { assetId: '132978731', metadata: 'adult male' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Zapornia pusilla', 'Rallus aquaticus', 'Porzana porzana'],
      },
    },
    {
      name: {
        latin: 'Zapornia pusilla',
        localized: {
          en: "Baillon's Crake",
          sk: 'Chriašť najmenší',
        },
      },
      imageAssets: [
        { assetId: '204071531', metadata: 'adult' },
        { assetId: '217461241', metadata: 'adult' },
        { assetId: '21678291', metadata: 'juvenile' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: [
          { metadata: 'adult male', species: 'Zapornia parva' },
          { metadata: 'adult', species: 'Rallus aquaticus' },
        ],
      },
    },
    {
      name: {
        latin: 'Gallinula chloropus',
        localized: {
          en: 'Common Moorhen',
          sk: 'Sliepočka vodná',
        },
      },
      imageAssets: [
        { assetId: '610959814', metadata: 'adult' },
        { assetId: '448234581', metadata: 'juvenile' },
        { assetId: '610959817', metadata: 'immature' },
        { assetId: '404825431', metadata: 'adult' },
        { assetId: '618713037', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Fulica atra'],
        juvenile: [
          { metadata: 'juvenile', species: 'Fulica atra' },
          { metadata: 'adult', species: 'Rallus aquaticus' },
        ],
      },
    },
    {
      name: {
        latin: 'Fulica atra',
        localized: {
          en: 'Eurasian Coot',
          sk: 'Lyska čierna',
        },
      },
      imageAssets: [
        { assetId: '608849055', metadata: 'adult' },
        { assetId: '303953581', metadata: 'adult' },
        { assetId: '427333081', metadata: 'adult' },
        { assetId: '26857161', metadata: 'adult' },
        { assetId: '34315031', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Gallinula chloropus'],
        juvenile: ['Gallinula chloropus'],
      },
    },
  ],
};

export const railsCrakesGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const railsCrakesSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
