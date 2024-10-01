import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'heronsStorksEtAl';

const data: GroupData = {
  name: { en: 'Herons, storks, et al.', sk: 'Volavky, bociany, et al.' },
  species: [
    {
      name: {
        latin: 'Botaurus stellaris',
        localized: {
          en: 'Great Bittern',
          sk: 'Bučiak veľký'
        }
      },
      imageAssets: [
        { assetId: '21422101', metadata: 'unknown' },
        { assetId: '28604471', metadata: 'unknown' },
        { assetId: '43450071', metadata: 'unknown' },
        { assetId: '42896611', metadata: 'unknown' },
        { assetId: '204629911', metadata: 'unknown' }
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory'
    },
    {
      name: {
        latin: 'Ixobrychus minutus',
        localized: {
          en: 'Little Bittern',
          sk: 'Bučiačik močiarny'
        }
      },
      imageAssets: [
        { assetId: '43255821', metadata: 'adult male' },
        { assetId: '31303291', metadata: 'juvenile' },
        { assetId: '27660721', metadata: 'adult male' }
      ],
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: [{ metadata: 'adult', species: 'Nycticorax nycticorax' }]
      }
    },
    {
      name: {
        latin: 'Nycticorax nycticorax',
        localized: {
          en: 'Black-crowned Night Heron',
          sk: 'Chavkoš nočný'
        }
      },
      imageAssets: [
        { assetId: '34199991', metadata: 'adult' },
        { assetId: '32861471', metadata: 'juvenile' },
        { assetId: '31290911', metadata: 'juvenile' },
        { assetId: '51528841', metadata: 'immature' },
        { assetId: '84756091', metadata: 'adult' }
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: [
          { metadata: 'adult', species: 'Ardea cinerea' },
          { metadata: 'adult male', species: 'Ixobrychus minutus' }
        ]
      }
    },
    {
      name: {
        latin: 'Bubulcus ibis',
        localized: {
          en: 'Western Cattle Egret',
          sk: 'Hltavka chochlatá'
        }
      },
      imageAssets: [
        { assetId: '292321851', metadata: 'breeding adult' },
        { assetId: '92885821', metadata: 'breeding adult' },
        { assetId: '63099011', metadata: 'nonbreeding adult' },
        { assetId: '30759391', metadata: 'juvenile' },
        { assetId: '261796781', metadata: 'breeding adult' }
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: ['Egretta garzetta', 'Ardea alba']
      }
    },
    {
      name: {
        latin: 'Ardeola ralloides',
        localized: {
          en: 'Squacco Heron',
          sk: 'Čaplička vlasatá'
        }
      },
      imageAssets: [
        { assetId: '104688081', metadata: 'breeding adult' },
        { assetId: '35816151', metadata: 'nonbreeding/immature' },
        { assetId: '99967161', metadata: 'breeding adult' },
        { assetId: '171056141', metadata: 'nonbreeding/immature' },
        { assetId: '25771061', metadata: 'nonbreeding/immature' }
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: [
          { metadata: 'adult', species: 'Nycticorax nycticorax' },
          { metadata: 'adult male', species: 'Ixobrychus minutus' }
        ]
      }
    },
    {
      name: {
        latin: 'Egretta garzetta',
        localized: {
          en: 'Little Egret',
          sk: 'Beluša malá'
        }
      },
      imageAssets: [
        { assetId: '115910611', metadata: 'unknown' },
        { assetId: '143925711', metadata: 'unknown' },
        { assetId: '42478301', metadata: 'unknown' },
        { assetId: '42582941', metadata: 'unknown' },
        { assetId: '31134851', metadata: 'unknown' }
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: ['Bubulcus ibis', 'Ardea alba']
      }
    },
    {
      name: {
        latin: 'Ardea alba',
        localized: {
          en: 'Great White Egret',
          sk: 'Beluša veľká'
        }
      },
      imageAssets: [
        { assetId: '32782691', metadata: 'adult' },
        { assetId: '258295331', metadata: 'adult' },
        { assetId: '284049821', metadata: 'breeding adult' }
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adultSummer: ['Egretta garzetta', 'Platalea leucorodia']
      }
    },
    {
      name: {
        latin: 'Ardea cinerea',
        localized: {
          en: 'Grey Heron',
          sk: 'Volavka popolavá'
        }
      },
      imageAssets: [
        { assetId: '109008531', metadata: 'adult' },
        { assetId: '63563911', metadata: 'juvenile' },
        { assetId: '91285281', metadata: 'adult' },
        { assetId: '27708101', metadata: 'adult' },
        { assetId: '36169461', metadata: 'adult' }
      ],
      skAbundance: 'common',
      movementPattern: 'resident',
      similarSpecies: {
        adult: ['Ardea purpurea', 'Nycticorax nycticorax']
      }
    },
    {
      name: {
        latin: 'Ardea purpurea',
        localized: {
          en: 'Purple Heron',
          sk: 'Volavka purpurová'
        }
      },
      imageAssets: [
        { assetId: '159812151', metadata: 'adult' },
        { assetId: '204617861', metadata: 'juvenile' },
        { assetId: '50220471', metadata: 'adult' },
        { assetId: '45170571', metadata: 'juvenile' },
        { assetId: '39234171', metadata: 'immature' }
      ],
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Ardea cinerea']
      }
    },
    {
      name: {
        latin: 'Ciconia ciconia',
        localized: {
          en: 'White Stork',
          sk: 'Bocian biely'
        }
      },
      imageAssets: [
        { assetId: '109122381', metadata: 'adult' },
        { assetId: '41115011', metadata: 'adult' },
        { assetId: '34395401', metadata: 'unknown' },
        { assetId: '228173991', metadata: 'juvenile' },
        { assetId: '23441861', metadata: 'adult' }
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: [
          { metadata: 'adult', species: 'Ciconia nigra' },
          { metadata: 'breeding adult', species: 'Platalea leucorodia' },
          { metadata: 'breeding adult', species: 'Ardea alba' },
          { metadata: 'juvenile', species: 'Phoenicopterus roseus' }
        ]
      }
    },
    {
      name: {
        latin: 'Ciconia nigra',
        localized: {
          en: 'Black Stork',
          sk: 'Bocian čierny'
        }
      },
      imageAssets: [
        { assetId: '198895331', metadata: 'adult' },
        { assetId: '40444371', metadata: 'juvenile' },
        { assetId: '202134931', metadata: 'adult' },
        { assetId: '35386091', metadata: 'juvenile' },
        { assetId: '44154951', metadata: 'adult' }
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Ciconia ciconia', 'Ardea cinerea']
      }
    },
    {
      name: {
        latin: 'Plegadis falcinellus',
        localized: {
          en: 'Glossy Ibis',
          sk: 'Ibisovec hnedý'
        }
      },
      imageAssets: [
        { assetId: '224139071', metadata: 'breeding adult' },
        { assetId: '302384391', metadata: 'nonbreeding adult' },
        { assetId: '64467731', metadata: 'juvenile' },
        { assetId: '36910451', metadata: 'breeding adult' },
        { assetId: '112050371', metadata: 'juvenile' }
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: [{ metadata: 'adult male', species: 'Numenius phaeopus' }]
      }
    },
    {
      name: {
        latin: 'Platalea leucorodia',
        localized: {
          en: 'Eurasian Spoonbill',
          sk: 'Lyžičiar biely'
        }
      },
      imageAssets: [
        { assetId: '78640881', metadata: 'breeding adult' },
        { assetId: '43007681', metadata: 'immature' },
        { assetId: '43007681', metadata: 'immature' },
        { assetId: '191767841', metadata: 'nonbreeding adult' },
        { assetId: '44821981', metadata: 'immature' }
      ],
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adultSummer: [
          { metadata: 'breeding adult', species: 'Ardea alba' },
          { metadata: 'adult', species: 'Ciconia ciconia' }
        ]
      }
    },
    {
      name: {
        latin: 'Phoenicopterus roseus',
        localized: {
          en: 'Greater Flamingo',
          sk: 'Plameniak ružový'
        }
      },
      imageAssets: [
        { assetId: '53250391', metadata: 'adult' },
        { assetId: '37154761', metadata: 'juvenile' },
        { assetId: '33925671', metadata: 'adult' },
        { assetId: '42526521', metadata: 'adult' },
        { assetId: '53086131', metadata: 'adult' }
      ],
      skAbundance: 'rare',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: ['Ardea alba', 'Ardea cinerea', 'Platalea leucorodia', 'Ciconia ciconia'],
        juvenile: ['Ardea alba', 'Platalea leucorodia', 'Ciconia ciconia']
      }
    }
  ]
};

export const heronsStorksEtAlGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const heronsStorksEtAlSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
