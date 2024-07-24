/**
 * Returns image URL according to specified asset ID from Macaulay library
 * @param assetId
 * @param fullSize
 * @returns
 */
export const macaulayImgAssetUrl = (assetId: string, fullSize: boolean): string => {
  const url = 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/' + assetId;
  return fullSize ? `${url}/1200` : url;
};

/**
 * Returns main image URL from species asset list
 * @param speciesImageAssets
 * @param fullSize
 * @returns
 */
export const speciesMainImage = (speciesImageAssets: string[], fullSize: boolean): string => {
  if (!speciesImageAssets || speciesImageAssets.length <= 0) {
    throw Error('Image assets not available.');
  }

  return macaulayImgAssetUrl(speciesImageAssets[0], fullSize);
};

/**
 * Remove diacritics and converts string to lower case for better use in comparision
 * @param value
 * @returns
 */
export const normalizeString = (value: string): string => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};
