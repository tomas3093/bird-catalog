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
