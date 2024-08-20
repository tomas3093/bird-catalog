import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'waders';

const data: GroupData = {
  name: { en: 'Waders', sk: 'Bahniaky' },
  species: [
    {
      name: {
        latin: 'Haematopus ostralegus',
        localized: { en: 'Eurasian Oystercatcher', sk: 'Lastúrničiar strakatý' },
      },
      imageAssets: [
        { assetId: '63311961', metadata: 'breeding adult' },
        { assetId: '255897231', metadata: 'nonbreeding/immature' },
        { assetId: '40628011', metadata: 'breeding adult' },
        { assetId: '30325011', metadata: 'juvenile' },
        { assetId: '42761111', metadata: 'nonbreeding/immature' },
      ],
    },
    {
      name: {
        latin: 'Recurvirostra avosetta',
        localized: { en: 'Pied Avocet', sk: 'Šabliarka modronohá' },
      },
      imageAssets: [
        { assetId: '43400121', metadata: 'adult' },
        { assetId: '41963221', metadata: 'adult' },
        { assetId: '42897171', metadata: 'immature' },
        { assetId: '41568871', metadata: 'adult' },
        { assetId: '41687171', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Himantopus himantopus',
        localized: { en: 'Black-winged Stilt', sk: 'Šišila bocianovitá' },
      },
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
      name: {
        latin: 'Charadrius dubius',
        localized: { en: 'Little Ringed Plover', sk: 'Kulík riečny' },
      },
      imageAssets: [
        { assetId: '66209651', metadata: 'breeding adult' },
        { assetId: '26854381', metadata: 'juvenile' },
        { assetId: '36105671', metadata: 'breeding adult' },
        { assetId: '39572321', metadata: 'nonbreeding adult' },
        { assetId: '41694351', metadata: 'nonbreeding adult' },
      ],
    },
    {
      name: {
        latin: 'Charadrius hiaticula',
        localized: { en: 'Common Ringed Plover', sk: 'Kulík piesočný' },
      },
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
      name: {
        latin: 'Pluvialis squatarola',
        localized: { en: 'Black-bellied Plover', sk: 'Kulík bledý' },
      },
      imageAssets: [
        { assetId: '37666581', metadata: 'breeding male' },
        { assetId: '189491151', metadata: 'nonbreeding adult' },
        { assetId: '265207521', metadata: 'juvenile' },
        { assetId: '98953291', metadata: 'breeding adult' },
        { assetId: '53298481', metadata: 'nonbreeding adult' },
      ],
    },
    {
      name: {
        latin: 'Pluvialis apricaria',
        localized: { en: 'European Golden-Plover', sk: 'Kulík zlatý' },
      },
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
      name: {
        latin: 'Vanellus vanellus',
        localized: { en: 'Northern Lapwing', sk: 'Cíbik chochlatý' },
      },
      imageAssets: [
        { assetId: '530705741', metadata: 'adult' },
        { assetId: '42410571', metadata: 'adult' },
        { assetId: '23897261', metadata: 'juvenile' },
        { assetId: '30164731', metadata: 'adult' },
        { assetId: '204637421', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Calidris pugnax',
        localized: { en: 'Ruff', sk: 'Bojovník bahenný' },
      },
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
      name: {
        latin: 'Calidris canutus',
        localized: {
          en: 'Red Knot',
          sk: 'Pobrežník hrdzavý',
        },
      },
      imageAssets: [
        { assetId: '27328091', metadata: 'breeding adult' },
        { assetId: '27364911', metadata: 'breeding adult' },
        { assetId: '81792681', metadata: 'nonbreeding/immature' },
        { assetId: '142336261', metadata: 'nonbreeding adult' },
        { assetId: '32756561', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Calidris alba',
        localized: {
          en: 'Sanderling',
          sk: 'Pobrežník belavý',
        },
      },
      imageAssets: [
        { assetId: '51358281', metadata: 'breeding adult' },
        { assetId: '37149291', metadata: 'nonbreeding adult' },
        { assetId: '34071821', metadata: 'juvenile' },
        { assetId: '56571291', metadata: 'nonbreeding adult' },
        { assetId: '43552541', metadata: 'breeding adult' },
      ],
    },
    {
      name: {
        latin: 'Arenaria interpres',
        localized: { en: 'Ruddy Turnstone', sk: 'Kamenár strakatý' },
      },
      imageAssets: [
        { assetId: '45254791', metadata: 'breeding adult' },
        { assetId: '142700721', metadata: 'nonbreeding adult' },
        { assetId: '207550971', metadata: 'nonbreeding/immature' },
        { assetId: '46349771', metadata: 'nonbreeding adult' },
        { assetId: '34424771', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Calidris alpina',
        localized: { en: 'Dunlin', sk: 'Pobrežník čiernozobý' },
      },
      imageAssets: [
        { assetId: '228228211', metadata: 'breeding adult' },
        { assetId: '187630691', metadata: 'nonbreeding adult' },
        { assetId: '43162701', metadata: 'breeding adult' },
        { assetId: '175017461', metadata: 'juvenile' },
        { assetId: '284967101', metadata: 'nonbreeding adult' },
      ],
    },
    {
      name: {
        latin: 'Calidris ferruginea',
        localized: { en: 'Curlew Sandpiper', sk: 'Pobrežník krivozobý' },
      },
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
      name: {
        latin: 'Calidris temminckii',
        localized: { en: "Temminck's Stint", sk: 'Pobrežník sivý' },
      },
      imageAssets: [
        { assetId: '206390961', metadata: 'breeding adult' },
        { assetId: '43518311', metadata: 'nonbreeding adult' },
        { assetId: '31007441', metadata: 'breeding adult' },
        { assetId: '40156571', metadata: 'juvenile' },
        { assetId: '215571651', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Calidris minuta',
        localized: { en: 'Little Stint', sk: 'Pobrežník malý' },
      },
      imageAssets: [
        { assetId: '22283191', metadata: 'breeding adult' },
        { assetId: '45267931', metadata: 'nonbreeding adult' },
        { assetId: '35236741', metadata: 'juvenile' },
        { assetId: '35191961', metadata: 'juvenile' },
        { assetId: '24641051', metadata: 'nonbreeding adult' },
      ],
    },
    {
      name: {
        latin: 'Tringa glareola',
        localized: { en: 'Wood Sandpiper', sk: 'Kalužiak močiarny' },
      },
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
      name: {
        latin: 'Tringa ochropus',
        localized: { en: 'Green Sandpiper', sk: 'Kalužiak perlavý' },
      },
      imageAssets: [
        { assetId: '22248421', metadata: 'unknown' },
        { assetId: '26776071', metadata: 'unknown' },
        { assetId: '36734071', metadata: 'unknown' },
        { assetId: '38804691', metadata: 'unknown' },
        { assetId: '37238441', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Actitis hypoleucos',
        localized: { en: 'Common Sandpiper', sk: 'Kalužiačik malý' },
      },
      imageAssets: [
        { assetId: '262646731', metadata: 'unknown' },
        { assetId: '37585061', metadata: 'immature' },
        { assetId: '45020271', metadata: 'immature' },
        { assetId: '42641391', metadata: 'immature' },
        { assetId: '44721591', metadata: 'breeding adult' },
      ],
    },
    {
      name: {
        latin: 'Tringa totanus',
        localized: { en: 'Common Redshank', sk: 'Kalužiak červenonohý' },
      },
      imageAssets: [
        { assetId: '62533451', metadata: 'breeding adult' },
        { assetId: '80492271', metadata: 'nonbreeding adult' },
        { assetId: '42944071', metadata: 'breeding adult' },
        { assetId: '42271731', metadata: 'breeding adult' },
        { assetId: '43813161', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Tringa erythropus',
        localized: { en: 'Spotted Redshank', sk: 'Kalužiak tmavý' },
      },
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
      name: {
        latin: 'Tringa nebularia',
        localized: { en: 'Common Greenshank', sk: 'Kalužiak sivý' },
      },
      imageAssets: [
        { assetId: '206668731', metadata: 'breeding adult' },
        { assetId: '42271721', metadata: 'nonbreeding adult' },
        { assetId: '20366231', metadata: 'juvenile' },
        { assetId: '38617621', metadata: 'breeding adult' },
        { assetId: '42546191', metadata: 'breeding adult' },
      ],
    },
    {
      name: {
        latin: 'Limosa limosa',
        localized: { en: 'Black-tailed Godwit', sk: 'Brehár čiernochvostý' },
      },
      imageAssets: [
        { assetId: '78879151', metadata: 'breeding adult' },
        { assetId: '20729951', metadata: 'nonbreeding adult' },
        { assetId: '33604941', metadata: 'nonbreeding adult' },
        { assetId: '113800971', metadata: 'nonbreeding adult' },
      ],
    },
    {
      name: {
        latin: 'Numenius arquata',
        localized: { en: 'Eurasian Curlew', sk: 'Hvizdák veľký' },
      },
      imageAssets: [
        { assetId: '71662071', metadata: 'unknown' },
        { assetId: '66351051', metadata: 'unknown' },
        { assetId: '116559281', metadata: 'unknown' },
        { assetId: '36169681', metadata: 'unknown' },
        { assetId: '73029851', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Numenius phaeopus',
        localized: { en: 'Whimbrel', sk: 'Hvizdák malý' },
      },
      imageAssets: [
        { assetId: '257786691', metadata: 'adult' },
        { assetId: '57500351', metadata: 'adult' },
        { assetId: '57500391', metadata: 'adult' },
        { assetId: '53143911', metadata: 'adult' },
        { assetId: '189991281', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Scolopax rusticola',
        localized: { en: 'Eurasian Woodcock', sk: 'Sluka hôrna' },
      },
      imageAssets: [
        { assetId: '42407851', metadata: 'adult' },
        { assetId: '41284871', metadata: 'adult' },
        { assetId: '40161731', metadata: 'adult' },
        { assetId: '150318091', metadata: 'adult' },
        { assetId: '214820831', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Gallinago media',
        localized: { en: 'Great Snipe', sk: 'Močiarnica tichá' },
      },
      imageAssets: [
        { assetId: '224197811', metadata: 'unknown' },
        { assetId: '36340131', metadata: 'unknown' },
        { assetId: '143023211', metadata: 'unknown' },
        { assetId: '66516261', metadata: 'unknown' },
        { assetId: '204749711', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Gallinago gallinago',
        localized: { en: 'Common Snipe', sk: 'Močiarnica mekotavá' },
      },
      imageAssets: [
        { assetId: '26854421', metadata: 'unknown' },
        { assetId: '34391561', metadata: 'unknown' },
        { assetId: '42943961', metadata: 'unknown' },
        { assetId: '41631161', metadata: 'unknown' },
        { assetId: '149191461', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Lymnocryptes minimus',
        localized: { en: 'Jack Snipe', sk: 'Močiarnička tichá' },
      },
      imageAssets: [
        { assetId: '43180191', metadata: 'unknown' },
        { assetId: '21282841', metadata: 'unknown' },
        { assetId: '25896271', metadata: 'unknown' },
        { assetId: '20162451', metadata: 'unknown' },
        { assetId: '423010331', metadata: 'unknown' },
      ],
    },
  ],
};

export const wadersGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const wadersSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
