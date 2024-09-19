import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'finches-crossbills';

const data: GroupData = {
  name: { en: 'Finches & crossbills', sk: 'Stehlíky a krivonosy' },
  subGroups: [
    {
      name: { en: 'Finches', sk: 'Stehlíky' },
      species: [
        {
          name: {
            latin: 'Fringilla coelebs',
            localized: {
              en: 'Common Chaffinch',
              sk: 'Pinka obyčajná',
            },
          },
          imageAssets: [
            { assetId: '433940431', metadata: 'breeding male' },
            { assetId: '489972921', metadata: 'nonbreeding male' },
            { assetId: '396114011', metadata: 'female' },
            { assetId: '391640581', metadata: 'female' },
            { assetId: '204246301', metadata: 'breeding male' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Fringilla montifringilla',
            localized: {
              en: 'Brambling',
              sk: 'Pinka severská (ikavec)',
            },
          },
          imageAssets: [
            { assetId: '601188641', metadata: 'breeding male' },
            { assetId: '73818361', metadata: 'female/immature male' },
            { assetId: '64161101', metadata: 'nonbreeding male' },
            { assetId: '204756121', metadata: 'juvenile' },
            { assetId: '140118421', metadata: 'female/immature male' },
          ],

          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Linaria cannabina',
            localized: {
              en: 'Common Linnet',
              sk: 'Stehlík konôpka',
            },
          },
          imageAssets: [
            { assetId: '146165661', metadata: 'adult male' },
            { assetId: '44051081', metadata: 'female/immature male' },
            { assetId: '41832381', metadata: 'female/immature male' },
            { assetId: '204396761', metadata: 'juvenile' },
            { assetId: '38623701', metadata: 'adult male' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Linaria flavirostris',
            localized: {
              en: 'Twite',
              sk: 'Stehlík horský',
            },
          },
          imageAssets: [
            { assetId: '40041141', metadata: 'unknown' },
            { assetId: '38219241', metadata: 'unknown' },
            { assetId: '42638131', metadata: 'unknown' },
            { assetId: '42177341', metadata: 'unknown' },
            { assetId: '46249831', metadata: 'unknown' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Acanthis flammea',
            localized: {
              en: 'Common Redpoll',
              sk: 'Stehlík čečetka',
            },
          },
          imageAssets: [
            { assetId: '301728521', metadata: 'adult male' },
            { assetId: '42508861', metadata: 'female/immature male' },
            { assetId: '23511481', metadata: 'adult male' },
            { assetId: '300128911', metadata: 'female/immature male' },
            { assetId: '64787461', metadata: 'adult male' },
            { assetId: '33428111', metadata: 'juvenile' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        // {
        //   name: {
        //     latin: 'Acanthis cabaret',
        //     localized: {
        //       en: 'Lesser Redpoll',
        //       sk: 'Stehlík hnedkavý',
        //     },
        //   },
        //   imageAssets: [
        //     {
        //       assetId: '32067841',
        //       metadata: 'female/immature male',
        //     },
        //     {
        //       assetId: '35107571',
        //       metadata: 'adult male',
        //     },
        //     {
        //       assetId: '20449061',
        //       metadata: 'female/immature male',
        //     },
        //     {
        //       assetId: '40911641',
        //       metadata: 'female/immature male',
        //     },
        //     {
        //       assetId: '40911641',
        //       metadata: 'female/immature male',
        //     },
        //   ],
        //   skAbundance: '',
        //   status: '',
        //   movementPattern: '',
        //   invasive: false,
        //   similarSpecies: [],
        // },
        // {
        //   name: {
        //     latin: 'Acanthis hornemanni',
        //     localized: {
        //       en: 'Arctic Redpoll',
        //       sk: 'Stehlík polárny',
        //     },
        //   },
        //   imageAssets: [
        //     {
        //       assetId: '302310521',
        //       metadata: 'adult male',
        //     },
        //     {
        //       assetId: '64885711',
        //       metadata: 'female/immature male',
        //     },
        //     {
        //       assetId: '287403361',
        //       metadata: 'female/immature male',
        //     },
        //     {
        //       assetId: '32246251',
        //       metadata: 'juvenile',
        //     },
        //     {
        //       assetId: '36751731',
        //       metadata: 'female/immature male',
        //     },
        //   ],
        //   skAbundance: '',
        //   status: '',
        //   movementPattern: '',
        //   invasive: false,
        //   similarSpecies: [],
        // },
        {
          name: {
            latin: 'Carduelis carduelis',
            localized: {
              en: 'European Goldfinch',
              sk: 'Stehlík obyčajný',
            },
          },
          imageAssets: [
            { assetId: '164628571', metadata: 'adult' },
            { assetId: '242433311', metadata: 'juvenile' },
            { assetId: '123755251', metadata: 'juvenile' },
            { assetId: '50764891', metadata: 'adult' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Chloris chloris',
            localized: {
              en: 'European Greenfinch',
              sk: 'Zelienka obyčajná',
            },
          },
          imageAssets: [
            { assetId: '284939641', metadata: 'adult male' },
            { assetId: '63883631', metadata: 'female' },
            { assetId: '151273101', metadata: 'adult male' },
            { assetId: '461341481', metadata: 'female' },
            { assetId: '492009681', metadata: 'juvenile' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Spinus spinus',
            localized: {
              en: 'Eurasian Siskin',
              sk: 'Stehlík čížik',
            },
          },
          imageAssets: [
            { assetId: '200527861', metadata: 'adult male' },
            { assetId: '43180561', metadata: 'female/immature male' },
            { assetId: '41098181', metadata: 'adult male' },
            { assetId: '42548521', metadata: 'adult male' },
            { assetId: '43088651', metadata: 'female/immature male' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Serinus serinus',
            localized: {
              en: 'European Serin',
              sk: 'Kanárik poľný',
            },
          },
          imageAssets: [
            { assetId: '63380841', metadata: 'adult male' },
            { assetId: '178701351', metadata: 'female/immature male' },
            { assetId: '158928991', metadata: 'juvenile' },
            { assetId: '204828961', metadata: 'female/immature male' },
            { assetId: '26089081', metadata: 'adult male' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Pyrrhula pyrrhula',
            localized: {
              en: 'Eurasian Bullfinch',
              sk: 'Hýľ obyčajný',
            },
          },
          imageAssets: [
            { assetId: '204247951', metadata: 'adult male' },
            { assetId: '204624701', metadata: 'adult female' },
            { assetId: '36672351', metadata: 'juvenile' },
            { assetId: '205458451', metadata: 'immature' },
            { assetId: '38587441', metadata: 'adult male' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Pinicola enucleator',
            localized: {
              en: 'Pine Grosbeak',
              sk: 'Smrečiar krivonosí',
            },
          },
          imageAssets: [
            { assetId: '64887111', metadata: 'adult male' },
            { assetId: '83937401', metadata: 'female' },
            { assetId: '64887451', metadata: 'immature male' },
            { assetId: '120277181', metadata: 'adult male' },
            { assetId: '64884611', metadata: 'female' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Coccothraustes coccothraustes',
            localized: {
              en: 'Hawfinch',
              sk: 'Glezg obyčajný',
            },
          },
          imageAssets: [
            { assetId: '222917101', metadata: 'adult' },
            { assetId: '149880181', metadata: 'adult' },
            { assetId: '204972791', metadata: 'juvenile' },
            { assetId: '204590481', metadata: 'adult' },
            { assetId: '44660081', metadata: 'adult' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Carpodacus erythrinus',
            localized: {
              en: 'Common Rosefinch',
              sk: 'Červenák karmínový',
            },
          },
          imageAssets: [
            { assetId: '165879411', metadata: 'adult male' },
            { assetId: '40460061', metadata: 'female/immature male' },
            { assetId: '39576471', metadata: 'adult male' },
            { assetId: '30028971', metadata: 'adult male' },
            { assetId: '38140911', metadata: 'unknown' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
      ],
    },
    {
      name: { en: 'Crossbills', sk: 'Krivonosy' },
      species: [
        {
          name: {
            latin: 'Loxia curvirostra',
            localized: {
              en: 'Common Crossbill',
              sk: 'Krivonos smrekový',
            },
          },
          imageAssets: [
            { assetId: '290896961', metadata: 'adult male' },
            { assetId: '27801301', metadata: 'female' },
            { assetId: '149620141', metadata: 'adult male' },
            { assetId: '175918801', metadata: 'juvenile' },
            { assetId: '93233821', metadata: 'immature male' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
        {
          name: {
            latin: 'Loxia leucoptera',
            localized: {
              en: 'Two-barred Crossbill',
              sk: 'Krivonos bielokrídly',
            },
          },
          imageAssets: [
            { assetId: '138938871', metadata: 'adult male' },
            { assetId: '27751531', metadata: 'female' },
            { assetId: '304838941', metadata: 'immature male' },
            { assetId: '42507561', metadata: 'juvenile' },
            { assetId: '217479941', metadata: 'male and female' },
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: [],
        },
      ],
    },
  ],
};

export const finchesCrossbillsGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const finchesCrossbillsSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
