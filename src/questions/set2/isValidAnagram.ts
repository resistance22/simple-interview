/**
 * Checks if two words are valid anagrams
 *
 * @param {string} word - The original word
 * @param {string} reverse - The word to compare
 * @return {boolean} - True if the words are valid anagrams, false otherwise
 * 
 * @example
 * isValidAnagram("listen", "silent") // true
 * isValidAnagram("hello", "world") // false
 */
export function isValidAnagram(word: string, reverse: string): boolean {
  if (word.length !== reverse.length) return false;

  const sortString = (str: string) => str.split('').sort().join('');
  return sortString(word) === sortString(reverse);
}
