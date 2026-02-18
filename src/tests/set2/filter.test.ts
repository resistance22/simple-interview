import { filter } from "../../questions/set2/filter";
import { expect } from 'vitest'
import { testImplemented } from '../testUtils'



testImplemented(
  { question: 'set2/filter', name: 'Multiples of three' },
  () => {
  const filterFN = (num: number) => num % 3 === 0
  const res = filter([1,2,3,5,15,33,10,25,45], filterFN)
  expect(res).toHaveLength(4)
  expect(res).not.toContain(1)
  expect(res).not.toContain(2)
  expect(res).not.toContain(5)
  expect(res).not.toContain(10)
  expect(res).not.toContain(25)
})

testImplemented(
  { question: 'set2/filter', name: 'Get First Element' },
  () => {
  const filterFN = (_: number, index: number) => {
    return index === 0
  } 
  const res = filter([1,2,3,5,15,33,10,25,45], filterFN)
  expect(res).toHaveLength(1)
  expect(res).toContain(1)
})

testImplemented(
  { question: 'set2/filter', name: 'Get index multiples of 2' },
  () => {
  const filterFN = (_: number, index: number) => index % 2 === 0  
  const res = filter([1,2,3,5,15,33,10,25,45], filterFN)
  expect(res).toHaveLength(5)
  expect(res).toContain(1)
  expect(res).toContain(3)
  expect(res).toContain(15)
  expect(res).toContain(10)
  expect(res).toContain(45)
})
