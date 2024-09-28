import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'swallows-martins';

const data: GroupData = {
  name: { en: 'Swallows & martins', sk: 'Lastovičky, belorítky' },
  species: [
    {
      name: {
        latin: 'Riparia riparia',
        localized: {
          en: 'Sand Martin',
          sk: 'Brehuľa hnedá',
        },
      },
      imageAssets: [
        { assetId: '252886281', metadata: 'unknown' },
        { assetId: '60428861', metadata: 'unknown' },
        { assetId: '249845931', metadata: 'unknown' },
        { assetId: '240980911', metadata: 'unknown' },
        { assetId: '250105161', metadata: 'unknown' },
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Ptyonoprogne rupestris'],
      },
    },
    {
      name: {
        latin: 'Ptyonoprogne rupestris',
        localized: {
          en: 'Eurasian Crag Martin',
          sk: 'Lastovička skalná',
        },
      },
      imageAssets: [
        { assetId: '42917161', metadata: 'unknown' },
        { assetId: '66883411', metadata: 'unknown' },
        { assetId: '29255031', metadata: 'unknown' },
        { assetId: '223328061', metadata: 'unknown' },
        { assetId: '43938281', metadata: 'unknown' },
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
    },
    {
      name: {
        latin: 'Hirundo rustica',
        localized: {
          en: 'Barn Swallow',
          sk: 'Lastovička obyčajná',
        },
      },
      imageAssets: [
        { assetId: '204456581', metadata: 'adult' },
        { assetId: '204617511', metadata: 'adult' },
        { assetId: '95665751', metadata: 'adult' },
        { assetId: '54489491', metadata: 'juvenile' },
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: [
          { metadata: 'adult', species: 'Delichon urbicum' },
          { metadata: 'adult', species: 'Riparia riparia' },
          { metadata: 'adult', species: 'Apus apus' },
        ],
      },
    },
    {
      name: {
        latin: 'Cecropis daurica',
        localized: {
          en: 'Red-rumped Swallow',
          sk: 'Lastovička červenochrbtá',
        },
      },
      imageAssets: [
        { assetId: '104167601', metadata: 'adult' },
        { assetId: '46957981', metadata: 'adult' },
        { assetId: '47138001', metadata: 'adult' },
        { assetId: '37945721', metadata: 'juvenile' },
        { assetId: '51745811', metadata: 'unknown' },
      ],
      skAbundance: 'historical',
      similarSpecies: {
        adult: ['Delichon urbicum', 'Hirundo rustica'],
      },
    },
    {
      name: {
        latin: 'Delichon urbicum',
        localized: {
          en: 'Western House Martin',
          sk: 'Belorítka obyčajná',
        },
      },
      imageAssets: [
        { assetId: '59579951', metadata: 'adult' },
        { assetId: '551737171', metadata: 'adult' },
        { assetId: '229546001', metadata: 'immature' },
        { assetId: '366433191', metadata: 'immature' },
        { assetId: '205004071', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Cecropis daurica', 'Hirundo rustica', 'Riparia riparia', 'Apus apus'],
      },
    },
  ],
};

export const swallowsMartinsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const swallowsMartinsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
