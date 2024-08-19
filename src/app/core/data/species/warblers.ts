import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'warblers';

const data: GroupData = {
  name: { en: 'Warblers', sk: 'Warblers' },
  subGroups: [
    {
      name: { en: 'Sylvia warblers', sk: 'Penice' },
      species: [
        {
          name: {
            latin: 'Curruca nisoria',
            localized: {
              en: 'Barred Warbler',
              sk: 'Penica jarabá',
            },
          },
          imageAssets: [
            { assetId: '95443881', metadata: 'adult' },
            { assetId: '20652651', metadata: 'immature' },
            { assetId: '26429511', metadata: 'adult' },
            { assetId: '37577161', metadata: 'immature' },
            { assetId: '46118631', metadata: 'juvenile' },
          ],
        },
        {
          name: {
            latin: 'Sylvia borin',
            localized: {
              en: 'Garden Warbler',
              sk: 'Penica slávikovitá',
            },
          },
          imageAssets: [
            { assetId: '66341291', metadata: 'unknown' },
            { assetId: '35950721', metadata: 'unknown' },
            { assetId: '205953511', metadata: 'unknown' },
            { assetId: '231728231', metadata: 'unknown' },
            { assetId: '175624681', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Sylvia atricapilla',
            localized: {
              en: 'Eurasian Blackcap',
              sk: 'Penica čiernohlavá',
            },
          },
          imageAssets: [
            { assetId: '211672961', metadata: 'adult male' },
            { assetId: '151272271', metadata: 'female' },
            { assetId: '213349901', metadata: 'adult male' },
            { assetId: '25575161', metadata: 'female' },
            { assetId: '22195031', metadata: 'adult male' },
          ],
        },
        {
          name: {
            latin: 'Sylvia borin',
            localized: {
              en: 'Garden Warbler',
              sk: 'Penica slávikovitá',
            },
          },
          imageAssets: [
            { assetId: '66341291', metadata: 'unknown' },
            { assetId: '35950721', metadata: 'unknown' },
            { assetId: '205953511', metadata: 'unknown' },
            { assetId: '231728231', metadata: 'unknown' },
            { assetId: '175624681', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Curruca communis',
            localized: {
              en: 'Common Whitethroat',
              sk: 'Penica obyčajná',
            },
          },
          imageAssets: [
            { assetId: '96634411', metadata: 'adult male' },
            { assetId: '204444421', metadata: 'female/immature male' },
            { assetId: '226191291', metadata: 'adult male' },
            { assetId: '62064071', metadata: 'juvenile' },
            { assetId: '127820141', metadata: 'female/immature male' },
          ],
        },
        {
          name: {
            latin: 'Curruca curruca',
            localized: {
              en: 'Lesser Whitethroat',
              sk: 'Penica popolavá',
            },
          },
          imageAssets: [
            { assetId: '212053331', metadata: 'unknown' },
            { assetId: '21930331', metadata: 'unknown' },
            { assetId: '43492301', metadata: 'unknown' },
            { assetId: '234516201', metadata: 'juvenile' },
            { assetId: '204659441', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Curruca cantillans',
            localized: {
              en: 'Eastern Subalpine Warbler',
              sk: 'Penica fúzatá',
            },
          },
          imageAssets: [
            { assetId: '26859401', metadata: 'adult male' },
            { assetId: '212048251', metadata: 'female' },
            { assetId: '336573651', metadata: 'adult male' },
            { assetId: '212026191', metadata: 'female' },
            { assetId: '52421931', metadata: 'adult male' },
          ],
        },
      ],
    },
    {
      name: { en: 'Acrocephalus warblers', sk: 'Trsteniariky' },
      species: [
        {
          name: {
            latin: 'Acrocephalus schoenobaenus',
            localized: {
              en: 'Sedge Warbler',
              sk: 'Trsteniarik malý',
            },
          },
          imageAssets: [
            { assetId: '23750451', metadata: 'unknown' },
            { assetId: '25644141', metadata: 'unknown' },
            { assetId: '42272751', metadata: 'unknown' },
            { assetId: '34693771', metadata: 'unknown' },
            { assetId: '43163671', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Acrocephalus paludicola',
            localized: {
              en: 'Aquatic Warbler',
              sk: 'Trsteniarik vodný',
            },
          },
          imageAssets: [
            { assetId: '101298471', metadata: 'unknown' },
            { assetId: '42722231', metadata: 'unknown' },
            { assetId: '171618941', metadata: 'unknown' },
            { assetId: '33288461', metadata: 'unknown' },
            { assetId: '20991571', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Acrocephalus melanopogon',
            localized: {
              en: 'Moustached Warbler',
              sk: 'Trsteniarik tamariškový',
            },
          },
          imageAssets: [
            { assetId: '204572551', metadata: 'unknown' },
            { assetId: '197140371', metadata: 'unknown' },
            { assetId: '24349891', metadata: 'unknown' },
            { assetId: '40963211', metadata: 'unknown' },
            { assetId: '42536561', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Acrocephalus scirpaceus',
            localized: {
              en: 'Common Reed Warbler',
              sk: 'Trsteniarik bahenný',
            },
          },
          imageAssets: [
            { assetId: '154989101', metadata: 'unknown' },
            { assetId: '31190561', metadata: 'unknown' },
            { assetId: '84731171', metadata: 'unknown' },
            { assetId: '31292861', metadata: 'unknown' },
            { assetId: '37933731', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Acrocephalus palustris',
            localized: {
              en: 'Marsh Warbler',
              sk: 'Trsteniarik obyčajný',
            },
          },
          imageAssets: [
            { assetId: '344097731', metadata: 'unknown' },
            { assetId: '23633511', metadata: 'unknown' },
            { assetId: '31781631', metadata: 'unknown' },
            { assetId: '36815331', metadata: 'unknown' },
            { assetId: '36815331', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Acrocephalus arundinaceus',
            localized: {
              en: 'Great Reed Warbler',
              sk: 'Trsteniarik veľký',
            },
          },
          imageAssets: [
            { assetId: '42407361', metadata: 'unknown' },
            { assetId: '43367891', metadata: 'unknown' },
            { assetId: '28714011', metadata: 'unknown' },
            { assetId: '156800421', metadata: 'unknown' },
            { assetId: '156800421', metadata: 'unknown' },
          ],
        },
      ],
    },
    {
      name: { en: 'Locustella warblers', sk: 'Svrčiaky' },
      species: [
        {
          name: {
            latin: 'Locustella naevia',
            localized: {
              en: 'Common Grasshopper Warbler',
              sk: 'Svrčiak zelenkavý',
            },
          },
          imageAssets: [
            { assetId: '226725471', metadata: 'unknown' },
            { assetId: '36478091', metadata: 'unknown' },
            { assetId: '44516501', metadata: 'unknown' },
            { assetId: '24158511', metadata: 'unknown' },
            { assetId: '205215551', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Locustella fluviatilis',
            localized: {
              en: 'River Warbler',
              sk: 'Svrčiak riečny',
            },
          },
          imageAssets: [
            { assetId: '107180951', metadata: 'unknown' },
            { assetId: '63597581', metadata: 'unknown' },
            { assetId: '143337191', metadata: 'unknown' },
            { assetId: '67535821', metadata: 'unknown' },
            { assetId: '29059521', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Locustella luscinioides',
            localized: {
              en: "Savi's Warbler",
              sk: 'Svrčiak slávikovitý',
            },
          },
          imageAssets: [
            { assetId: '172916321', metadata: 'unknown' },
            { assetId: '221138481', metadata: 'unknown' },
            { assetId: '90116521', metadata: 'unknown' },
            { assetId: '37370521', metadata: 'unknown' },
            { assetId: '158019561', metadata: 'unknown' },
          ],
        },
      ],
    },
    {
      name: { en: 'Hippolais warbler', sk: 'Sedmohlások' },
      species: [
        {
          name: {
            latin: 'Hippolais icterina',
            localized: {
              en: 'Icterine Warbler',
              sk: 'Sedmohlások obyčajný',
            },
          },
          imageAssets: [
            { assetId: '29547441', metadata: 'unknown' },
            { assetId: '34578341', metadata: 'unknown' },
            { assetId: '43069131', metadata: 'unknown' },
            { assetId: '42407201', metadata: 'unknown' },
            { assetId: '30314901', metadata: 'unknown' },
          ],
        },
      ],
    },
    {
      name: { en: 'Leaf warblers', sk: 'Kolibiariky' },
      species: [
        {
          name: {
            latin: 'Phylloscopus trochilus',
            localized: {
              en: 'Willow Warbler',
              sk: 'Kolibiarik spevavý',
            },
          },
          imageAssets: [
            { assetId: '265639101', metadata: 'unknown' },
            { assetId: '258451661', metadata: 'unknown' },
            { assetId: '177883521', metadata: 'unknown' },
            { assetId: '390322921', metadata: 'unknown' },
            { assetId: '42470371', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Phylloscopus sibilatrix',
            localized: {
              en: 'Wood Warbler',
              sk: 'Kolibiarik sykavý',
            },
          },
          imageAssets: [
            { assetId: '204244021', metadata: 'unknown' },
            { assetId: '37677231', metadata: 'unknown' },
            { assetId: '39314111', metadata: 'unknown' },
            { assetId: '27045531', metadata: 'unknown' },
            { assetId: '37293601', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Phylloscopus collybita',
            localized: {
              en: 'Common Chiffchaff',
              sk: 'Kolibiarik čipčavý',
            },
          },
          imageAssets: [
            { assetId: '191052481', metadata: 'unknown' },
            { assetId: '44180901', metadata: 'unknown' },
            { assetId: '20293701', metadata: 'unknown' },
          ],
        },
      ],
    },
    {
      name: { en: 'Crests', sk: 'Králiky' },
      species: [
        {
          name: {
            latin: 'Regulus regulus',
            localized: {
              en: 'Goldcrest',
              sk: 'Králik zlatohlavý',
            },
          },
          imageAssets: [
            { assetId: '42466111', metadata: 'adult' },
            { assetId: '37292701', metadata: 'adult' },
            { assetId: '25086161', metadata: 'adult' },
            { assetId: '38758611', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Regulus ignicapilla',
            localized: {
              en: 'Common Firecrest',
              sk: 'Králik ohnivohlavý',
            },
          },
          imageAssets: [
            { assetId: '21134081', metadata: 'adult' },
            { assetId: '23968481', metadata: 'adult' },
            { assetId: '44503601', metadata: 'adult' },
            { assetId: '44479401', metadata: 'adult' },
            { assetId: '40431981', metadata: 'adult' },
          ],
        },
      ],
    },
  ],
};

export const warblersGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const warblersSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
