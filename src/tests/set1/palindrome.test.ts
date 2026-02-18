import { expect } from 'vitest'
import { isPalindrome } from '../../questions/set1/palindrome'
import { testImplemented } from '../testUtils'

testImplemented(
  { question: 'set1/palindrome', name: 'aabbaa should be palindrome' },
  () => {
  expect(isPalindrome("aabbaa")).toBe(true)
})

testImplemented(
  { question: 'set1/palindrome', name: 'aabbb should not be palindrome' },
  () => {
  expect(isPalindrome("aaabab")).toBe(false)
})

testImplemented(
  { question: 'set1/palindrome', name: 'madam should be palindrome' },
  () => {
  expect(isPalindrome("madam")).toBe(true)
})
