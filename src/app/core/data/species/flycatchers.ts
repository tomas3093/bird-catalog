import { generateGroups, generateSpecies } from '../../misc/util';
import { GroupName } from '../../model/group-name';
import { GroupData, SpeciesGroupModel, SpeciesModel } from '../model';

const groupId: GroupName = 'flycatchers';

const data: GroupData = {
  name: { en: 'Flycatchers', sk: 'Mucháre' },
  species: [
    {
      name: {
        latin: 'Muscicapa striata',
        localized: {
          en: 'Spotted Flycatcher',
          sk: 'Muchár sivý',
        },
      },
      imageAssets: [
        { assetId: '181348861', metadata: 'adult' },
        { assetId: '43367671', metadata: 'adult' },
        { assetId: '107521541', metadata: 'juvenile' },
        { assetId: '29461971', metadata: 'adult' },
        { assetId: '223781691', metadata: 'adult' },
      ],
      skAbundance: 'common',
      movementPattern: 'migratory',
      similarSpecies: {
        adult: [{ metadata: 'female', species: 'Ficedula hypoleuca' }],
        juvenile: [
          { metadata: 'juvenile', species: 'Erithacus rubecula' },
          { metadata: 'adult female', species: 'Ficedula hypoleuca' },
        ],
      },
    },
    {
      name: {
        latin: 'Ficedula parva',
        localized: {
          en: 'Red-breasted Flycatcher',
          sk: 'Muchárik malý',
        },
      },
      imageAssets: [
        { assetId: '140603461', metadata: 'adult male' },
        { assetId: '40420641', metadata: 'female/immature male' },
        { assetId: '37593321', metadata: 'adult male' },
        { assetId: '48318141', metadata: 'female/immature male' },
        { assetId: '42410361', metadata: 'adult male' },
      ],
      skAbundance: 'occasional',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: [{ metadata: 'adult', species: 'Erithacus rubecula' }],
      },
    },
    {
      name: {
        latin: 'Ficedula hypoleuca',
        localized: {
          en: 'European Pied Flycatcher',
          sk: 'Muchárik čiernohlavý',
        },
      },
      imageAssets: [
        { assetId: '30638911', metadata: 'breeding male' },
        { assetId: '176302801', metadata: 'nonbreeding adult' },
        { assetId: '34675141', metadata: 'breeding male' },
        { assetId: '40767031', metadata: 'breeding male' },
        { assetId: '174477151', metadata: 'juvenile' },
      ],
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: ['Ficedula albicollis'],
        adultFemale: ['Ficedula albicollis'],
      },
    },
    {
      name: {
        latin: 'Ficedula albicollis',
        localized: {
          en: 'Collared Flycatcher',
          sk: 'Muchárik bielokrký',
        },
      },
      imageAssets: [
        { assetId: '63455131', metadata: 'breeding male' },
        { assetId: '63596721', metadata: 'nonbreeding adult' },
        { assetId: '38428761', metadata: 'breeding male' },
        { assetId: '28870481', metadata: 'nonbreeding adult' },
        { assetId: '28870481', metadata: 'nonbreeding adult' },
      ],
      skAbundance: 'uncommon',
      movementPattern: 'migratory',
      similarSpecies: {
        adultMale: ['Ficedula hypoleuca'],
        adultFemale: ['Ficedula hypoleuca'],
      },
    },
  ],
};

export const flycatchersGroups = function (): SpeciesGroupModel[] {
  return generateGroups(data, groupId);
};

export const flycatchersSpecies = function (): SpeciesModel[] {
  return generateSpecies(data, groupId);
};
