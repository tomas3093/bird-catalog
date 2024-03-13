import { DataItem } from './storage.model';

/**
 * Returns image URL according to specified asset ID from Macaulay library
 * @param assetId
 * @param fullSize
 * @returns
 */
const macaulayImgAssetUrl = (assetId: string, fullSize: boolean): string => {
  const url =
    'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/' + assetId;
  return fullSize ? `${url}/1200` : url;
};

/**
 * Returns main image URL from species asset list
 * @param speciesImageAssets
 * @param fullSize
 * @returns
 */
export const speciesMainImage = (
  speciesImageAssets: string[],
  fullSize: boolean
): string => {
  if (!speciesImageAssets || speciesImageAssets.length <= 0) {
    throw Error('Image assets not available.');
  }

  return macaulayImgAssetUrl(speciesImageAssets[0], fullSize);
};

export const data: DataItem[] = [
  {
    id: 'eutspa',
    name: {
      latin: 'Passer montanus',
      en: 'Eurasian tree sparrow',
      sk: 'Vrabec poľný',
    },
    habitats: ['field-steppe'],
    imageAssets: [
      { assetId: '219798061', metadata: 'adult' },
      { assetId: '32123821', metadata: 'adult' },
      { assetId: '189571141', metadata: 'adult' },
      { assetId: '249362541', metadata: 'juvenile' },
      { assetId: '83947671', metadata: 'flock' },
    ],
    length: { from: 0, to: 0 },
    wingspan: { from: 0, to: 0 },
    breedingInSk: true,
    monthsPresentInSk: { from: 0, to: 0 },
  },
  {
    id: 'houspa',
    name: {
      latin: 'Passer domesticus',
      en: 'House sparrow',
      sk: 'Vrabec domový',
    },
    habitats: ['urban'],
    imageAssets: [
      { assetId: '51357991', metadata: 'breeding male' },
      { assetId: '69514291', metadata: 'female' },
      { assetId: '41624001', metadata: 'nonbreeding/immature' },
      { assetId: '93464491', metadata: 'breeding male' },
      { assetId: '161700291', metadata: 'juvenile' },
    ],
    length: { from: 0, to: 0 },
    wingspan: { from: 0, to: 0 },
    breedingInSk: true,
    monthsPresentInSk: { from: 0, to: 0 },
  },
];
