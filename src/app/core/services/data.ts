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
    name: { en: 'Birds of prey', sk: 'Dravce' },
    parentGroupId: null,
  },
  {
    id: 2,
    name: { en: 'Sparrows', sk: 'Vrabce' },
    parentGroupId: null,
  },
  {
    id: 101,
    name: { en: 'Eagles', sk: 'Orly' },
    parentGroupId: 1,
  },
  {
    id: 102,
    name: { en: 'Kites', sk: 'Haje' },
    parentGroupId: 1,
  },
  {
    id: 103,
    name: { en: 'Harriers', sk: 'Kane' },
    parentGroupId: 1,
  },
  {
    id: 104,
    name: { en: 'Buzzards', sk: 'Myšiaky' },
    parentGroupId: 1,
  },
  {
    id: 105,
    name: { en: 'Honey buzzard', sk: 'Včelár' },
    parentGroupId: 1,
  },
  {
    id: 106,
    name: { en: 'Hawks', sk: 'Jastraby' },
    parentGroupId: 1,
  },
  {
    id: 107,
    name: { en: 'Falcons', sk: 'Sokoly' },
    parentGroupId: 1,
  },
  {
    id: 108,
    name: { en: 'Osprey', sk: 'Kršiak' },
    parentGroupId: 1,
  },
];

