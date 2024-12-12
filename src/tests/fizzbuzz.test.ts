import { fizzBuzz } from "../questions/fizzbuzz";
import { expect, test } from 'vitest'



test('Should count correct number of multiplies', () => {
  expect(fizzBuzz([1,2,3,5,15,33,10,25,45])).toMatchObject({
    "fizz": 2,
    "buzz":  3,
    "fizzbuzz": 2
  })
})