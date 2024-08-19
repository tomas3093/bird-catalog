import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'wildfowl';

const data: GroupData = {
  name: { en: 'Wildfowl', sk: 'Husotvaré' },
  subGroups: [
    {
      name: { en: 'Swans', sk: 'Labute' },
      species: [
        {
          name: {
            latin: 'Cygnus olor',
            localized: { en: 'Mute Swan', sk: 'Labuť veľká' },
          },
          imageAssets: [
            { assetId: '53961801', metadata: 'adult' },
            { assetId: '54021741', metadata: 'immature' },
            { assetId: '34911811', metadata: 'adult' },
            { assetId: '54079441', metadata: 'juvenile' },
            { assetId: '57835421', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Cygnus cygnus',
            localized: { en: 'Whooper Swan', sk: 'Labuť spevavá' },
          },
          imageAssets: [
            { assetId: '199133081', metadata: 'adult' },
            { assetId: '36663841', metadata: 'juvenile' },
            { assetId: '37734541', metadata: 'adult' },
            { assetId: '36128671', metadata: 'adult' },
            { assetId: '42943781', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Cygnus columbianus',
            localized: { en: 'Tundra Swan', sk: 'Labuť malá' },
          },
          imageAssets: [
            { assetId: '41408271', metadata: 'adult' },
            { assetId: '24779031', metadata: 'adult' },
            { assetId: '40549011', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Cygnus atratus',
            localized: {
              en: 'Black Swan',
              sk: 'Labuť čierna',
            },
          },
          imageAssets: [
            { assetId: '120705851', metadata: 'adult' },
            { assetId: '166588421', metadata: 'adult' },
            { assetId: '344517191', metadata: 'juvenile' },
            { assetId: '621629556', metadata: 'juvenile' },
            { assetId: '44267321', metadata: 'juvenile' },
          ],
        },
      ],
    },
    {
      name: { en: 'Geese', sk: 'Husy' },
      species: [
        {
          name: {
            latin: 'Anser albifrons',
            localized: { en: 'Greater White-fronted Goose', sk: 'Hus bieločelá' },
          },
          imageAssets: [
            { assetId: '36909271', metadata: 'adult' },
            { assetId: '276177341', metadata: 'juvenile' },
            { assetId: '44369811', metadata: 'adult' },
            { assetId: '43709321', metadata: 'adult' },
            { assetId: '49888661', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Anser erythropus',
            localized: {
              en: 'Lesser White-fronted Goose',
              sk: 'Hus malá',
            },
          },
          imageAssets: [
            { assetId: '138319961', metadata: 'unknown' },
            { assetId: '211856921', metadata: 'unknown' },
            { assetId: '41700541', metadata: 'unknown' },
            { assetId: '31414541', metadata: 'unknown' },
            { assetId: '41700601', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Anser fabalis',
            localized: { en: 'Taiga Bean-Goose', sk: 'Hus siatinná' },
          },
          imageAssets: [
            { assetId: '95813661', metadata: 'unknown' },
            { assetId: '274030511', metadata: 'unknown' },
            { assetId: '37300361', metadata: 'unknown' },
            { assetId: '37300371', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Anser anser',
            localized: { en: 'Graylag Goose', sk: 'Hus divá' },
          },
          imageAssets: [
            { assetId: '63379971', metadata: 'adult' },
            { assetId: '34698481', metadata: 'adult' },
            { assetId: '44438721', metadata: 'adult' },
            { assetId: '66045831', metadata: 'adult' },
            { assetId: '34027531', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Branta canadensis',
            localized: { en: 'Canada Goose', sk: 'Bernikla veľká' },
          },
          imageAssets: [
            { assetId: '49344561', metadata: 'adult' },
            { assetId: '51561111', metadata: 'adult' },
            { assetId: '48663951', metadata: 'adult' },
            { assetId: '50174411', metadata: 'adult' },
            { assetId: '55794461', metadata: 'juvenile' },
          ],
        },
        {
          name: {
            latin: 'Branta leucopsis',
            localized: { en: 'Barnacle Goose', sk: 'Bernikla bielolíca' },
          },
          imageAssets: [
            { assetId: '65135151', metadata: 'adult' },
            { assetId: '593677801', metadata: 'adult' },
            { assetId: '40646761', metadata: 'adult' },
            { assetId: '26827351', metadata: 'juvenile' },
          ],
        },
        {
          name: {
            latin: 'Branta bernicla',
            localized: { en: 'Brant', sk: 'Bernikla tmavá' },
          },
          imageAssets: [
            { assetId: '53811211', metadata: 'adult' },
            { assetId: '26367021', metadata: 'adult' },
            { assetId: '35996621', metadata: 'adult' },
            { assetId: '188514901', metadata: 'juvenile' },
          ],
        },
        {
          name: {
            latin: 'Branta ruficollis',
            localized: { en: 'Red-breasted Goose', sk: 'Bernikla červenokrká' },
          },
          imageAssets: [
            { assetId: '63726401', metadata: 'adult' },
            { assetId: '42106461', metadata: 'adult' },
            { assetId: '127669211', metadata: 'adult' },
            { assetId: '127668711', metadata: 'adult' },
            { assetId: '127669201', metadata: 'adult' },
          ],
        },
        {
          name: {
            latin: 'Tadorna tadorna',
            localized: { en: 'Common Shelduck', sk: 'Kazarka pestrá' },
          },
          imageAssets: [
            { assetId: '43400091', metadata: 'adult' },
            { assetId: '44719411', metadata: 'juvenile' },
            { assetId: '32501151', metadata: 'adult' },
            { assetId: '34499091', metadata: 'adult' },
            { assetId: '33594831', metadata: 'immature' },
          ],
        },
        {
          name: {
            latin: 'Tadorna ferruginea',
            localized: { en: 'Ruddy Shelduck', sk: 'Kazarka hrdzavá' },
          },
          imageAssets: [
            { assetId: '135694691', metadata: 'adult male' },
            { assetId: '41842441', metadata: 'adult female' },
            { assetId: '34637551', metadata: 'unknown' },
            { assetId: '33607611', metadata: 'adult' },
            { assetId: '38580701', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Alopochen aegyptiaca',
            localized: { en: 'Egyptian Goose', sk: 'Húska štíhla' },
          },
          imageAssets: [
            { assetId: '33607341', metadata: 'adult' },
            { assetId: '32206651', metadata: 'adult' },
            { assetId: '32327501', metadata: 'adult' },
            { assetId: '28860361', metadata: 'juvenile' },
            { assetId: '41840661', metadata: 'unknown' },
          ],
        },
      ],
    },
    {
      name: { en: 'Dabbling ducks', sk: 'Kačice (nepotápavé)' },
      species: [
        {
          name: {
            latin: 'Aix sponsa',
            localized: {
              en: 'Wood Duck',
              sk: 'Kačička obojková',
            },
          },
          imageAssets: [
            { assetId: '35998481', metadata: 'adult male' },
            { assetId: '47443411', metadata: 'female' },
            { assetId: '110911841', metadata: 'eclipse male' },
            { assetId: '30161681', metadata: 'female' },
            { assetId: '192681961', metadata: 'male and female' },
          ],
        },
        {
          name: {
            latin: 'Aix galericulata',
            localized: {
              en: 'Mandarin Duck',
              sk: 'Kačička mandarínska',
            },
          },
          imageAssets: [
            { assetId: '86109331', metadata: 'adult male' },
            { assetId: '33891231', metadata: 'female' },
            { assetId: '29380391', metadata: 'adult male' },
            { assetId: '33909221', metadata: 'adult male' },
            { assetId: '33909221', metadata: 'adult male' },
          ],
        },
        {
          name: {
            latin: 'Anas platyrhynchos',
            localized: { en: 'Mallard', sk: 'Kačica divá' },
          },
          imageAssets: [
            { assetId: '63736171', metadata: 'breeding male' },
            { assetId: '163427131', metadata: 'female' },
            { assetId: '283304311', metadata: 'breeding male' },
            { assetId: '236495351', metadata: 'immature male' },
            { assetId: '63644201', metadata: 'nonbreeding male' },
          ],
        },
        {
          name: {
            latin: 'Mareca strepera',
            localized: { en: 'Gadwall', sk: 'Kačica chripľavka' },
          },
          imageAssets: [
            { assetId: '283493481', metadata: 'adult male' },
            { assetId: '246145981', metadata: 'female' },
            { assetId: '51069691', metadata: 'male and female' },
            { assetId: '243184761', metadata: 'adult male' },
            { assetId: '256567601', metadata: 'molting adult' },
          ],
        },
        {
          name: {
            latin: 'Anas acuta',
            localized: { en: 'Northern Pintail', sk: 'Kačica ostrochvostá' },
          },
          imageAssets: [
            { assetId: '71206681', metadata: 'adult male' },
            { assetId: '36239061', metadata: 'female' },
            { assetId: '36822441', metadata: 'adult male' },
            { assetId: '36769031', metadata: 'female/immature male' },
            { assetId: '297748921', metadata: 'male and female' },
          ],
        },
        {
          name: {
            latin: 'Spatula clypeata',
            localized: { en: 'Northern Shoveler', sk: 'Kačica lyžičiarka' },
          },
          imageAssets: [
            { assetId: '215033941', metadata: 'breeding male' },
            { assetId: '45521801', metadata: 'female/immature male' },
            { assetId: '291848121', metadata: 'nonbreeding male' },
            { assetId: '27749171', metadata: 'breeding male' },
            { assetId: '139202071', metadata: 'breeding male' },
            { assetId: '272389011', metadata: 'female/immature male' },
            { assetId: '261773491', metadata: 'nonbreeding male' },
          ],
        },
        {
          name: {
            latin: 'Mareca penelope',
            localized: { en: 'Eurasian Wigeon', sk: 'Kačica hvizdárka' },
          },
          imageAssets: [
            { assetId: '64163431', metadata: 'adult male' },
            { assetId: '26858471', metadata: 'female' },
            { assetId: '278103331', metadata: 'adult male' },
            { assetId: '48235591', metadata: 'female' },
            { assetId: '85965461', metadata: 'adult male' },
          ],
        },
        {
          name: {
            latin: 'Anas crecca',
            localized: { en: 'Green-winged Teal', sk: 'Kačica chrapka' },
          },
          imageAssets: [
            { assetId: '295743751', metadata: 'adult male' },
            { assetId: '61065571', metadata: 'female/immature male' },
            { assetId: '43558951', metadata: 'female/immature male' },
            { assetId: '33539961', metadata: 'immature' },
            { assetId: '422441021', metadata: 'adult male' },
          ],
        },
        {
          name: {
            latin: 'Spatula querquedula',
            localized: { en: 'Garganey', sk: 'Kačica chrapačka' },
          },
          imageAssets: [
            { assetId: '150021041', metadata: 'breeding male' },
            { assetId: '24885681', metadata: 'female' },
            { assetId: '27711891', metadata: 'breeding male' },
            { assetId: '171163691', metadata: 'unknown' },
          ],
        },
      ],
    },
    {
      name: { en: 'Diving ducks', sk: 'Potápavé kačice' },
      species: [
        {
          name: {
            latin: 'Aythya ferina',
            localized: { en: 'Common Pochard', sk: 'Chochlačka sivá' },
          },
          imageAssets: [
            { assetId: '204243991', metadata: 'breeding male' },
            { assetId: '198274191', metadata: 'adult female' },
            { assetId: '34638011', metadata: 'breeding male' },
            { assetId: '39588011', metadata: 'female/immature male' },
          ],
        },
        {
          name: {
            latin: 'Netta rufina',
            localized: { en: 'Red-crested Pochard', sk: 'Hrdzavka potápavá' },
          },
          imageAssets: [
            { assetId: '23442101', metadata: 'adult male' },
            { assetId: '23442081', metadata: 'female' },
            { assetId: '66821711', metadata: 'adult male' },
            { assetId: '40154111', metadata: 'adult male' },
            { assetId: '73305021', metadata: 'eclipse male' },
          ],
        },
        {
          name: {
            latin: 'Aythya nyroca',
            localized: { en: 'Ferruginous Duck', sk: 'Chochlačka bielooká' },
          },
          imageAssets: [
            { assetId: '136349881', metadata: 'adult male' },
            { assetId: '194116551', metadata: 'female' },
            { assetId: '44585921', metadata: 'adult male' },
            { assetId: '36816551', metadata: 'adult male' },
            { assetId: '204584571', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Aythya marila',
            localized: { en: 'Greater Scaup', sk: 'Chochlačka morská' },
          },
          imageAssets: [
            { assetId: '150567911', metadata: 'adult male' },
            { assetId: '46775581', metadata: 'female' },
            { assetId: '61815271', metadata: 'female' },
            { assetId: '310602671', metadata: 'male and female' },
            { assetId: '27736041', metadata: 'immature male' },
            { assetId: '31955871', metadata: 'eclipse male' },
          ],
        },
        {
          name: {
            latin: 'Aythya fuligula',
            localized: { en: 'Tufted Duck', sk: 'Chochlačka vrkočatá' },
          },
          imageAssets: [
            { assetId: '219416591', metadata: 'adult male' },
            { assetId: '220934401', metadata: 'female/immature male' },
            { assetId: '42765761', metadata: 'adult male' },
            { assetId: '188074981', metadata: 'immature male' },
            { assetId: '42955311', metadata: 'adult male' },
          ],
        },
        {
          name: {
            latin: 'Melanitta nigra',
            localized: {
              en: 'Common Scoter',
              sk: 'Turpan čierny',
            },
          },
          imageAssets: [
            { assetId: '135065141', metadata: 'adult male' },
            { assetId: '127452311', metadata: 'female' },
            { assetId: '181671421', metadata: 'immature male' },
            { assetId: '53444051', metadata: 'adult male' },
            { assetId: '143551841', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Melanitta fusca',
            localized: {
              en: 'Velvet Scoter',
              sk: 'Turpan tmavý',
            },
          },
          imageAssets: [
            { assetId: '276087951', metadata: 'adult male' },
            { assetId: '129448731', metadata: 'female' },
            { assetId: '402228621', metadata: 'adult male' },
            { assetId: '613184775', metadata: 'immature male' },
            { assetId: '204585531', metadata: 'immature male' },
          ],
        },
        {
          name: {
            latin: 'Clangula hyemalis',
            localized: { en: 'Long-tailed Duck', sk: 'Ľadovka dlhochvostá' },
          },
          imageAssets: [
            { assetId: '299883551', metadata: 'nonbreeding male' },
            { assetId: '41193971', metadata: 'nonbreeding female' },
            { assetId: '53763701', metadata: 'breeding male' },
            { assetId: '293387061', metadata: 'nonbreeding male' },
            { assetId: '48263861', metadata: 'nonbreeding female' },
            { assetId: '216946861', metadata: 'immature male' },
          ],
        },
        {
          name: {
            latin: 'Bucephala clangula',
            localized: { en: 'Common Goldeneye', sk: 'Hlaholka severská' },
          },
          imageAssets: [
            { assetId: '301917401', metadata: 'adult male' },
            { assetId: '139849441', metadata: 'female' },
            { assetId: '43640151', metadata: 'female' },
            { assetId: '48978181', metadata: 'immature male' },
            { assetId: '291076221', metadata: 'male and female' },
          ],
        },
        {
          name: {
            latin: 'Mergus merganser',
            localized: { en: 'Common Merganser', sk: 'Potápač veľký' },
          },
          imageAssets: [
            { assetId: '63556111', metadata: 'adult male' },
            { assetId: '63898421', metadata: 'male and female' },
            { assetId: '46776941', metadata: 'female' },
            { assetId: '278279141', metadata: 'immature' },
          ],
        },
        {
          name: {
            latin: 'Mergus serrator',
            localized: { en: 'Red-breasted Merganser', sk: 'Potápač prostredný' },
          },
          imageAssets: [
            { assetId: '91376081', metadata: 'adult male' },
            { assetId: '289030541', metadata: 'female/immature male' },
            { assetId: '35982881', metadata: 'adult male' },
            { assetId: '48775221', metadata: 'female/immature male' },
            { assetId: '55287461', metadata: 'adult male' },
            { assetId: '62659461', metadata: 'unknown' },
          ],
        },
        {
          name: {
            latin: 'Mergellus albellus',
            localized: { en: 'Smew', sk: 'Potápač malý' },
          },
          imageAssets: [
            { assetId: '197359291', metadata: 'adult male' },
            { assetId: '268241411', metadata: 'female' },
            { assetId: '26861931', metadata: 'adult male' },
            { assetId: '24648981', metadata: 'male and female' },
          ],
        },
      ],
    },
  ],
};

export const wildfowlGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const wildfowlSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