export const data: DataItem[] = [
  {
    code: 'whteag',
    name: {
      latin: 'Haliaeetus albicilla',
      localized: { en: 'White-tailed Eagle', sk: 'Orliak morský' },
    },
    groupId: 101,
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
      localized: { en: 'Golden Eagle', sk: 'Orol skalný' },
    },
    groupId: 101,
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
      localized: { en: 'Imperial Eagle', sk: 'Orol kráľovský' },
    },
    groupId: 101,
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
      localized: { en: 'Lesser Spotted Eagle', sk: 'Orol krikľavý' },
    },
    groupId: 101,
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
      localized: { en: 'Short-toed Snake-Eagle', sk: 'Hadiar krátkoprstý' },
    },
    groupId: 101,
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
      localized: { en: 'Red Kite', sk: 'Haja červená' },
    },
    groupId: 102,
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
      localized: { en: 'Black Kite', sk: 'Haja tmavá' },
    },
    groupId: 102,
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
      localized: { en: 'Western Marsh Harrier', sk: 'Kaňa močiarna' },
    },
    groupId: 103,
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
      localized: { en: 'Hen Harrier', sk: 'Kaňa sivá' },
    },
    groupId: 103,
    imageAssets: [
      { assetId: '189755831', metadata: 'adult male' },
      { assetId: '57601551', metadata: 'female/immature male' },
      { assetId: '57601871', metadata: 'female/immature male' },
      { assetId: '206041211', metadata: 'immature male' },
      { assetId: '37535161', metadata: 'female' },
      { assetId: '63555051', metadata: 'adult male' },
    ],
  },
  {
    code: 'monhar1',
    name: {
      latin: 'Circus pygargus',
      localized: { en: "Montagu's Harrier", sk: 'Kaňa popolavá' },
    },
    groupId: 103,
    imageAssets: [
      { assetId: '44390971', metadata: 'adult male' },
      { assetId: '45737231', metadata: 'adult female' },
      { assetId: '38204901', metadata: 'juvenile' },
      { assetId: '41083291', metadata: 'adult male' },
      { assetId: '43521811', metadata: 'adult female' },
      { assetId: '45176181', metadata: 'adult male' },
    ],
  },
  {
    code: 'palhar1',
    name: {
      latin: 'Circus macrourus',
      localized: { en: 'Pallid Harrier', sk: 'Kaňa stepná' },
    },
    groupId: 103,
    imageAssets: [
      { assetId: '33606121', metadata: 'adult male' },
      { assetId: '38534171', metadata: 'female' },
      { assetId: '43391411', metadata: 'juvenile' },
      { assetId: '38029191', metadata: 'adult male' },
      { assetId: '26701651', metadata: 'adult male' },
      { assetId: '41275581', metadata: 'adult male' },
    ],
  },
  {
    code: 'lolbuz1',
    name: {
      latin: 'Buteo rufinus',
      localized: { en: 'Long-legged Buzzard', sk: 'Myšiak hrdzavý' },
    },
    groupId: 104,
    imageAssets: [
      { assetId: '66273761', metadata: 'adult light morph' },
      { assetId: '20980431', metadata: 'adult rufous morph' },
      { assetId: '54027161', metadata: 'adult dark morph' },
      { assetId: '38028921', metadata: 'immature light morph' },
      { assetId: '46595271', metadata: 'immature light morph' },
    ],
  },
  {
    code: 'combuz1',
    name: {
      latin: 'Buteo buteo',
      localized: { en: 'Common Buzzard', sk: 'Myšiak hôrny' },
    },
    groupId: 104,
    imageAssets: [
      { assetId: '35712671', metadata: 'adult' },
      { assetId: '31262261', metadata: 'adult' },
      { assetId: '36255951', metadata: 'adult light morph' },
      { assetId: '34393941', metadata: 'juvenile' },
      { assetId: '39479281', metadata: 'adult' },
      { assetId: '43263301', metadata: 'adult dark morph' },
    ],
  },
  {
    code: 'rolhaw',
    name: {
      latin: 'Buteo lagopus',
      localized: { en: 'Rough-legged Hawk', sk: 'Myšiak severský' },
    },
    groupId: 104,
    imageAssets: [
      { assetId: '47706471', metadata: 'adult light morph' },
      { assetId: '46292241', metadata: 'immature light morph' },
      { assetId: '46855241', metadata: 'juvenile' },
      { assetId: '26775691', metadata: 'adult light morph' },
    ],
  },
  {
    code: 'euhbuz1',
    name: {
      latin: 'Pernis apivorus',
      localized: { en: 'European Honey-buzzard', sk: 'Včelár lesný' },
    },
    groupId: 105,
    imageAssets: [
      { assetId: '174857931', metadata: 'adult' },
      { assetId: '176504501', metadata: 'adult dark morph' },
      { assetId: '59583091', metadata: 'juvenile' },
      { assetId: '181548921', metadata: 'adult light morph' },
      { assetId: '205935771', metadata: 'adult light morph' },
    ],
  },
  {
    code: 'eurspa1',
    name: {
      latin: 'Accipiter nisus',
      localized: { en: 'Eurasian Sparrowhawk', sk: 'Jastrab krahulec' },
    },
    groupId: 106,
    imageAssets: [
      { assetId: '154133151', metadata: 'adult male' },
      { assetId: '40253451', metadata: 'adult male' },
      { assetId: '40871671', metadata: 'adult female' },
      { assetId: '38442851', metadata: 'adult female' },
      { assetId: '43010081', metadata: 'immature' },
      { assetId: '41087551', metadata: 'juvenile' },
    ],
  },
  {
    code: 'norgos1',
    name: {
      latin: 'Accipiter gentilis',
      localized: { en: 'Eurasian Goshawk', sk: 'Jastrab veľký' },
    },
    groupId: 106,
    imageAssets: [
      { assetId: '409340871', metadata: 'adult' },
      { assetId: '251032311', metadata: 'adult' },
      { assetId: '486521891', metadata: 'juvenile' },
      { assetId: '294030031', metadata: 'juvenile' },
      { assetId: '305163221', metadata: 'adult' },
      { assetId: '492727441', metadata: 'juvenile' },
    ],
  },
  {
    code: 'eurkes',
    name: {
      latin: 'Falco tinnunculus',
      localized: { en: 'Eurasian Kestrel', sk: 'Sokol myšiar' },
    },
    groupId: 107,
    imageAssets: [
      { assetId: '234114551', metadata: 'adult male' },
      { assetId: '31119701', metadata: 'female' },
      { assetId: '33753141', metadata: 'immature' },
      { assetId: '41171261', metadata: 'adult male' },
      { assetId: '42654331', metadata: 'female' },
      { assetId: '42077001', metadata: 'adult male' },
    ],
  },
  {
    code: 'reffal1',
    name: {
      latin: 'Falco vespertinus',
      localized: { en: 'Red-footed Falcon', sk: 'Sokol kobcovitý' },
    },
    groupId: 107,
    imageAssets: [
      { assetId: '204150991', metadata: 'adult male' },
      { assetId: '157235681', metadata: 'adult female' },
      { assetId: '111817431', metadata: 'juvenile' },
      { assetId: '204879041', metadata: 'adult male' },
      { assetId: '204612271', metadata: 'adult female' },
      { assetId: '174613471', metadata: 'juvenile' },
      { assetId: '126408781', metadata: 'juvenile' },
    ],
  },
  {
    code: 'eurhob',
    name: {
      latin: 'Falco subbuteo',
      localized: { en: 'Eurasian Hobby', sk: 'Sokol lastovičiar' },
    },
    groupId: 107,
    imageAssets: [
      { assetId: '197933351', metadata: 'adult' },
      { assetId: '205735971', metadata: 'adult' },
      { assetId: '129768341', metadata: 'immature' },
      { assetId: '74331571', metadata: 'immature' },
      { assetId: '199256531', metadata: 'adult' },
      { assetId: '69285851', metadata: 'adult' },
    ],
  },
  {
    code: 'perfal',
    name: {
      latin: 'Falco peregrinus',
      localized: { en: 'Peregrine Falcon', sk: 'Sokol sťahovavý' },
    },
    groupId: 107,
    imageAssets: [
      { assetId: '63239691', metadata: 'adult' },
      { assetId: '288347741', metadata: 'adult' },
      { assetId: '87305901', metadata: 'juvenile' },
      { assetId: '43852301', metadata: 'juvenile' },
      { assetId: '54334451', metadata: 'immature' },
      { assetId: '56019481', metadata: 'adult' },
    ],
  },
  {
    code: 'merlin',
    name: {
      latin: 'Falco columbarius',
      localized: { en: 'Merlin', sk: 'Sokol kobec' },
    },
    groupId: 107,
    imageAssets: [
      { assetId: '27354311', metadata: 'adult male' },
      { assetId: '51619781', metadata: 'female/immature male' },
      { assetId: '46239361', metadata: 'female/immature male' },
    ],
  },
  {
    code: 'sakfal1',
    name: {
      latin: 'Falco cherrug',
      localized: { en: 'Saker Falcon', sk: 'Sokol rároh' },
    },
    groupId: 107,
    imageAssets: [
      { assetId: '36107661', metadata: 'adult' },
      { assetId: '42667321', metadata: 'adult' },
      { assetId: '204749991', metadata: 'adult' },
      { assetId: '32691991', metadata: 'immature' },
      { assetId: '29236461', metadata: 'immature' },
      { assetId: '33939641', metadata: 'adult' },
    ],
  },
  {
    code: 'osprey',
    name: {
      latin: 'Pandion haliaetus',
      localized: { en: 'Osprey', sk: 'Kršiak rybár' },
    },
    groupId: 108,
    imageAssets: [
      { assetId: '43425571', metadata: 'adult' },
      { assetId: '54168791', metadata: 'adult' },
      { assetId: '204972611', metadata: 'adult' },
      { assetId: '66023921', metadata: 'juvenile' },
      { assetId: '48440631', metadata: 'adult' },
    ],
  },
  {
    code: 'eutspa',
    name: {
      latin: 'Passer montanus',
      localized: { en: 'Eurasian Tree Sparrow', sk: 'Vrabec poľný' },
    },
    groupId: 2,
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
      localized: { en: 'House Sparrow', sk: 'Vrabec domový' },
    },
    groupId: 2,
    imageAssets: [
      { assetId: '51357991', metadata: 'breeding male' },
      { assetId: '69514291', metadata: 'female' },
      { assetId: '41624001', metadata: 'nonbreeding/immature' },
      { assetId: '93464491', metadata: 'breeding male' },
      { assetId: '161700291', metadata: 'juvenile' },
    ],
  },
];
