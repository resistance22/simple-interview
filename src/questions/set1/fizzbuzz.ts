
/**
 *
 * Gets and array of numbers returns and object, fizz being the count of multiples of 3, buzz being the count of multiples of 5 and fizzbuzz multiples of both of them.
 * @export
 * @param {string} input
 * @return {*}  {Record<string, number>}
 * 
 * @example
 * 
 * countCharacters([1,2,3,4,5,6,7,8,9,10, 15]): {"fizz": 3, "buzz": 1, "fizzbuzz": 1}
 */
export function fizzBuzz (numbers: number[]) : Record<"fizz" | "buzz" | "fizzbuzz", number> {
  let fizz = 0;
  let buzz = 0;
  let fizzbuzz = 0;

  // Loop through each number in the array
  for (const num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
      fizzbuzz++;
    } else if (num % 3 === 0) {
      fizz++;
    } else if (num % 5 === 0) {
      buzz++;
    }
  }

  // Return the result object
  return { fizz, buzz, fizzbuzz };
}

