import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'pigeons-doves';

const data: GroupData = {
  name: { en: 'Pigeons & doves', sk: 'Holuby a hrdličky' },
  species: [
    {
      name: {
        latin: 'Columba livia',
        localized: {
          en: 'Rock Dove',
          sk: 'Holub divý',
        },
      },
      imageAssets: [
        { assetId: '61674401', metadata: 'unknown' },
        { assetId: '231954971', metadata: 'unknown' },
        { assetId: '101617731', metadata: 'unknown' },
        { assetId: '274051751', metadata: 'unknown' },
        { assetId: '260771451', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: [
          { metadata: 'adult', species: 'Columba oenas' },
          { metadata: 'juvenile', species: 'Columba palumbus' },
        ],
      },
    },
    {
      name: {
        latin: 'Columba oenas',
        localized: {
          en: 'Stock Dove',
          sk: 'Holub plúžik',
        },
      },
      imageAssets: [
        { assetId: '103889961', metadata: 'adult' },
        { assetId: '84884831', metadata: 'adult' },
        { assetId: '38304111', metadata: 'immature' },
        { assetId: '21245391', metadata: 'adult' },
        { assetId: '41904731', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: [
          { metadata: 'adult', species: 'Columba livia' },
          { metadata: 'juvenile', species: 'Columba palumbus' },
        ],
      },
    },
    {
      name: {
        latin: 'Columba palumbus',
        localized: {
          en: 'Common Woodpigeon',
          sk: 'Holub hrivnák',
        },
      },
      imageAssets: [
        { assetId: '165123501', metadata: 'adult' },
        { assetId: '28678781', metadata: 'adult' },
        { assetId: '40965501', metadata: 'juvenile' },
        { assetId: '165035211', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Columba oenas', 'Columba livia'],
        juvenile: [
          { metadata: 'adult', species: 'Columba oenas' },
          { metadata: 'adult', species: 'Columba livia' },
        ],
      },
    },
    {
      name: {
        latin: 'Streptopelia decaocto',
        localized: {
          en: 'Collared Dove',
          sk: 'Hrdlička záhradná',
        },
      },
      imageAssets: [
        { assetId: '208765181', metadata: 'adult' },
        { assetId: '54061871', metadata: 'adult' },
        { assetId: '45325741', metadata: 'adult' },
        { assetId: '262458741', metadata: 'immature' },
        { assetId: '204075451', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: [
          { metadata: 'adult', species: 'Streptopelia turtur' },
          { metadata: 'juvenile', species: 'Columba palumbus' },
        ],
      },
    },
    {
      name: {
        latin: 'Streptopelia turtur',
        localized: {
          en: 'European Turtle Dove',
          sk: 'Hrdlička poľná',
        },
      },
      imageAssets: [
        { assetId: '24866531', metadata: 'adult' },
        { assetId: '204972991', metadata: 'adult' },
        { assetId: '36809011', metadata: 'juvenile' },
        { assetId: '44297131', metadata: 'adult' },
        { assetId: '101205371', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Streptopelia decaocto', 'Streptopelia orientalis'],
      },
    },
    {
      name: {
        latin: 'Streptopelia orientalis',
        localized: {
          en: 'Rufous Turtle Dove',
          sk: 'Hrdlička stepná',
        },
      },
      imageAssets: [
        { assetId: '51836521', metadata: 'adult' },
        { assetId: '22294191', metadata: 'juvenile' },
        { assetId: '139932501', metadata: 'adult' },
        { assetId: '65592821', metadata: 'adult' },
        { assetId: '40327361', metadata: 'adult' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adult: ['Streptopelia turtur', 'Streptopelia decaocto'],
      },
    },
  ],
};

export const pigeonsDovesGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const pigeonsDovesSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
