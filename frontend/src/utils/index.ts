export const replaceInitialsToCapitals = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}