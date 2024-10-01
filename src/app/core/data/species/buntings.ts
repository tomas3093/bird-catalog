import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'buntings';

const data: GroupData = {
  name: { en: 'Buntings', sk: 'Strnádky' },
  species: [
    {
      name: {
        latin: 'Emberiza schoeniclus',
        localized: {
          en: 'Common Reed Bunting',
          sk: 'Strnádka trstinová',
        },
      },
      imageAssets: [
        { assetId: '221501371', metadata: 'breeding male' },
        { assetId: '35081991', metadata: 'nonbreeding adult' },
        { assetId: '140124491', metadata: 'female/immature male' },
        { assetId: '78556981', metadata: 'female/immature male' },
        { assetId: '40826251', metadata: 'breeding male' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adultFemale: [
          { metadata: 'adult female', species: 'Emberiza citrinella' },
          { metadata: 'female', species: 'Passer domesticus' },
          { metadata: 'adult', species: 'Emberiza calandra' },
        ],
      },
    },
    {
      name: {
        latin: 'Plectrophenax nivalis',
        localized: {
          en: 'Snow Bunting',
          sk: 'Snehuľka severská',
        },
      },
      imageAssets: [
        { assetId: '63891021', metadata: 'breeding male' },
        { assetId: '63891151', metadata: 'breeding female' },
        { assetId: '189870541', metadata: 'nonbreeding male' },
        { assetId: '20802261', metadata: 'nonbreeding female' },
        { assetId: '65061761', metadata: 'juvenile' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Calcarius lapponicus'],
      },
    },
    {
      name: {
        latin: 'Calcarius lapponicus',
        localized: {
          en: 'Lapland Bunting',
          sk: 'Ostrohárka severská',
        },
      },
      imageAssets: [
        { assetId: '31721801', metadata: 'breeding male' },
        { assetId: '136154341', metadata: 'nonbreeding/immature' },
        { assetId: '40198221', metadata: 'nonbreeding/immature' },
        { assetId: '150412631', metadata: 'nonbreeding/immature' },
        { assetId: '42943511', metadata: 'breeding male' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: ['Emberiza rustica', 'Emberiza schoeniclus', 'Emberiza pusilla'],
      },
    },
    {
      name: {
        latin: 'Emberiza hortulana',
        localized: {
          en: 'Ortolan Bunting',
          sk: 'Strnádka záhradná',
        },
      },
      imageAssets: [
        { assetId: '112309661', metadata: 'adult male' },
        { assetId: '46868641', metadata: 'immature' },
        { assetId: '39688241', metadata: 'female/immature male' },
        { assetId: '43493631', metadata: 'adult male' },
        { assetId: '35854161', metadata: 'immature' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adult: ['Emberiza citrinella'],
      },
    },
    {
      name: {
        latin: 'Emberiza citrinella',
        localized: {
          en: 'Yellowhammer',
          sk: 'Strnádka obyčajná',
        },
      },
      imageAssets: [
        { assetId: '78557031', metadata: 'breeding male' },
        { assetId: '30440901', metadata: 'female/immature male' },
        { assetId: '64192491', metadata: 'breeding male' },
        { assetId: '78557041', metadata: 'breeding male' },
        { assetId: '31281541', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adultMale: ['Emberiza cirlus', 'Spinus spinus', 'Serinus serinus'],
        adultFemale: ['Emberiza cirlus'],
      },
    },
    {
      name: {
        latin: 'Emberiza cirlus',
        localized: {
          en: 'Cirl Bunting',
          sk: 'Strnádka svrčivá',
        },
      },
      imageAssets: [
        { assetId: '151274571', metadata: 'adult male' },
        { assetId: '51975691', metadata: 'adult female' },
        { assetId: '23978391', metadata: 'immature' },
        { assetId: '28515791', metadata: 'adult male' },
        { assetId: '28515791', metadata: 'adult male' },
      ],
      skAbundance: 'rare',
      similarSpecies: {
        adultMale: ['Emberiza citrinella', 'Emberiza cia'],
        adultFemale: ['Emberiza citrinella', 'Emberiza schoeniclus'],
      },
    },
    {
      name: {
        latin: 'Emberiza calandra',
        localized: {
          en: 'Corn Bunting',
          sk: 'Strnádka lúčna',
        },
      },
      imageAssets: [
        { assetId: '37498431', metadata: 'unknown' },
        { assetId: '29264701', metadata: 'unknown' },
        { assetId: '26072051', metadata: 'unknown' },
        { assetId: '29288911', metadata: 'unknown' },
        { assetId: '29288911', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: [
          { metadata: 'adult female', species: 'Emberiza citrinella' },
          { metadata: 'female', species: 'Emberiza schoeniclus' },
          { metadata: 'female', species: 'Passer domesticus' },
        ],
      },
    },
    {
      name: {
        latin: 'Emberiza cia',
        localized: {
          en: 'Rock Bunting',
          sk: 'Strnádka cia',
        },
      },
      imageAssets: [
        { assetId: '112309651', metadata: 'adult male' },
        { assetId: '70814251', metadata: 'female/immature male' },
        { assetId: '23443671', metadata: 'adult male' },
        { assetId: '45363561', metadata: 'female/immature male' },
        { assetId: '30633061', metadata: 'unknown' },
      ],
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: ['Emberiza cirlus'],
      },
    },
    {
      name: {
        latin: 'Emberiza melanocephala',
        localized: {
          en: 'Black-headed Bunting',
          sk: 'Strnádka čiernohlavá',
        },
      },
      imageAssets: [
        { assetId: '56782751', metadata: 'adult male' },
        { assetId: '74198511', metadata: 'female' },
        { assetId: '132785351', metadata: 'immature male' },
        { assetId: '105699651', metadata: 'adult male' },
        { assetId: '56279791', metadata: 'adult male' },
      ],
      skAbundance: 'rare',
      similarSpecies: {
        adultMale: ['Motacilla flava'],
      },
    },
    {
      name: {
        latin: 'Emberiza pusilla',
        localized: {
          en: 'Little Bunting',
          sk: 'Strnádka malá',
        },
      },
      imageAssets: [
        { assetId: '43162991', metadata: 'unknown' },
        { assetId: '55819421', metadata: 'unknown' },
        { assetId: '43163001', metadata: 'unknown' },
        { assetId: '32549271', metadata: 'unknown' },
        { assetId: '42266301', metadata: 'unknown' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: [
          { metadata: 'female', species: 'Emberiza schoeniclus' },
          { metadata: 'female', species: 'Emberiza rustica' },
        ],
      },
    },
    {
      name: {
        latin: 'Emberiza rustica',
        localized: {
          en: 'Rustic Bunting',
          sk: 'Strnádka roľná',
        },
      },
      imageAssets: [
        { assetId: '390887881', metadata: 'breeding male' },
        { assetId: '584790321', metadata: 'female' },
        { assetId: '385227721', metadata: 'female/immature male' },
        { assetId: '489983721', metadata: 'female/immature male' },
        { assetId: '319502301', metadata: 'female/immature male' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: ['Calcarius lapponicus'],
        adultFemale: ['Emberiza schoeniclus'],
      },
    },
  ],
};

export const buntingsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const buntingsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
