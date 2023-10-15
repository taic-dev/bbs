export const replaceInitialsToCapitals = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export const htmlExclusionsAndTextExcerpts = (text: string, textNum: number) => {
  const htmlExclusions = text.match(/[^\<\>]+(?=\<[^\<\>]+\>)|[^\<\>]+$/g);
  return (htmlExclusions as string[]).join('').slice(0, textNum)
}