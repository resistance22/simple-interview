import { isValidAnagram } from "../../questions/set2/isValidAnagram"
import { expect, test } from 'vitest'

test('listen, silent', () => {
  const res = isValidAnagram('listen', 'silent')
  expect(res).toBe(true)
})

test('hello, world', () => {
  const res = isValidAnagram('hello', 'world')
  expect(res).toBe(false)
})

