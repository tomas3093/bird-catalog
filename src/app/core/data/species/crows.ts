import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'crows';

const data: GroupData = {
  name: { en: 'Crows', sk: 'Krkavcovité' },
  species: [
    {
      name: {
        latin: 'Pica pica',
        localized: {
          en: 'Common Magpie',
          sk: 'Straka obyčajná',
        },
      },
      imageAssets: [
        { assetId: '427971511', metadata: 'adult' },
        { assetId: '610013957', metadata: 'adult' },
        { assetId: '65220561', metadata: 'juvenile' },
        { assetId: '26142411', metadata: 'adult' },
        { assetId: '282458441', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Garrulus glandarius',
        localized: {
          en: 'Eurasian Jay',
          sk: 'Sojka obyčajná',
        },
      },
      imageAssets: [
        { assetId: '241250451', metadata: 'adult' },
        { assetId: '245777181', metadata: 'adult' },
        { assetId: '164629001', metadata: 'adult' },
        { assetId: '43005471', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Nucifraga caryocatactes',
        localized: {
          en: 'Spotted Nutcracker',
          sk: 'Orešnica perlavá',
        },
      },
      imageAssets: [
        { assetId: '204245841', metadata: 'adult' },
        { assetId: '42410911', metadata: 'adult' },
        { assetId: '205043411', metadata: 'adult' },
        { assetId: '204878861', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Corvus monedula',
        localized: {
          en: 'Eurasian Jackdaw',
          sk: 'Kavka tmavá',
        },
      },
      imageAssets: [
        { assetId: '35496821', metadata: 'unknown' },
        { assetId: '270642441', metadata: 'unknown' },
        { assetId: '29257001', metadata: 'unknown' },
        { assetId: '35496891', metadata: 'unknown' },
        { assetId: '26274811', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Corvus frugilegus',
        localized: {
          en: 'Rook',
          sk: 'Havran čierny',
        },
      },
      imageAssets: [
        { assetId: '21016221', metadata: 'unknown' },
        { assetId: '39525811', metadata: 'unknown' },
        { assetId: '34698341', metadata: 'unknown' },
        { assetId: '196289061', metadata: 'unknown' },
        { assetId: '43942601', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Corvus cornix',
        localized: {
          en: 'Hooded Crow',
          sk: 'Vrana popolavá',
        },
      },
      imageAssets: [
        { assetId: '35081921', metadata: 'unknown' },
        { assetId: '204246291', metadata: 'unknown' },
        { assetId: '44444481', metadata: 'unknown' },
        { assetId: '40089901', metadata: 'unknown' },
        { assetId: '35462051', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Corvus corone',
        localized: {
          en: 'Carrion Crow',
          sk: 'Vrana čierna',
        },
      },
      imageAssets: [
        { assetId: '219759311', metadata: 'unknown' },
        { assetId: '40154241', metadata: 'unknown' },
        { assetId: '200229111', metadata: 'unknown' },
        { assetId: '238078251', metadata: 'juvenile' },
        { assetId: '43507591', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Corvus corax',
        localized: {
          en: 'Common Raven',
          sk: 'Krkavec čierny',
        },
      },
      imageAssets: [
        { assetId: '171431281', metadata: 'adult' },
        { assetId: '56776761', metadata: 'adult' },
        { assetId: '314040431', metadata: 'juvenile' },
        { assetId: '198824141', metadata: 'unknown' },
        { assetId: '246461071', metadata: 'juvenile' },
      ],
    },
  ],
};

export const crowsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const crowsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
