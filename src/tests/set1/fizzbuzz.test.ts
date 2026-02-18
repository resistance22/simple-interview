import { fizzBuzz } from "../../questions/set1/fizzbuzz";
import { expect } from 'vitest'
import { testImplemented } from '../testUtils'



testImplemented(
  { question: 'set1/fizzbuzz', name: 'Should count correct number of multiplies' },
  () => {
  expect(fizzBuzz([1,2,3,5,15,33,10,25,45])).toMatchObject({
    "fizz": 2,
    "buzz":  3,
    "fizzbuzz": 2
  })
})
