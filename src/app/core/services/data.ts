import { DataItem, GroupItem } from './storage.model';

/**
 * Returns image URL according to specified asset ID from Macaulay library
 * @param assetId
 * @param fullSize
 * @returns
 */
export const macaulayImgAssetUrl = (
  assetId: string,
  fullSize: boolean
): string => {
  const url =
    'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/' + assetId;
  return fullSize ? `${url}/1200` : url;
};

/**
 * Returns main image URL from species asset list
 * @param speciesImageAssets
 * @param fullSize
 * @returns
 */
export const speciesMainImage = (
  speciesImageAssets: string[],
  fullSize: boolean
): string => {
  if (!speciesImageAssets || speciesImageAssets.length <= 0) {
    throw Error('Image assets not available.');
  }

  return macaulayImgAssetUrl(speciesImageAssets[0], fullSize);
};

export const taxonomy: GroupItem[] = [
  {
    id: 1,
    en: 'Birds of prey',
    sk: 'Dravce',
    subGroup: { en: 'Eagles', sk: 'Orly' },
  },
  {
    id: 2,
    en: 'Birds of prey',
    sk: 'Dravce',
    subGroup: { en: 'Kites', sk: 'Haje' },
  },
  {
    id: 3,
    en: 'Birds of prey',
    sk: 'Dravce',
    subGroup: { en: 'Harriers', sk: 'Kane' },
  },
  {
    id: 4,
    en: 'Birds of prey',
    sk: 'Dravce',
    subGroup: { en: 'Buzzards', sk: 'Myšiaky' },
  },
  {
    id: 5,
    en: 'Birds of prey',
    sk: 'Dravce',
    subGroup: { en: 'Honey buzzard', sk: 'Včelár' },
  },
  {
    id: 6,
    en: 'Birds of prey',
    sk: 'Dravce',
    subGroup: { en: 'Hawks', sk: 'Jastraby' },
  },
  {
    id: 7,
    en: 'Birds of prey',
    sk: 'Dravce',
    subGroup: { en: 'Falcons', sk: 'Sokoly' },
  },
  {
    id: 8,
    en: 'Birds of prey',
    sk: 'Dravce',
    subGroup: { en: 'Osprey', sk: 'Kršiak' },
  },
  {
    id: 9,
    en: 'Sparrows',
    sk: 'Vrabce',
  },
];

