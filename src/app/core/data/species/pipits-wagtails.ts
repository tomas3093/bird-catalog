import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'pipits-wagtails';

const data: GroupData = {
  name: { en: 'Pipits & wagtails', sk: 'Labtušky a trasochvosty' },
  species: [
    {
      name: {
        latin: 'Anthus campestris',
        localized: {
          en: 'Tawny Pipit',
          sk: 'Ľabtuška poľná',
        },
      },
      imageAssets: [
        { assetId: '108393041', metadata: 'adult' },
        { assetId: '51741791', metadata: 'juvenile' },
        { assetId: '52365871', metadata: 'adult' },
        { assetId: '34550131', metadata: 'adult' },
        { assetId: '52366351', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Anthus richardi',
        localized: {
          en: "Richard's Pipit",
          sk: 'Ľabtuška veľká',
        },
      },
      imageAssets: [
        { assetId: '614092351', metadata: 'unknown' },
        { assetId: '36107831', metadata: 'unknown' },
        { assetId: '49017631', metadata: 'unknown' },
        { assetId: '36146841', metadata: 'unknown' },
        { assetId: '51134331', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Anthus spinoletta',
        localized: {
          en: 'Water Pipit',
          sk: 'Ľabtuška vrchovská',
        },
      },
      imageAssets: [
        { assetId: '288484741', metadata: 'breeding adult' },
        { assetId: '79028331', metadata: 'nonbreeding/immature' },
        { assetId: '243601301', metadata: 'juvenile' },
        { assetId: '204046171', metadata: 'nonbreeding/immature' },
        { assetId: '29350581', metadata: 'breeding adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Anthus pratensis',
        localized: {
          en: 'Meadow Pipit',
          sk: 'Ľabtuška lúčna',
        },
      },
      imageAssets: [
        { assetId: '204922651', metadata: 'unknown' },
        { assetId: '42310211', metadata: 'unknown' },
        { assetId: '42410041', metadata: 'unknown' },
        { assetId: '35081981', metadata: 'unknown' },
        { assetId: '36424311', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Anthus trivialis',
        localized: {
          en: 'Tree Pipit',
          sk: 'Ľabtuška hôrna',
        },
      },
      imageAssets: [
        { assetId: '34555451', metadata: 'unknown' },
        { assetId: '45496681', metadata: 'unknown' },
        { assetId: '34520281', metadata: 'unknown' },
        { assetId: '20407181', metadata: 'unknown' },
        { assetId: '20407181', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Anthus cervinus',
        localized: {
          en: 'Red-throated Pipit',
          sk: 'Ľabtuška červenohrdlá',
        },
      },
      imageAssets: [
        { assetId: '204585981', metadata: 'adult' },
        { assetId: '186198711', metadata: 'nonbreeding/immature' },
        { assetId: '180904031', metadata: 'nonbreeding/immature' },
        { assetId: '21505141', metadata: 'juvenile' },
        { assetId: '42943201', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Motacilla alba',
        localized: {
          en: 'White Wagtail',
          sk: 'Trasochvost biely',
        },
      },
      imageAssets: [
        { assetId: '42547971', metadata: 'adult' },
        { assetId: '32318171', metadata: 'juvenile' },
        { assetId: '42407251', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Motacilla flava',
        localized: {
          en: 'Western Yellow Wagtail',
          sk: 'Trasochvost žltý',
        },
      },
      imageAssets: [
        { assetId: '63967521', metadata: 'breeding adult' },
        { assetId: '20258291', metadata: 'immature' },
        { assetId: '26423771', metadata: 'breeding adult' },
        { assetId: '158729421', metadata: 'breeding adult' },
        { assetId: '43376451', metadata: 'breeding adult' },
        { assetId: '41968381', metadata: 'immature' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Motacilla citreola',
        localized: {
          en: 'Citrine Wagtail',
          sk: 'Trasochvost žltohlavý',
        },
      },
      imageAssets: [
        { assetId: '191338911', metadata: 'breeding male' },
        { assetId: '29853251', metadata: 'breeding male' },
        { assetId: '51140561', metadata: 'nonbreeding adult' },
        { assetId: '45221311', metadata: 'immature' },
        { assetId: '35870071', metadata: 'immature' },
        { assetId: '48760391', metadata: 'immature' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
    {
      name: {
        latin: 'Motacilla cinerea',
        localized: {
          en: 'Grey Wagtail',
          sk: 'Trasochvost horský',
        },
      },
      imageAssets: [
        { assetId: '23443031', metadata: 'breeding male' },
        { assetId: '35527541', metadata: 'female/immature male' },
        { assetId: '34626731', metadata: 'breeding male' },
        { assetId: '34293701', metadata: 'female/immature male' },
        { assetId: '35637281', metadata: 'female/immature male' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: [],
    },
  ],
};

export const pipitsWagtailsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const pipitsWagtailsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
