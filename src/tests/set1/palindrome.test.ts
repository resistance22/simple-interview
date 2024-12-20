import { expect, test } from 'vitest'
import { isPalindrome } from '../../questions/set1/palindrome'

test('aabbaa should be palindrome', () => {
  expect(isPalindrome("aabbaa")).toBe(true)
})

test('aabbb should not be palindrome', () => {
  expect(isPalindrome("aaabab")).toBe(false)
})

test('madam should be palindrome', () => {
  expect(isPalindrome("madam")).toBe(true)
})