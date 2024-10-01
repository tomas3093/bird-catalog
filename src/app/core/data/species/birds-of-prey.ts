import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'birdsOfPrey';

const data: GroupData = {
  name: { en: 'Birds of prey', sk: 'Dravce' },
  subGroups: [
    {
      name: { en: 'Vultures', sk: 'Supy' },
      species: [
        {
          name: {
            latin: 'Gypaetus barbatus',
            localized: {
              en: 'Bearded Vulture',
              sk: 'Bradáň žltohlavý'
            }
          },
          imageAssets: [
            { assetId: '31365871', metadata: 'adult' },
            { assetId: '40190371', metadata: 'immature' },
            { assetId: '33607691', metadata: 'adult' },
            { assetId: '30833231', metadata: 'immature' },
            { assetId: '38758881', metadata: 'immature' }
          ],
          skAbundance: 'rare',
          similarSpecies: { adult: ['Neophron percnopterus'] }
        },
        {
          name: {
            latin: 'Gyps fulvus',
            localized: {
              en: 'Griffon Vulture',
              sk: 'Sup bielohlavý'
            }
          },
          imageAssets: [
            { assetId: '250273201', metadata: 'adult' },
            { assetId: '37809551', metadata: 'adult' },
            { assetId: '179322581', metadata: 'immature' },
            { assetId: '37455291', metadata: 'adult' },
            { assetId: '29255581', metadata: 'adult' }
          ],
          skAbundance: 'rare',
          similarSpecies: { adult: ['Aegypius monachus'] }
        },
        {
          name: {
            latin: 'Aegypius monachus',
            localized: {
              en: 'Black Vulture',
              sk: 'Sup tmavohnedý'
            }
          },
          imageAssets: [
            { assetId: '232254641', metadata: 'adult' },
            { assetId: '124926961', metadata: 'adult' },
            { assetId: '85134611', metadata: 'immature' },
            { assetId: '29256491', metadata: 'adult' },
            { assetId: '26611931', metadata: 'immature' }
          ],
          skAbundance: 'historical',
          similarSpecies: {
            adult: [
              { metadata: 'adult', species: 'Gyps fulvus' },
              { metadata: 'juvenile', species: 'Neophron percnopterus' }
            ]
          }
        },
        {
          name: {
            latin: 'Neophron percnopterus',
            localized: {
              en: 'Egyptian Vulture',
              sk: 'Zdochlinár biely'
            }
          },
          imageAssets: [
            { assetId: '66268551', metadata: 'adult' },
            { assetId: '20436221', metadata: 'immature' },
            { assetId: '120781491', metadata: 'adult' },
            { assetId: '45198961', metadata: 'immature' },
            { assetId: '40867711', metadata: 'juvenile' }
          ],
          skAbundance: 'historical',
          similarSpecies: { adult: ['Ciconia ciconia'] }
        }
      ]
    },
    {
      name: { en: 'Eagles', sk: 'Orly' },
      species: [
        {
          name: {
            latin: 'Haliaeetus albicilla',
            localized: { en: 'White-tailed Eagle', sk: 'Orliak morský' }
          },
          imageAssets: [
            { assetId: '26861391', metadata: 'adult' },
            { assetId: '40236731', metadata: 'immature' },
            { assetId: '38318941', metadata: 'immature' },
            { assetId: '20060811', metadata: 'adult' },
            { assetId: '44985401', metadata: 'immature' }
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: {
            adult: [
              { metadata: 'juvenile', species: 'Clanga clanga' },
              { metadata: 'adult', species: 'Aquila chrysaetos' }
            ]
          }
        },
        {
          name: {
            latin: 'Aquila chrysaetos',
            localized: { en: 'Golden Eagle', sk: 'Orol skalný' }
          },
          imageAssets: [
            { assetId: '209005751', metadata: 'adult' },
            { assetId: '57752091', metadata: 'immature' },
            { assetId: '263214871', metadata: 'immature' },
            { assetId: '26325211', metadata: 'adult' },
            { assetId: '275690361', metadata: 'immature' }
          ],
          skAbundance: 'uncommon',
          movementPattern: 'resident',
          similarSpecies: {
            adult: ['Aquila heliaca', 'Buteo buteo'],
            firstWinter: [
              { metadata: 'adult', species: 'Buteo buteo' },
              { metadata: 'first winter', species: 'Haliaeetus albicilla' }
            ]
          }
        },
        {
          name: {
            latin: 'Aquila heliaca',
            localized: { en: 'Imperial Eagle', sk: 'Orol kráľovský' }
          },
          imageAssets: [
            { assetId: '64341561', metadata: 'immature' },
            { assetId: '126187761', metadata: 'adult' },
            { assetId: '42992541', metadata: 'immature' },
            { assetId: '220623401', metadata: 'adult' },
            { assetId: '39586521', metadata: 'subadult' }
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: {
            adult: [{ metadata: 'first winter', species: 'Aquila chrysaetos' }],
            juvenile: ['Aquila chrysaetos']
          }
        },
        {
          name: {
            latin: 'Clanga pomarina',
            localized: { en: 'Lesser Spotted Eagle', sk: 'Orol krikľavý' }
          },
          imageAssets: [
            { assetId: '35864181', metadata: 'adult' },
            { assetId: '49929491', metadata: 'immature' },
            { assetId: '22186111', metadata: 'adult' },
            { assetId: '43488351', metadata: 'adult' },
            { assetId: '196828171', metadata: 'juvenile' }
          ],
          skAbundance: 'common',
          movementPattern: 'migratory',
          similarSpecies: { juvenile: ['Clanga clanga', 'Aquila nipalensis'] }
        },
        {
          name: {
            latin: 'Clanga clanga',
            localized: {
              en: 'Greater Spotted Eagle',
              sk: 'Orol hrubozobý'
            }
          },
          imageAssets: [
            { assetId: '43621161', metadata: 'adult' },
            { assetId: '47136651', metadata: 'immature' },
            { assetId: '66351181', metadata: 'immature' },
            { assetId: '52049071', metadata: 'immature' },
            { assetId: '36732851', metadata: 'immature' }
          ],
          skAbundance: 'rare',
          similarSpecies: { juvenile: ['Clanga pomarina', 'Aquila nipalensis', 'Aquila heliaca'] }
        },
        {
          name: {
            latin: 'Circaetus gallicus',
            localized: { en: 'Short-toed Snake-Eagle', sk: 'Hadiar krátkoprstý' }
          },
          imageAssets: [
            { assetId: '36323561', metadata: 'unknown' },
            { assetId: '41701421', metadata: 'unknown' },
            { assetId: '50787181', metadata: 'unknown' },
            { assetId: '39220891', metadata: 'unknown' },
            { assetId: '46583481', metadata: 'unknown' }
          ],
          skAbundance: 'occasional',
          movementPattern: 'migratory',
          similarSpecies: { adult: ['Buteo buteo'] }
        },
        {
          name: {
            latin: 'Aquila nipalensis',
            localized: {
              en: 'Steppe Eagle',
              sk: 'Orol stepný'
            }
          },
          imageAssets: [
            { assetId: '66340331', metadata: 'adult' },
            { assetId: '66340451', metadata: 'immature' },
            { assetId: '81109621', metadata: 'adult' },
            { assetId: '132062271', metadata: 'immature' },
            { assetId: '66338831', metadata: 'immature' }
          ],
          skAbundance: 'historical',
          similarSpecies: { juvenile: ['Clanga clanga', 'Clanga pomarina'] }
        },
        {
          name: {
            latin: 'Hieraaetus pennatus',
            localized: {
              en: 'Booted Eagle',
              sk: 'Orol malý'
            }
          },
          imageAssets: [
            { assetId: '36017381', metadata: 'light morph' },
            { assetId: '179446021', metadata: 'light morph' },
            { assetId: '36732921', metadata: 'dark morph' },
            { assetId: '205477641', metadata: 'dark morph' },
            { assetId: '47740691', metadata: 'light morph' }
          ],
          skAbundance: 'rare',
          movementPattern: 'migratory',
          similarSpecies: { adult: ['Buteo buteo', 'Buteo rufinus'] }
        }
      ]
    },
    {
      name: { en: 'Kites', sk: 'Haje' },
      species: [
        {
          name: {
            latin: 'Milvus milvus',
            localized: { en: 'Red Kite', sk: 'Haja červená' }
          },
          imageAssets: [
            { assetId: '104479601', metadata: 'adult' },
            { assetId: '70617551', metadata: 'adult' },
            { assetId: '95714191', metadata: 'adult' },
            { assetId: '34889771', metadata: 'juvenile' },
            { assetId: '43787251', metadata: 'immature' }
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: { adult: ['Milvus migrans'] }
        },
        {
          name: {
            latin: 'Milvus migrans',
            localized: { en: 'Black Kite', sk: 'Haja tmavá' }
          },
          imageAssets: [
            { assetId: '25504811', metadata: 'adult' },
            { assetId: '20990971', metadata: 'juvenile' },
            { assetId: '31277461', metadata: 'juvenile' },
            { assetId: '194547221', metadata: 'juvenile' },
            { assetId: '33505041', metadata: 'juvenile' }
          ],
          skAbundance: 'uncommon',
          movementPattern: 'resident',
          similarSpecies: { adult: ['Milvus milvus'] }
        },
        {
          name: {
            latin: 'Elanus caeruleus',
            localized: {
              en: 'Black-winged Kite',
              sk: 'Luniak sivý'
            }
          },
          imageAssets: [
            { assetId: '117792521', metadata: 'adult' },
            { assetId: '101625781', metadata: 'juvenile' },
            { assetId: '24976971', metadata: 'adult' },
            { assetId: '46403131', metadata: 'adult' },
            { assetId: '50587611', metadata: 'adult' }
          ],
          skAbundance: 'rare',
          similarSpecies: {
            adult: [
              { metadata: 'adult male', species: 'Circus macrourus' },
              { metadata: 'adult male', species: 'Accipiter nisus' }
            ]
          }
        }
      ]
    },
    {
      name: { en: 'Harriers', sk: 'Kane' },
      species: [
        {
          name: {
            latin: 'Circus aeruginosus',
            localized: { en: 'Western Marsh Harrier', sk: 'Kaňa močiarna' }
          },
          imageAssets: [
            { assetId: '190082101', metadata: 'adult male' },
            { assetId: '193061791', metadata: 'immature male' },
            { assetId: '38371921', metadata: 'adult male' },
            { assetId: '43733091', metadata: 'female' },
            { assetId: '346923891', metadata: 'adult male' },
            { assetId: '34475781', metadata: 'immature female' }
          ],
          skAbundance: 'common',
          movementPattern: 'migratory',
          similarSpecies: {
            adultMale: [
              { metadata: 'adult female', species: 'Circus pygargus' },
              { metadata: 'adult female', species: 'Circus cyaneus' }
            ],
            adultFemale: [
              { metadata: 'adult female', species: 'Circus pygargus' },
              { metadata: 'adult female', species: 'Circus cyaneus' },
              { metadata: 'adult female', species: 'Circus macrourus' },
              { metadata: 'adult', species: 'Buteo buteo' }
            ]
          }
        },
        {
          name: {
            latin: 'Circus cyaneus',
            localized: { en: 'Hen Harrier', sk: 'Kaňa sivá' }
          },
          imageAssets: [
            { assetId: '189755831', metadata: 'adult male' },
            { assetId: '57601551', metadata: 'female/immature male' },
            { assetId: '57601871', metadata: 'female/immature male' },
            { assetId: '206041211', metadata: 'immature male' },
            { assetId: '37535161', metadata: 'female' },
            { assetId: '63555051', metadata: 'adult male' }
          ],
          skAbundance: 'common',
          movementPattern: 'migratory',
          similarSpecies: {
            adultMale: ['Circus pygargus', 'Circus macrourus', 'Accipiter gentilis'],
            adultFemale: ['Circus pygargus', 'Circus macrourus', 'Accipiter nisus', 'Circus aeruginosus']
          }
        },
        {
          name: {
            latin: 'Circus pygargus',
            localized: { en: "Montagu's Harrier", sk: 'Kaňa popolavá' }
          },
          imageAssets: [
            { assetId: '44390971', metadata: 'adult male' },
            { assetId: '45737231', metadata: 'adult female' },
            { assetId: '38204901', metadata: 'juvenile' },
            { assetId: '41083291', metadata: 'adult male' },
            { assetId: '43521811', metadata: 'adult female' },
            { assetId: '45176181', metadata: 'adult male' }
          ],
          skAbundance: 'occasional',
          movementPattern: 'migratory',
          similarSpecies: {
            adultMale: ['Circus cyaneus', 'Circus macrourus'],
            adultFemale: ['Circus cyaneus', 'Circus macrourus', 'Circus aeruginosus']
          }
        },
        {
          name: {
            latin: 'Circus macrourus',
            localized: { en: 'Pallid Harrier', sk: 'Kaňa stepná' }
          },
          imageAssets: [
            { assetId: '33606121', metadata: 'adult male' },
            { assetId: '38534171', metadata: 'female' },
            { assetId: '43391411', metadata: 'juvenile' },
            { assetId: '38029191', metadata: 'adult male' },
            { assetId: '26701651', metadata: 'adult male' },
            { assetId: '41275581', metadata: 'adult male' }
          ],
          skAbundance: 'rare',
          movementPattern: 'migratory',
          similarSpecies: {
            adultMale: [
              { metadata: 'adult male', species: 'Circus cyaneus' },
              { metadata: 'adult male', species: 'Circus pygargus' },
              { metadata: 'adult', species: 'Elanus caeruleus' }
            ],
            adultFemale: ['Circus pygargus', 'Circus cyaneus'],
            juvenile: [
              { metadata: 'adult female', species: 'Circus pygargus' },
              { metadata: 'adult female', species: 'Circus cyaneus' }
            ]
          }
        }
      ]
    },
    {
      name: { en: 'Buzzards', sk: 'Myšiaky' },
      species: [
        {
          name: {
            latin: 'Buteo rufinus',
            localized: { en: 'Long-legged Buzzard', sk: 'Myšiak hrdzavý' }
          },
          imageAssets: [
            { assetId: '66273761', metadata: 'adult light morph' },
            { assetId: '20980431', metadata: 'adult rufous morph' },
            { assetId: '54027161', metadata: 'adult dark morph' },
            { assetId: '38028921', metadata: 'immature light morph' },
            { assetId: '46595271', metadata: 'immature light morph' }
          ],
          skAbundance: 'rare',
          movementPattern: 'migratory',
          similarSpecies: {
            adult: ['Buteo buteo']
          }
        },
        {
          name: {
            latin: 'Buteo buteo',
            localized: { en: 'Common Buzzard', sk: 'Myšiak hôrny' }
          },
          imageAssets: [
            { assetId: '35712671', metadata: 'adult' },
            { assetId: '31262261', metadata: 'adult' },
            { assetId: '36255951', metadata: 'adult light morph' },
            { assetId: '34393941', metadata: 'juvenile' },
            { assetId: '39479281', metadata: 'adult' },
            { assetId: '43263301', metadata: 'adult dark morph' }
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: {
            adult: [
              { metadata: 'adult female', species: 'Buteo lagopus' },
              { metadata: 'adult', species: 'Buteo rufinus' }
            ]
          }
        },
        {
          name: {
            latin: 'Buteo lagopus',
            localized: { en: 'Rough-legged Hawk', sk: 'Myšiak severský' }
          },
          imageAssets: [
            { assetId: '47706471', metadata: 'adult light morph' },
            { assetId: '46292241', metadata: 'immature light morph' },
            { assetId: '46855241', metadata: 'juvenile' },
            { assetId: '26775691', metadata: 'adult light morph' }
          ],
          skAbundance: 'occasional',
          movementPattern: 'migratory',
          similarSpecies: {
            adultFemale: [{ metadata: 'adult', species: 'Buteo buteo' }]
          }
        }
      ]
    },
    {
      name: { en: 'Honey buzzard', sk: 'Včelár' },
      species: [
        {
          name: {
            latin: 'Pernis apivorus',
            localized: { en: 'European Honey-buzzard', sk: 'Včelár lesný' }
          },
          imageAssets: [
            { assetId: '174857931', metadata: 'adult' },
            { assetId: '176504501', metadata: 'adult dark morph' },
            { assetId: '59583091', metadata: 'juvenile' },
            { assetId: '181548921', metadata: 'adult light morph' },
            { assetId: '205935771', metadata: 'adult light morph' }
          ],
          skAbundance: 'uncommon',
          movementPattern: 'migratory',
          similarSpecies: {
            adultMale: [
              { metadata: 'adult', species: 'Buteo buteo' },
              { metadata: 'adult', species: 'Buteo rufinus' },
              { metadata: 'adult female', species: 'Buteo lagopus' }
            ]
          }
        }
      ]
    },
    {
      name: { en: 'Hawks', sk: 'Jastraby' },
      species: [
        {
          name: {
            latin: 'Accipiter nisus',
            localized: { en: 'Eurasian Sparrowhawk', sk: 'Jastrab krahulec' }
          },
          imageAssets: [
            { assetId: '154133151', metadata: 'adult male' },
            { assetId: '40253451', metadata: 'adult male' },
            { assetId: '40871671', metadata: 'adult female' },
            { assetId: '38442851', metadata: 'adult female' },
            { assetId: '43010081', metadata: 'immature' },
            { assetId: '41087551', metadata: 'juvenile' }
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: {
            adultMale: ['Accipiter brevipes', 'Accipiter gentilis'],
            adultFemale: [
              { metadata: 'adult male', species: 'Accipiter gentilis' },
              { metadata: 'adult female', species: 'Accipiter brevipes' }
            ]
          }
        },
        {
          name: {
            latin: 'Accipiter gentilis',
            localized: { en: 'Eurasian Goshawk', sk: 'Jastrab veľký' }
          },
          imageAssets: [
            { assetId: '409340871', metadata: 'adult' },
            { assetId: '251032311', metadata: 'adult' },
            { assetId: '486521891', metadata: 'juvenile' },
            { assetId: '294030031', metadata: 'juvenile' },
            { assetId: '305163221', metadata: 'adult' },
            { assetId: '492727441', metadata: 'juvenile' }
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: {
            adultMale: [
              { metadata: 'adult female', species: 'Accipiter nisus' },
              { metadata: 'adult', species: 'Buteo buteo' }
            ]
          }
        },
        {
          name: {
            latin: 'Accipiter brevipes',
            localized: {
              en: 'Levant Sparrowhawk',
              sk: 'Jastrab krátkoprstý'
            }
          },
          imageAssets: [
            { assetId: '97332551', metadata: 'unknown' },
            { assetId: '123357621', metadata: 'immature' },
            { assetId: '97332271', metadata: 'immature' },
            { assetId: '124829101', metadata: 'adult' },
            { assetId: '21940471', metadata: 'immature' }
          ],
          skAbundance: 'historical',
          similarSpecies: { adult: ['Accipiter nisus'] }
        }
      ]
    },
    {
      name: { en: 'Falcons', sk: 'Sokoly' },
      species: [
        {
          name: {
            latin: 'Falco tinnunculus',
            localized: { en: 'Eurasian Kestrel', sk: 'Sokol myšiar (pustovka)' }
          },
          imageAssets: [
            { assetId: '234114551', metadata: 'adult male' },
            { assetId: '31119701', metadata: 'female' },
            { assetId: '33753141', metadata: 'immature' },
            { assetId: '41171261', metadata: 'adult male' },
            { assetId: '42654331', metadata: 'female' },
            { assetId: '42077001', metadata: 'adult male' }
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: {
            adultMale: [
              { metadata: 'adult male', species: 'Falco naumanni' },
              { metadata: 'adult female', species: 'Falco vespertinus' }
            ],
            adultFemale: ['Falco naumanni', 'Falco columbarius', 'Accipiter nisus']
          }
        },
        {
          name: {
            latin: 'Falco vespertinus',
            localized: { en: 'Red-footed Falcon', sk: 'Sokol kobcovitý' }
          },
          imageAssets: [
            { assetId: '204150991', metadata: 'adult male' },
            { assetId: '157235681', metadata: 'adult female' },
            { assetId: '111817431', metadata: 'juvenile' },
            { assetId: '204879041', metadata: 'adult male' },
            { assetId: '204612271', metadata: 'adult female' },
            { assetId: '174613471', metadata: 'juvenile' },
            { assetId: '126408781', metadata: 'juvenile' }
          ],
          skAbundance: 'occasional',
          movementPattern: 'migratory',
          similarSpecies: {
            adultFemale: [
              { metadata: 'adult', species: 'Falco subbuteo' },
              { metadata: 'adult male', species: 'Falco columbarius' }
            ],
            juvenile: ['Falco subbuteo']
          }
        },
        {
          name: {
            latin: 'Falco subbuteo',
            localized: { en: 'Eurasian Hobby', sk: 'Sokol lastovičiar' }
          },
          imageAssets: [
            { assetId: '197933351', metadata: 'adult' },
            { assetId: '205735971', metadata: 'adult' },
            { assetId: '129768341', metadata: 'immature' },
            { assetId: '74331571', metadata: 'immature' },
            { assetId: '199256531', metadata: 'adult' },
            { assetId: '69285851', metadata: 'adult' }
          ],
          skAbundance: 'uncommon',
          movementPattern: 'migratory',
          similarSpecies: {
            adult: ['Falco peregrinus'],
            juvenile: ['Falco vespertinus']
          }
        },
        {
          name: {
            latin: 'Falco peregrinus',
            localized: { en: 'Peregrine Falcon', sk: 'Sokol sťahovavý' }
          },
          imageAssets: [
            { assetId: '63239691', metadata: 'adult' },
            { assetId: '288347741', metadata: 'adult' },
            { assetId: '87305901', metadata: 'juvenile' },
            { assetId: '43852301', metadata: 'juvenile' },
            { assetId: '54334451', metadata: 'immature' },
            { assetId: '56019481', metadata: 'adult' }
          ],
          skAbundance: 'uncommon',
          movementPattern: 'migratory',
          similarSpecies: {
            adult: ['Falco subbuteo']
          }
        },
        {
          name: {
            latin: 'Falco columbarius',
            localized: { en: 'Merlin', sk: 'Sokol kobec' }
          },
          imageAssets: [
            { assetId: '27354311', metadata: 'adult male' },
            { assetId: '51619781', metadata: 'female/immature male' },
            { assetId: '46239361', metadata: 'female/immature male' }
          ],
          skAbundance: 'rare',
          movementPattern: 'migratory',
          similarSpecies: {
            adultMale: [{ metadata: 'adult', species: 'Falco peregrinus' }]
          }
        },
        {
          name: {
            latin: 'Falco cherrug',
            localized: { en: 'Saker Falcon', sk: 'Sokol rároh' }
          },
          imageAssets: [
            { assetId: '36107661', metadata: 'adult' },
            { assetId: '42667321', metadata: 'adult' },
            { assetId: '204749991', metadata: 'adult' },
            { assetId: '32691991', metadata: 'immature' },
            { assetId: '29236461', metadata: 'immature' },
            { assetId: '33939641', metadata: 'adult' }
          ],
          skAbundance: 'common',
          movementPattern: 'resident',
          similarSpecies: {
            adult: ['Falco peregrinus']
          }
        },
        {
          name: {
            latin: 'Falco naumanni',
            localized: {
              en: 'Lesser Kestrel',
              sk: 'Sokol bielopazúravý'
            }
          },
          imageAssets: [
            { assetId: '37731891', metadata: 'adult male' },
            { assetId: '53564931', metadata: 'female/immature male' },
            { assetId: '28494161', metadata: 'adult male' },
            { assetId: '204879491', metadata: 'female/immature male' },
            { assetId: '50531301', metadata: 'adult male' }
          ],
          skAbundance: 'historical',
          similarSpecies: {
            adultMale: ['Falco tinnunculus'],
            adultFemale: ['Falco columbarius']
          }
        }
      ]
    },
    {
      name: { en: 'Osprey', sk: 'Kršiak' },
      species: [
        {
          name: {
            latin: 'Pandion haliaetus',
            localized: { en: 'Osprey', sk: 'Kršiak rybár' }
          },
          imageAssets: [
            { assetId: '43425571', metadata: 'adult' },
            { assetId: '54168791', metadata: 'adult' },
            { assetId: '204972611', metadata: 'adult' },
            { assetId: '66023921', metadata: 'juvenile' },
            { assetId: '48440631', metadata: 'adult' }
          ],
          skAbundance: 'occasional',
          movementPattern: 'migratory',
          similarSpecies: {
            adult: ['Buteo buteo']
          }
        }
      ]
    }
  ]
};

export const birdsOfPreyGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const birdsOfPreySpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
