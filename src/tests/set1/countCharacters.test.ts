import { expect } from 'vitest'
import { countCharacters } from '../../questions/set1/countCharacters'
import { testImplemented } from '../testUtils'

testImplemented(
  { question: 'set1/countCharacters', name: 'Should return correct characters count!' },
  () => {
  expect(countCharacters("aaabbcddeXeXffffGGGGG")).toMatchObject({
    "a": 3,
    "b": 2,
    "c": 1,
    "d": 2,
    "e": 2,
    "f": 4,
    "G": 5,
    "X": 2
  })
})