export const data: DataItem[] = [
  {
    code: 'whteag',
    name: {
      latin: 'Haliaeetus albicilla',
      en: 'White-tailed Eagle',
      sk: 'Orliak morský',
    },
    groupId: 1,
    imageAssets: [
      { assetId: '26861391', metadata: 'adult' },
      { assetId: '40236731', metadata: 'immature' },
      { assetId: '38318941', metadata: 'immature' },
      { assetId: '20060811', metadata: 'adult' },
      { assetId: '44985401', metadata: 'immature' },
    ],
  },
  {
    code: 'goleag',
    name: {
      latin: 'Aquila chrysaetos',
      en: 'Golden Eagle',
      sk: 'Orol skalný',
    },
    groupId: 1,
    imageAssets: [
      { assetId: '209005751', metadata: 'adult' },
      { assetId: '57752091', metadata: 'immature' },
      { assetId: '263214871', metadata: 'immature' },
      { assetId: '26325211', metadata: 'adult' },
      { assetId: '275690361', metadata: 'immature' },
    ],
  },
  {
    code: 'impeag1',
    name: {
      latin: 'Aquila heliaca',
      en: 'Imperial Eagle',
      sk: 'Orol kráľovský',
    },
    groupId: 1,
    imageAssets: [
      { assetId: '64341561', metadata: 'immature' },
      { assetId: '126187761', metadata: 'adult' },
      { assetId: '42992541', metadata: 'immature' },
      { assetId: '220623401', metadata: 'adult' },
      { assetId: '39586521', metadata: 'subadult' },
    ],
  },
  {
    code: 'leseag1',
    name: {
      latin: 'Clanga pomarina',
      en: 'Lesser Spotted Eagle',
      sk: 'Orol krikľavý',
    },
    groupId: 1,
    imageAssets: [
      { assetId: '35864181', metadata: 'adult' },
      { assetId: '49929491', metadata: 'immature' },
      { assetId: '22186111', metadata: 'adult' },
      { assetId: '43488351', metadata: 'adult' },
      { assetId: '196828171', metadata: 'juvenile' },
    ],
  },
  {
    code: 'shteag1',
    name: {
      latin: 'Circaetus gallicus',
      en: 'Short-toed Snake-Eagle',
      sk: 'Hadiar krátkoprstý',
    },
    groupId: 1,
    imageAssets: [
      { assetId: '36323561', metadata: 'unknown' },
      { assetId: '41701421', metadata: 'unknown' },
      { assetId: '50787181', metadata: 'unknown' },
      { assetId: '39220891', metadata: 'unknown' },
      { assetId: '46583481', metadata: 'unknown' },
    ],
  },
  {
    code: 'redkit1',
    name: {
      latin: 'Milvus milvus',
      en: 'Red Kite',
      sk: 'Haja červená',
    },
    groupId: 2,
    imageAssets: [
      { assetId: '104479601', metadata: 'adult' },
      { assetId: '70617551', metadata: 'adult' },
      { assetId: '95714191', metadata: 'adult' },
      { assetId: '34889771', metadata: 'juvenile' },
      { assetId: '43787251', metadata: 'immature' },
    ],
  },
  {
    code: 'blakit1',
    name: {
      latin: 'Milvus migrans',
      en: 'Black Kite',
      sk: 'Haja tmavá',
    },
    groupId: 2,
    imageAssets: [
      { assetId: '25504811', metadata: 'adult' },
      { assetId: '20990971', metadata: 'juvenile' },
      { assetId: '31277461', metadata: 'juvenile' },
      { assetId: '194547221', metadata: 'juvenile' },
      { assetId: '33505041', metadata: 'juvenile' },
    ],
  },
  {
    code: 'wemhar1',
    name: {
      latin: 'Circus aeruginosus',
      en: 'Western Marsh Harrier',
      sk: 'Kaňa močiarna',
    },
    groupId: 3,
    imageAssets: [
      { assetId: '190082101', metadata: 'adult male' },
      { assetId: '193061791', metadata: 'immature male' },
      { assetId: '38371921', metadata: 'adult male' },
      { assetId: '43733091', metadata: 'female' },
      { assetId: '346923891', metadata: 'adult male' },
      { assetId: '34475781', metadata: 'immature female' },
    ],
  },
  {
    code: 'norhar1',
    name: {
      latin: 'Circus cyaneus',
      en: 'Hen Harrier',
      sk: 'Kaňa sivá',
    },
    groupId: 3,
    imageAssets: [
      { assetId: '189755831', metadata: 'adult male' },
      { assetId: '57601551', metadata: 'female/immature male' },
      { assetId: '57601871 ', metadata: 'female/immature male' },
      { assetId: '206041211', metadata: 'immature male' },
      { assetId: '37535161', metadata: 'female' },
      { assetId: '63555051', metadata: 'adult male' },
    ],
  },
  {
    code: 'monhar1',
    name: {
      latin: 'Circus pygargus',
      en: "Montagu's Harrier",
      sk: 'Kaňa popolavá',
    },
    groupId: 3,
    imageAssets: [
      { assetId: '44390971', metadata: 'adult male' },
      { assetId: '45737231', metadata: 'adult female' },
      { assetId: '38204901 ', metadata: 'juvenile' },
      { assetId: '41083291', metadata: 'adult male' },
      { assetId: '43521811', metadata: 'adult female' },
      { assetId: '45176181', metadata: 'adult male' },
    ],
  },
  {
    code: 'palhar1',
    name: {
      latin: 'Circus macrourus',
      en: 'Pallid Harrier',
      sk: 'Kaňa stepná',
    },
    groupId: 3,
    imageAssets: [
      { assetId: '33606121', metadata: 'adult male' },
      { assetId: '38534171', metadata: 'female' },
      { assetId: '43391411 ', metadata: 'juvenile' },
      { assetId: '38029191', metadata: 'adult male' },
      { assetId: '26701651', metadata: 'adult male' },
      { assetId: '41275581', metadata: 'adult male' },
    ],
  },
  {
    code: 'eutspa',
    name: {
      latin: 'Passer montanus',
      en: 'Eurasian Tree Sparrow',
      sk: 'Vrabec poľný',
    },
    groupId: 9,
    imageAssets: [
      { assetId: '219798061', metadata: 'adult' },
      { assetId: '32123821', metadata: 'adult' },
      { assetId: '189571141', metadata: 'adult' },
      { assetId: '249362541', metadata: 'juvenile' },
    ],
  },
  {
    code: 'houspa',
    name: {
      latin: 'Passer domesticus',
      en: 'House Sparrow',
      sk: 'Vrabec domový',
    },
    groupId: 9,
    imageAssets: [
      { assetId: '51357991', metadata: 'breeding male' },
      { assetId: '69514291', metadata: 'female' },
      { assetId: '41624001', metadata: 'nonbreeding/immature' },
      { assetId: '93464491', metadata: 'breeding male' },
      { assetId: '161700291', metadata: 'juvenile' },
    ],
  },
];
