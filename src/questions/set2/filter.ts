type Fn = (number: number, index: number) => boolean


/**
 * 
 * @param arr 
 * @param fn 
 * 
 * @example
 * filter([1,12,22,4, 9], (val, index) => val > 10): [12, 22]
 * filter([1,2,3,4], (val, index) => index < 2): [1,2,3]
 */
export function filter(arr: number[], fn: Fn): number[] {
  throw new Error('Not Implemented!')
}