import { DataItem } from '../services/storage.model';

export const species: DataItem[] = [
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
  {
    code: 'euroys1',
    name: {
      latin: 'Haematopus ostralegus',
      localized: { en: 'Eurasian Oystercatcher', sk: 'Lastúrničiar strakatý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '63311961', metadata: 'breeding adult' },
      { assetId: '255897231', metadata: 'nonbreeding/immature' },
      { assetId: '40628011', metadata: 'breeding adult' },
      { assetId: '30325011', metadata: 'juvenile' },
      { assetId: '42761111', metadata: 'nonbreeding/immature' },
    ],
  },
  {
    code: 'pieavo1',
    name: {
      latin: 'Recurvirostra avosetta',
      localized: { en: 'Pied Avocet', sk: 'Šabliarka modronohá' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '43400121', metadata: 'adult' },
      { assetId: '41963221', metadata: 'adult' },
      { assetId: '42897171', metadata: 'immature' },
      { assetId: '41568871', metadata: 'adult' },
      { assetId: '41687171', metadata: 'unknown' },
    ],
  },
  {
    code: 'bkwsti',
    name: {
      latin: 'Himantopus himantopus',
      localized: { en: 'Black-winged Stilt', sk: 'Šišila bocianovitá' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '23442331', metadata: 'adult' },
      { assetId: '31824791', metadata: 'adult' },
      { assetId: '23442241', metadata: 'adult' },
      { assetId: '33605331', metadata: 'juvenile' },
      { assetId: '40135231', metadata: 'juvenile' },
      { assetId: '177213741', metadata: 'unknown' },
    ],
  },
  {
    code: 'lirplo',
    name: {
      latin: 'Charadrius dubius',
      localized: { en: 'Little Ringed Plover', sk: 'Kulík riečny' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '66209651', metadata: 'breeding adult' },
      { assetId: '26854381', metadata: 'juvenile' },
      { assetId: '36105671', metadata: 'breeding adult' },
      { assetId: '39572321', metadata: 'nonbreeding adult' },
      { assetId: '41694351', metadata: 'nonbreeding adult' },
    ],
  },
  {
    code: 'corplo',
    name: {
      latin: 'Charadrius hiaticula',
      localized: { en: 'Common Ringed Plover', sk: 'Kulík piesočný' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '32837031', metadata: 'breeding adult' },
      { assetId: '33605431', metadata: 'nonbreeding adult' },
      { assetId: '34742181', metadata: 'juvenile' },
      { assetId: '32833931', metadata: 'unknown' },
      { assetId: '43162771', metadata: 'breeding adult' },
      { assetId: '39953081', metadata: 'nonbreeding/immature' },
    ],
  },
  {
    code: 'bkbplo',
    name: {
      latin: 'Pluvialis squatarola',
      localized: { en: 'Black-bellied Plover', sk: 'Kulík bledý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '37666581', metadata: 'breeding male' },
      { assetId: '189491151', metadata: 'nonbreeding adult' },
      { assetId: '265207521', metadata: 'juvenile' },
      { assetId: '98953291', metadata: 'breeding adult' },
      { assetId: '53298481', metadata: 'nonbreeding adult' },
    ],
  },
  {
    code: 'eugplo',
    name: {
      latin: 'Pluvialis apricaria',
      localized: { en: 'European Golden-Plover', sk: 'Kulík zlatý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '42945491', metadata: 'breeding male' },
      { assetId: '42941361', metadata: 'breeding female' },
      { assetId: '34904631', metadata: 'nonbreeding/immature' },
      { assetId: '36424111', metadata: 'nonbreeding/immature' },
      { assetId: '44390891', metadata: 'nonbreeding/immature' },
      { assetId: '26469891', metadata: 'nonbreeding/immature' },
    ],
  },
  {
    code: 'norlap',
    name: {
      latin: 'Vanellus vanellus',
      localized: { en: 'Northern Lapwing', sk: 'Cíbik chochlatý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '530705741', metadata: 'adult' },
      { assetId: '42410571', metadata: 'adult' },
      { assetId: '23897261', metadata: 'juvenile' },
      { assetId: '30164731', metadata: 'adult' },
      { assetId: '204637421', metadata: 'unknown' },
    ],
  },
  {
    code: 'ruff',
    name: {
      latin: 'Calidris pugnax',
      localized: { en: 'Ruff', sk: 'Bojovník bahenný' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '98650201', metadata: 'breeding male' },
      { assetId: '42397601', metadata: 'female' },
      { assetId: '33916791', metadata: 'juvenile' },
      { assetId: '33605521', metadata: 'female' },
      { assetId: '204236241', metadata: 'nonbreeding male' },
      { assetId: '42570831', metadata: 'unknown' },
    ],
  },
  {
    code: 'rudtur',
    name: {
      latin: 'Arenaria interpres',
      localized: { en: 'Ruddy Turnstone', sk: 'Kamenár strakatý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '45254791', metadata: 'breeding adult' },
      { assetId: '142700721', metadata: 'nonbreeding adult' },
      { assetId: '207550971', metadata: 'nonbreeding/immature' },
      { assetId: '46349771', metadata: 'nonbreeding adult' },
      { assetId: '34424771', metadata: 'juvenile' },
    ],
  },
  {
    code: 'dunlin',
    name: {
      latin: 'Calidris alpina',
      localized: { en: 'Dunlin', sk: 'Pobrežník čiernozobý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '228228211', metadata: 'breeding adult' },
      { assetId: '187630691', metadata: 'nonbreeding adult' },
      { assetId: '43162701', metadata: 'breeding adult' },
      { assetId: '175017461', metadata: 'juvenile' },
      { assetId: '284967101', metadata: 'nonbreeding adult' },
    ],
  },
  {
    code: 'cursan',
    name: {
      latin: 'Calidris ferruginea',
      localized: { en: 'Curlew Sandpiper', sk: 'Pobrežník krivozobý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '78879241', metadata: 'breeding adult' },
      { assetId: '33605661', metadata: 'nonbreeding adult' },
      { assetId: '263585771', metadata: 'juvenile' },
      { assetId: '127791711', metadata: 'nonbreeding adult' },
      { assetId: '148978691', metadata: 'molting adult' },
      { assetId: '35476851', metadata: 'unknown' },
    ],
  },
  {
    code: 'temsti',
    name: {
      latin: 'Calidris temminckii',
      localized: { en: "Temminck's Stint", sk: 'Pobrežník sivý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '206390961', metadata: 'breeding adult' },
      { assetId: '43518311', metadata: 'nonbreeding adult' },
      { assetId: '31007441', metadata: 'breeding adult' },
      { assetId: '40156571', metadata: 'juvenile' },
      { assetId: '215571651', metadata: 'unknown' },
    ],
  },
  {
    code: 'litsti',
    name: {
      latin: 'Calidris minuta',
      localized: { en: 'Little Stint', sk: 'Pobrežník malý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '22283191', metadata: 'breeding adult' },
      { assetId: '45267931', metadata: 'nonbreeding adult' },
      { assetId: '35236741', metadata: 'juvenile' },
      { assetId: '35191961', metadata: 'juvenile' },
      { assetId: '24641051', metadata: 'nonbreeding adult' },
    ],
  },
  {
    code: 'woosan',
    name: {
      latin: 'Tringa glareola',
      localized: { en: 'Wood Sandpiper', sk: 'Kalužiak močiarny' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '206669001', metadata: 'breeding adult' },
      { assetId: '39572411', metadata: 'nonbreeding adult' },
      { assetId: '41781891', metadata: 'nonbreeding adult' },
      { assetId: '40139841', metadata: 'nonbreeding adult' },
      { assetId: '42944021', metadata: 'breeding adult' },
      { assetId: '37295351', metadata: 'unknown' },
    ],
  },
  {
    code: 'grnsan',
    name: {
      latin: 'Tringa ochropus',
      localized: { en: 'Green Sandpiper', sk: 'Kalužiak perlavý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '22248421', metadata: 'unknown' },
      { assetId: '26776071', metadata: 'unknown' },
      { assetId: '36734071', metadata: 'unknown' },
      { assetId: '38804691', metadata: 'unknown' },
      { assetId: '37238441', metadata: 'unknown' },
    ],
  },
  {
    code: 'comsan',
    name: {
      latin: 'Actitis hypoleucos',
      localized: { en: 'Common Sandpiper', sk: 'Kalužiačik malý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '35637201', metadata: 'nonbreeding adult' },
      { assetId: '37585061', metadata: 'immature' },
      { assetId: '45020271', metadata: 'immature' },
      { assetId: '42641391', metadata: 'immature' },
      { assetId: '44721591', metadata: 'breeding adult' },
    ],
  },
  {
    code: 'comred1',
    name: {
      latin: 'Tringa totanus',
      localized: { en: 'Common Redshank', sk: 'Kalužiak červenonohý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '62533451', metadata: 'breeding adult' },
      { assetId: '80492271', metadata: 'nonbreeding adult' },
      { assetId: '42944071', metadata: 'breeding adult' },
      { assetId: '42271731', metadata: 'breeding adult' },
      { assetId: '43813161', metadata: 'juvenile' },
    ],
  },
  {
    code: 'spored',
    name: {
      latin: 'Tringa erythropus',
      localized: { en: 'Spotted Redshank', sk: 'Kalužiak tmavý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '55482321', metadata: 'breeding adult' },
      { assetId: '85790011', metadata: 'nonbreeding adult' },
      { assetId: '33231011', metadata: 'juvenile' },
      { assetId: '28183151', metadata: 'breeding adult' },
      { assetId: '25330701', metadata: 'nonbreeding adult' },
      { assetId: '205953581', metadata: 'unknown' },
    ],
  },
  {
    code: 'comgre',
    name: {
      latin: 'Tringa nebularia',
      localized: { en: 'Common Greenshank', sk: 'Kalužiak sivý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '206668731', metadata: 'breeding adult' },
      { assetId: '42271721', metadata: 'nonbreeding adult' },
      { assetId: '20366231', metadata: 'juvenile' },
      { assetId: '38617621', metadata: 'breeding adult' },
      { assetId: '42546191', metadata: 'breeding adult' },
    ],
  },
  {
    code: 'bktgod',
    name: {
      latin: 'Limosa limosa',
      localized: { en: 'Black-tailed Godwit', sk: 'Brehár čiernochvostý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '78879151', metadata: 'breeding adult' },
      { assetId: '20729951', metadata: 'nonbreeding adult' },
      { assetId: '33604941', metadata: 'nonbreeding adult' },
      { assetId: '113800971', metadata: 'nonbreeding adult' },
    ],
  },
  {
    code: 'eurcur',
    name: {
      latin: 'Numenius arquata',
      localized: { en: 'Eurasian Curlew', sk: 'Hvizdák veľký' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '71662071', metadata: 'unknown' },
      { assetId: '66351051', metadata: 'unknown' },
      { assetId: '116559281', metadata: 'unknown' },
      { assetId: '36169681', metadata: 'unknown' },
      { assetId: '73029851', metadata: 'unknown' },
    ],
  },
  {
    code: 'whimbr',
    name: {
      latin: 'Numenius phaeopus',
      localized: { en: 'Whimbrel', sk: 'Hvizdák malý' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '257786691', metadata: 'adult' },
      { assetId: '57500351', metadata: 'adult' },
      { assetId: '57500391', metadata: 'adult' },
      { assetId: '53143911', metadata: 'adult' },
      { assetId: '189991281', metadata: 'adult' },
    ],
  },
  {
    code: 'eurwoo',
    name: {
      latin: 'Scolopax rusticola',
      localized: { en: 'Eurasian Woodcock', sk: 'Sluka hôrna' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '42407851', metadata: 'adult' },
      { assetId: '41284871', metadata: 'adult' },
      { assetId: '40161731', metadata: 'adult' },
      { assetId: '150318091', metadata: 'adult' },
      { assetId: '214820831', metadata: 'adult' },
    ],
  },
  {
    code: 'gresni1',
    name: {
      latin: 'Gallinago media',
      localized: { en: 'Great Snipe', sk: 'Močiarnica tichá' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '224197811', metadata: 'unknown' },
      { assetId: '36340131', metadata: 'unknown' },
      { assetId: '143023211', metadata: 'unknown' },
      { assetId: '66516261', metadata: 'unknown' },
      { assetId: '204749711', metadata: 'unknown' },
    ],
  },
  {
    code: 'comsni',
    name: {
      latin: 'Gallinago gallinago',
      localized: { en: 'Common Snipe', sk: 'Močiarnica mekotavá' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '26854421', metadata: 'unknown' },
      { assetId: '34391561', metadata: 'unknown' },
      { assetId: '42943961', metadata: 'unknown' },
      { assetId: '41631161', metadata: 'unknown' },
      { assetId: '149191461', metadata: 'unknown' },
    ],
  },
  {
    code: 'jacsni',
    name: {
      latin: 'Lymnocryptes minimus',
      localized: { en: 'Jack Snipe', sk: 'Močiarnička tichá' },
    },
    groupId: 3,
    imageAssets: [
      { assetId: '43180191', metadata: 'unknown' },
      { assetId: '21282841', metadata: 'unknown' },
      { assetId: '25896271', metadata: 'unknown' },
      { assetId: '20162451', metadata: 'unknown' },
      { assetId: '423010331', metadata: 'unknown' },
    ],
  },
  {
    code: 'litter1',
    name: {
      latin: 'Sternula albifrons',
      localized: { en: 'Little Tern', sk: 'Rybár malý' },
    },
    groupId: 401,
    imageAssets: [
      { assetId: '53146761', metadata: 'breeding adult' },
      { assetId: '51622991', metadata: 'breeding adult' },
      { assetId: '43154401', metadata: 'immature' },
      { assetId: '47503851', metadata: 'juvenile' },
      { assetId: '78728271', metadata: 'immature' },
      { assetId: '122819371', metadata: 'nonbreeding adult' },
    ],
  },
  {
    code: 'comter',
    name: {
      latin: 'Sterna hirundo',
      localized: { en: 'Common Tern', sk: 'Rybár riečny' },
    },
    groupId: 401,
    imageAssets: [
      { assetId: '170212981', metadata: 'breeding adult' },
      { assetId: '168688591', metadata: 'breeding adult' },
      { assetId: '67964021', metadata: 'nonbreeding adult' },
      { assetId: '69995361', metadata: 'immature' },
      { assetId: '109125641', metadata: 'juvenile' },
      { assetId: '110663521', metadata: 'immature' },
    ],
  },
  {
    code: 'caster1',
    name: {
      latin: 'Hydroprogne caspia',
      localized: { en: 'Caspian Tern', sk: 'Čegrava veľkozobá' },
    },
    groupId: 401,
    imageAssets: [
      { assetId: '55539951', metadata: 'breeding adult' },
      { assetId: '34860421', metadata: 'breeding adult' },
      { assetId: '117794291', metadata: 'nonbreeding adult' },
      { assetId: '263223581', metadata: 'juvenile' },
      { assetId: '66193821', metadata: 'nonbreeding adult' },
    ],
  },
  {
    code: 'blkter',
    name: {
      latin: 'Chlidonias niger',
      localized: { en: 'Black Tern', sk: 'Čorík čierny' },
    },
    groupId: 402,
    imageAssets: [
      { assetId: '192237331', metadata: 'breeding adult' },
      { assetId: '223812461', metadata: 'nonbreeding adult' },
      { assetId: '273565651', metadata: 'nonbreeding adult' },
      { assetId: '64282521', metadata: 'molting adult' },
      { assetId: '174336261', metadata: 'juvenile' },
    ],
  },
  {
    code: 'whwter',
    name: {
      latin: 'Chlidonias leucopterus',
      localized: { en: 'White-winged Tern', sk: 'Čorík bielokrídly' },
    },
    groupId: 402,
    imageAssets: [
      { assetId: '30334121', metadata: 'breeding adult' },
      { assetId: '35856441', metadata: 'nonbreeding adult' },
      { assetId: '33605791', metadata: 'immature' },
      { assetId: '45876991', metadata: 'nonbreeding/immature' },
    ],
  },
  {
    code: 'whiter2',
    name: {
      latin: 'Chlidonias hybrida',
      localized: { en: 'Whiskered Tern', sk: 'Čorík bahenný' },
    },
    groupId: 402,
    imageAssets: [
      { assetId: '30334171', metadata: 'breeding adult' },
      { assetId: '45882531', metadata: 'nonbreeding adult' },
      { assetId: '45168521', metadata: 'breeding adult' },
      { assetId: '67922761', metadata: 'juvenile' },
      { assetId: '42047811', metadata: 'nonbreeding adult' },
    ],
  },
  {
    code: 'bkhgul',
    name: {
      latin: 'Chroicocephalus ridibundus',
      localized: { en: 'Black-headed Gull', sk: 'Čajka smejivá' },
    },
    groupId: 5,
    imageAssets: [
      { assetId: '204656501', metadata: 'breeding adult' },
      { assetId: '43163081', metadata: 'breeding adult' },
      { assetId: '43893491', metadata: 'nonbreeding adult' },
      { assetId: '84605841', metadata: 'immature' },
      { assetId: '65518901', metadata: 'juvenile' },
    ],
  },
];
