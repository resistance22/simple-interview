import { isValidAnagram } from "../../questions/set2/isValidAnagram"
import { expect } from 'vitest'
import { testImplemented } from '../testUtils'

testImplemented(
  { question: 'set2/isValidAnagram', name: 'listen, silent' },
  () => {
  const res = isValidAnagram('listen', 'silent')
  expect(res).toBe(true)
})

testImplemented(
  { question: 'set2/isValidAnagram', name: 'hello, world' },
  () => {
  const res = isValidAnagram('hello', 'world')
  expect(res).toBe(false)
})
