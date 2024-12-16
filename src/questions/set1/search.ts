
/**
 * Find number in a sorted array
 *
 * @export
 * @param {number} candidate
 * @param {number[]} numbers
 * @return {*}  {(number | null)}
 */
export function search(candidate: number, numbers: number[]): number | null {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] === candidate) {
      return mid;
    } else if (numbers[mid] < candidate) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}
