import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'buntings';

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
    },
  ],
};

export const buntingsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const buntingsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
