import { expect } from 'vitest'
import { search } from '../../questions/set1/search'
import { testImplemented } from '../testUtils'

testImplemented(
  { question: 'set1/search', name: 'Find 8 inside a sorted array' },
  () => {
  expect(search(8, [1,2,3,4,5,6,7,8])).toBe(7)
})

testImplemented(
  { question: 'set1/search', name: 'Find 4 inside a sorted array' },
  () => {
  expect(search(4, [1,2,3,4,5,6,7,8])).toBe(3)
})

testImplemented(
  { question: 'set1/search', name: 'Should return null' },
  () => {
  expect(search(12, [1,2,3,4,5,6,7,8])).toBe(null)
})
