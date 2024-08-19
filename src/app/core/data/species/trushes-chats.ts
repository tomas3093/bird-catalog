import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'trushes-chats';

const data: GroupData = {
  name: { en: 'Trushes & chats', sk: 'Drozdy, pŕhľaviare, et al.' },
  subGroups: [
    {
      name: { en: 'Trushes', sk: 'Trushes' },
      species: [
        {
          name: {
            latin: 'Erithacus rubecula',
            localized: {
              en: 'European Robin',
              sk: 'Červienka obyčajná',
            },
          },
          imageAssets: [
            { assetId: '34750391', metadata: 'adult' },
            { assetId: '34566761', metadata: 'adult' },
            { assetId: '23292611', metadata: 'adult' },
            { assetId: '40474321', metadata: 'juvenile' },
            { assetId: '41806271', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Luscinia megarhynchos',
            localized: {
              en: 'Common Nightingale',
              sk: 'Slávik obyčajný',
            },
          },
          imageAssets: [
            { assetId: '52391361', metadata: 'unknown' },
            { assetId: '27831751', metadata: 'unknown' },
            { assetId: '31214251', metadata: 'unknown' },
            { assetId: '22080141', metadata: 'unknown' },
            { assetId: '22080141', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Luscinia luscinia',
            localized: {
              en: 'Thrush Nightingale',
              sk: 'Slávik veľký',
            },
          },
          imageAssets: [
            { assetId: '43494021', metadata: 'unknown' },
            { assetId: '43163691', metadata: 'unknown' },
            { assetId: '43163691', metadata: 'unknown' },
            { assetId: '44290071', metadata: 'unknown' },
            { assetId: '51631791', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Luscinia svecica',
            localized: {
              en: 'Bluethroat',
              sk: 'Slávik modrák',
            },
          },
          imageAssets: [
            { assetId: '63968231', metadata: 'adult male' },
            { assetId: '83182471', metadata: 'female' },
            { assetId: '117697191', metadata: 'nonbreeding male' },
            { assetId: '127574371', metadata: 'immature' },
            { assetId: '243477041', metadata: 'juvenile' },
            { assetId: '175420111', metadata: 'female' },
          ],
        },
        {
          name: {
            latin: 'Phoenicurus phoenicurus',
            localized: {
              en: 'Common Redstart',
              sk: 'Žltochvost hôrny',
            },
          },
          imageAssets: [
            { assetId: '36928311', metadata: 'adult male' },
            { assetId: '43067051', metadata: 'female' },
            { assetId: '32005091', metadata: 'juvenile' },
            { assetId: '34050681', metadata: 'female' },
            { assetId: '191677351', metadata: 'immature male' },
          ],
        },
        {
          name: {
            latin: 'Phoenicurus ochruros',
            localized: {
              en: 'Black Redstart',
              sk: 'Žltochvost domový',
            },
          },
          imageAssets: [
            { assetId: '23443721', metadata: 'adult male' },
            { assetId: '29327191', metadata: 'female' },
            { assetId: '29255111', metadata: 'adult male' },
            { assetId: '29255091', metadata: 'adult male' },
          ],
        },
        {
          name: {
            latin: 'Saxicola rubetra',
            localized: {
              en: 'Whinchat',
              sk: 'Pŕhľaviar červenkastý',
            },
          },
          imageAssets: [
            { assetId: '42408031', metadata: 'adult male' },
            { assetId: '33619961', metadata: 'female/immature male' },
            { assetId: '34047751', metadata: 'adult male' },
            { assetId: '42948051', metadata: 'immature male' },
            { assetId: '42173341', metadata: 'female/immature male' },
          ],
        },
        {
          name: {
            latin: 'Saxicola rubicola',
            localized: {
              en: 'European Stonechat',
              sk: 'Pŕhľaviar čiernohlavý',
            },
          },
          imageAssets: [
            { assetId: '289140911', metadata: 'adult male' },
            { assetId: '45082321', metadata: 'female/immature male' },
            { assetId: '35081891', metadata: 'adult male' },
            { assetId: '26049221', metadata: 'female/immature male' },
            { assetId: '26234101', metadata: 'female/immature male' },
          ],
        },
        {
          name: {
            latin: 'Turdus philomelos',
            localized: {
              en: 'Song Thrush',
              sk: 'Drozd plavý',
            },
          },
          imageAssets: [
            { assetId: '234235711', metadata: 'unknown' },
            { assetId: '25042711', metadata: 'unknown' },
            { assetId: '86950101', metadata: 'juvenile' },
            { assetId: '30348021', metadata: 'unknown' },
            { assetId: '43622421', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Turdus iliacus',
            localized: {
              en: 'Redwing',
              sk: 'Drozd červenkavý',
            },
          },
          imageAssets: [
            { assetId: '20588621', metadata: 'adult' },
            { assetId: '45376181', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Turdus viscivorus',
            localized: {
              en: 'Mistle Thrush',
              sk: 'Drozd trskotavý',
            },
          },
          imageAssets: [
            { assetId: '615398729', metadata: 'adult' },
            { assetId: '44504961', metadata: 'adult' },
            { assetId: '44390941', metadata: 'adult' },
            { assetId: '43191761', metadata: 'juvenile' },
            { assetId: '25673551', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Turdus pilaris',
            localized: {
              en: 'Fieldfare',
              sk: 'Drozd čvíkota',
            },
          },
          imageAssets: [
            { assetId: '204244051', metadata: 'unknown' },
            { assetId: '38733931', metadata: 'unknown' },
            { assetId: '38733931', metadata: 'unknown' },
            { assetId: '204844951', metadata: 'juvenile' },
            { assetId: '204798931', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Turdus merula',
            localized: {
              en: 'Eurasian Blackbird',
              sk: 'Drozd čierny',
            },
          },
          imageAssets: [
            { assetId: '44422621', metadata: 'adult male' },
            { assetId: '35461931', metadata: 'female' },
            { assetId: '384737571', metadata: 'immature male' },
            { assetId: '360353701', metadata: 'juvenile' },
            { assetId: '41853641', metadata: 'adult male' },
          ],
        },
        {
          name: {
            latin: 'Turdus torquatus',
            localized: {
              en: 'Ring Ouzel',
              sk: 'Drozd kolohrivec',
            },
          },
          imageAssets: [
            { assetId: '40415251', metadata: 'adult male' },
            { assetId: '205691971', metadata: 'female' },
            { assetId: '66129291', metadata: 'juvenile' },
            { assetId: '43327081', metadata: 'unknown' },
          ],
        },
      ],
    },
    {
      name: { en: 'Wheatears', sk: 'Skaliariky' },
      species: [
        {
          name: {
            latin: 'Oenanthe oenanthe',
            localized: {
              en: 'Northern Wheatear',
              sk: 'Skaliarik sivý',
            },
          },
          imageAssets: [
            { assetId: '204639371', metadata: 'breeding male' },
            { assetId: '171253901', metadata: 'breeding female' },
            { assetId: '368685751', metadata: 'immature' },
            { assetId: '75310661', metadata: 'juvenile' },
            { assetId: '206193561', metadata: 'breeding male' },
            { assetId: '613680874', metadata: 'nonbreeding male' },
          ],
        },
        {
          name: {
            latin: 'Oenanthe isabellina',
            localized: {
              en: 'Isabelline Wheatear',
              sk: 'Skaliarik plavý',
            },
          },
          imageAssets: [
            { assetId: '296366931', metadata: 'unknown' },
            { assetId: '47953031', metadata: 'unknown' },
            { assetId: '118128141', metadata: 'unknown' },
            { assetId: '81833561', metadata: 'unknown' },
            { assetId: '97044071', metadata: 'unknown' },
          ],
        },
      ],
    },
    {
      name: { en: 'Prinia', sk: 'Cistovník' },
      species: [
        {
          name: {
            latin: 'Cisticola juncidis',
            localized: {
              en: 'Zitting Cisticola',
              sk: 'Cistovník ryšavý',
            },
          },
          imageAssets: [
            { assetId: '114810351', metadata: 'unknown' },
            { assetId: '49599881', metadata: 'unknown' },
            { assetId: '44677261', metadata: 'unknown' },
            { assetId: '40232981', metadata: 'unknown' },
            { assetId: '47738541', metadata: 'unknown' },
          ],
        },
      ],
    },
  ],
};

export const trushesChatsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const trushesChatsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
