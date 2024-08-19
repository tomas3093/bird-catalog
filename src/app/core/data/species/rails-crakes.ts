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
    },
  ],
};

export const railsCrakesGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const railsCrakesSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
