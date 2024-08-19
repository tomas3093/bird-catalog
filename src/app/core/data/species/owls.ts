import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'owls';

const data: GroupData = {
  name: { en: 'Owls', sk: 'Sovy' },
  species: [
    {
      name: {
        latin: 'Bubo bubo',
        localized: {
          en: 'Eurasian Eagle Owl',
          sk: 'Výr skalný',
        },
      },
      imageAssets: [
        { assetId: '162236021', metadata: 'adult' },
        { assetId: '118963981', metadata: 'adult' },
        { assetId: '84727291', metadata: 'juvenile' },
        { assetId: '172743421', metadata: 'juvenile' },
        { assetId: '42105721', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Strix uralensis',
        localized: {
          en: 'Ural Owl',
          sk: 'Sova dlhochvostá',
        },
      },
      imageAssets: [
        { assetId: '198773431', metadata: 'adult' },
        { assetId: '241822131', metadata: 'adult' },
        { assetId: '234190461', metadata: 'juvenile' },
        { assetId: '198095061', metadata: 'adult' },
        { assetId: '204399531', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Aegolius funereus',
        localized: {
          en: 'Boreal Owl',
          sk: 'Pôtik kapcavý',
        },
      },
      imageAssets: [
        { assetId: '63333271', metadata: 'adult' },
        { assetId: '63898831', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Glaucidium passerinum',
        localized: {
          en: 'Eurasian Pygmy-Owl',
          sk: 'Kuvičok vrabčí',
        },
      },
      imageAssets: [
        { assetId: '212474581', metadata: 'adult' },
        { assetId: '145680841', metadata: 'adult' },
        { assetId: '65608261', metadata: 'juvenile' },
        { assetId: '204219721', metadata: 'adult' },
        { assetId: '215168381', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Asio otus',
        localized: {
          en: 'Long-eared Owl',
          sk: 'Myšiarka ušatá',
        },
      },
      imageAssets: [
        { assetId: '75486701', metadata: 'adult' },
        { assetId: '276143521', metadata: 'adult' },
        { assetId: '75311201', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Asio flammeus',
        localized: {
          en: 'Short-eared Owl',
          sk: 'Myšiarka močiarna',
        },
      },
      imageAssets: [
        { assetId: '35565681', metadata: 'adult' },
        { assetId: '154829331', metadata: 'adult' },
        { assetId: '200383181', metadata: 'immature' },
        { assetId: '204615791', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Strix aluco',
        localized: {
          en: 'Tawny Owl',
          sk: 'Sova obyčajná',
        },
      },
      imageAssets: [
        { assetId: '227951381', metadata: 'adult' },
        { assetId: '205351851', metadata: 'adult' },
        { assetId: '32639101', metadata: 'juvenile' },
        { assetId: '239180481', metadata: 'adult' },
        { assetId: '204183021', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Tyto alba',
        localized: {
          en: 'Barn Owl',
          sk: 'Plamienka driemavá',
        },
      },
      imageAssets: [
        { assetId: '155550701', metadata: 'adult' },
        { assetId: '58991071', metadata: 'adult' },
        { assetId: '91185011', metadata: 'adult' },
        { assetId: '33249041', metadata: 'adult' },
        { assetId: '57982571', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Athene noctua',
        localized: {
          en: 'Little Owl',
          sk: 'Kuvik obyčajný',
        },
      },
      imageAssets: [
        { assetId: '241599051', metadata: 'unknown' },
        { assetId: '250510071', metadata: 'unknown' },
        { assetId: '250510051', metadata: 'unknown' },
        { assetId: '247375091', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Otus scops',
        localized: {
          en: 'Eurasian Scops Owl',
          sk: 'Výrik lesný',
        },
      },
      imageAssets: [
        { assetId: '27138081', metadata: 'adult' },
        { assetId: '146539611', metadata: 'adult' },
        { assetId: '39869811', metadata: 'adult' },
        { assetId: '249379041', metadata: 'juvenile' },
        { assetId: '28176551', metadata: 'adult' },
      ],
    },
  ],
};

export const owlsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const owlsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
