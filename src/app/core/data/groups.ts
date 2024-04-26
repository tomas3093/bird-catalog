import { GroupItem } from '../services/storage.model';

export const groups: GroupItem[] = [
  // ============= MAINGROUPS ============
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
    id: 3,
    name: { en: 'Waders', sk: 'Bahniaky' },
    parentGroupId: null,
  },
  {
    id: 4,
    name: { en: 'Terns', sk: 'Rybáre' },
    parentGroupId: null,
  },
  // ============= SUBGROUPS =============
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
  {
    id: 401,
    name: { en: 'Terns', sk: 'Rybáre' },
    parentGroupId: 4,
  },
  {
    id: 402,
    name: { en: 'Marsh terns', sk: 'Čoríky' },
    parentGroupId: 4,
  },
];
