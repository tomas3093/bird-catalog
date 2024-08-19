import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId = 'tits-et-al';

const data: GroupData = {
  name: { en: 'Tits et al.', sk: 'Sýkorky et al.' },
  species: [
    {
      name: {
        latin: 'Parus major',
        localized: {
          en: 'Great Tit',
          sk: 'Sýkorka veľká',
        },
      },
      imageAssets: [
        { assetId: '146576841', metadata: 'adult' },
        { assetId: '44289741', metadata: 'adult' },
        { assetId: '31001221', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Periparus ater',
        localized: {
          en: 'Coal Tit',
          sk: 'Sýkorka uhliarka',
        },
      },
      imageAssets: [
        { assetId: '70455821', metadata: 'adult' },
        { assetId: '80677661', metadata: 'juvenile' },
        { assetId: '65123601', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Cyanistes caeruleus',
        localized: {
          en: 'Eurasian Blue Tit',
          sk: 'Sýkorka belasá',
        },
      },
      imageAssets: [
        { assetId: '42112131', metadata: 'adult' },
        { assetId: '40629051', metadata: 'adult' },
        { assetId: '461341221', metadata: 'juvenile' },
        { assetId: '35462131', metadata: 'adult' },
        { assetId: '46187571', metadata: 'adult' },
      ],
    },
    {
      name: {
        latin: 'Lophophanes cristatus',
        localized: {
          en: 'Crested Tit',
          sk: 'Sýkorka chochlatá',
        },
      },
      imageAssets: [
        { assetId: '128664761', metadata: 'unknown' },
        { assetId: '25701251', metadata: 'unknown' },
        { assetId: '44690511', metadata: 'unknown' },
        { assetId: '42105501', metadata: 'unknown' },
        { assetId: '23292231', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Poecile palustris',
        localized: {
          en: 'Marsh Tit',
          sk: 'Sýkorka hôrna',
        },
      },
      imageAssets: [
        { assetId: '128664871', metadata: 'unknown' },
        { assetId: '34072681', metadata: 'unknown' },
        { assetId: '203860411', metadata: 'unknown' },
        { assetId: '27628091', metadata: 'unknown' },
        { assetId: '36573521', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Poecile montanus',
        localized: {
          en: 'Willow Tit',
          sk: 'Sýkorka čiernohlavá',
        },
      },
      imageAssets: [
        { assetId: '44341321', metadata: 'unknown' },
        { assetId: '36104681', metadata: 'unknown' },
        { assetId: '31497831', metadata: 'unknown' },
        { assetId: '29847431', metadata: 'unknown' },
        { assetId: '40090681', metadata: 'unknown' },
      ],
    },
    {
      name: {
        latin: 'Aegithalos caudatus',
        localized: {
          en: 'Long-tailed Tit',
          sk: 'Mlynárka dlhochvostá',
        },
      },
      imageAssets: [
        { assetId: '424325641', metadata: 'adult' },
        { assetId: '66109911', metadata: 'adult' },
        { assetId: '185474621', metadata: 'adult' },
        { assetId: '529903321', metadata: 'adult' },
        { assetId: '443676731', metadata: 'juvenile' },
      ],
    },
    {
      name: {
        latin: 'Panurus biarmicus',
        localized: {
          en: 'Bearded Tit',
          sk: 'Fúzatka trstinová',
        },
      },
      imageAssets: [
        { assetId: '212674881', metadata: 'adult male' },
        { assetId: '182897631', metadata: 'adult female' },
        { assetId: '65220331', metadata: 'immature male' },
        { assetId: '205135801', metadata: 'immature female' },
        { assetId: '204359721', metadata: 'adult male' },
      ],
    },
    {
      name: {
        latin: 'Remiz pendulinus',
        localized: {
          en: 'Eurasian Penduline Tit',
          sk: 'Kúdeľníčka lužná',
        },
      },
      imageAssets: [
        { assetId: '28714421', metadata: 'adult' },
        { assetId: '20790311', metadata: 'adult' },
        { assetId: '36738391', metadata: 'immature' },
        { assetId: '22539391', metadata: 'juvenile' },
        { assetId: '44521191', metadata: 'adult' },
      ],
    },
  ],
};

export const titsEtAlGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const titsEtAlSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
