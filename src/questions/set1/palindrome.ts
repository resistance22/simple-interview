
/**
 *
 * Check if a string is palindrome
 * @export
 * @param {string} input
 * @return {*}  {boolean}
 * 
 * @example
 * 
 * isPalindrome("madam"): true
 * isPalindrome("hello"): false
 */
export function isPalindrome(input: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the string and compare with the original
  const reversedInput = sanitizedInput.split("").reverse().join("");
  
  return sanitizedInput === reversedInput;
}
