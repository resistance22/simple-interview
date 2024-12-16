
/**
 *
 * A function for counting characters
 * @export
 * @param {string} input
 * @return {*}  {Record<string, number>}
 * 
 * @example
 * 
 * countCharacters("aabbcc"): {"a": 2, "b": 2, "c": 2}
 */
export function countCharacters(input: string): Record<string, number>
{
  let carObj: Record<string, number> = {}
  for (let i = 0; i < input.length; i++) {
    if (carObj[input[i]] == undefined) {
      carObj[input[i]] = 1;
    } else
    {
      carObj[input[i]] += 1;
    }
  }

  return carObj;
}

