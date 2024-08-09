import { SpeciesGroupModel, SpeciesModel } from './model';
import { birdsOfPreyGroups, birdsOfPreySpecies } from './species/birds-of-prey';
import { gullsGroups, gullsSpecies } from './species/gulls';
import { sparrowsGroups, sparrowsSpecies } from './species/sparrows';
import { ternsGroups, ternsSpecies } from './species/terns';
import { wadersGroups, wadersSpecies } from './species/waders';
import { wildfowlGroups, wildfowlSpecies } from './species/wildfowl';

export const groups: SpeciesGroupModel[] = [
  // ============= MAINGROUPS ============
  ...birdsOfPreyGroups(),
  ...sparrowsGroups(),
  ...wadersGroups(),
  ...ternsGroups(),
  ...gullsGroups(),
  ...wildfowlGroups(),

  // {
  //   id: 7,
  //   name: { en: 'Gamefowl', sk: 'Hrabavce' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 8,
  //   name: { en: 'Loons', sk: 'Potáplice' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 9,
  //   name: { en: 'Grebes', sk: 'Potápky' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 10,
  //   name: { en: 'Cormorants', sk: 'Kormorány' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 11,
  //   name: { en: 'Herons, storks, et al.', sk: 'Volavky, bociany, et al.' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 12,
  //   name: { en: 'Rails & crakes', sk: 'Chriaštele' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 13,
  //   name: { en: 'Crane', sk: 'Žeriav' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 14,
  //   name: { en: 'Bustard', sk: 'Drop' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 15,
  //   name: { en: 'Pigeons & doves', sk: 'Holuby a hrdličky' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 16,
  //   name: { en: 'Cuckoo', sk: 'Kukučka' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 17,
  //   name: { en: 'Owls', sk: 'Sovy' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 18,
  //   name: { en: 'Nightjar', sk: 'Lelek' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 19,
  //   name: { en: 'Swifts', sk: 'Dážďovníky' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 20,
  //   name: { en: 'Kingfisher', sk: 'Rybárik' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 21,
  //   name: { en: 'Bee-eaters et al.', sk: 'Včeláriky et al.' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 22,
  //   name: { en: 'Woodpeckers', sk: 'Ďatle' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 23,
  //   name: { en: 'Larks', sk: 'Škovránky' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 24,
  //   name: { en: 'Swallows & martins', sk: 'Lastovičky, belorítky' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 25,
  //   name: { en: 'Pipits & wagtails', sk: 'Labtušky a trasochvosty' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 26,
  //   name: { en: 'Wren & dipper', sk: 'Oriešok a vodnár' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 27,
  //   name: { en: 'Waxwing', sk: 'Chochláč' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 28,
  //   name: { en: 'Accentors', sk: 'Vrchárky' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 29,
  //   name: { en: 'Trushes & chats', sk: 'Drozdy, pŕhľaviare, et al.' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 30,
  //   name: { en: 'Warblers', sk: 'Malé hnedé' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 31,
  //   name: { en: 'Flycatchers', sk: 'Mucháre' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 32,
  //   name: { en: 'Tits et al.', sk: 'Sýkorky et al.' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 33,
  //   name: { en: 'Nuthatch & creepers', sk: 'Brhlík, kôrovníky et al.' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 34,
  //   name: { en: 'Shrikes', sk: 'Strakoše' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 35,
  //   name: { en: 'Crows', sk: 'Krkavcovité' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 36,
  //   name: { en: 'Starlings & oriole', sk: 'Škorce a vlha' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 37,
  //   name: { en: 'Finches & crossbill', sk: 'Stehlíky a krivonos' },
  //   parentGroupId: null,
  // },
  // {
  //   id: 38,
  //   name: { en: 'Buntings', sk: 'Strnádky' },
  //   parentGroupId: null,
  // },
  // ============= SUBGROUPS =============
  // {
  //   id: 701,
  //   name: { en: 'Grouse', sk: 'Tetrovy' },
  //   parentGroupId: 7,
  // },
  // {
  //   id: 702,
  //   name: { en: 'Partridges & pheasants', sk: 'Prepelice, bažanty, et al.' },
  //   parentGroupId: 7,
  // },
  // {
  //   id: 2901,
  //   name: { en: 'Trushes', sk: 'Trushes' },
  //   parentGroupId: 29,
  // },
  // {
  //   id: 2902,
  //   name: { en: 'Wheatears', sk: 'Skaliariky' },
  //   parentGroupId: 29,
  // },
  // {
  //   id: 3001,
  //   name: { en: 'Sylvia warblers', sk: 'Penice' },
  //   parentGroupId: 30,
  // },
  // {
  //   id: 3002,
  //   name: { en: 'Acrocephalus warblers', sk: 'Trsteniariky' },
  //   parentGroupId: 30,
  // },
  // {
  //   id: 3003,
  //   name: { en: 'Locustella warblers', sk: 'Svrčiaky' },
  //   parentGroupId: 30,
  // },
  // {
  //   id: 3004,
  //   name: { en: 'Hippolais warbler', sk: 'Sedmohlások' },
  //   parentGroupId: 30,
  // },
  // {
  //   id: 3005,
  //   name: { en: 'Leaf warblers', sk: 'Kolibiariky' },
  //   parentGroupId: 30,
  // },
  // {
  //   id: 3006,
  //   name: { en: 'Crests', sk: 'Králiky' },
  //   parentGroupId: 30,
  // },
  // {
  //   id: 3701,
  //   name: { en: 'Finches', sk: 'Stehlíky' },
  //   parentGroupId: 37,
  // },
  // {
  //   id: 3702,
  //   name: { en: 'Crossbill', sk: 'Krivonos' },
  //   parentGroupId: 37,
  // },
];

export const species: SpeciesModel[] = [
  ...birdsOfPreySpecies(),
  ...sparrowsSpecies(),
  ...wadersSpecies(),
  ...ternsSpecies(),
  ...gullsSpecies(),
  ...wildfowlSpecies(),
];
