import { describe, it, expect } from 'vitest'
import drop from '../src/drop.js'

describe('drop', () => {
  it('drops first element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3])
  })

  it('drops first n elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3])
  })

  it('returns empty array when n exceeds length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([])
  })

  it('returns all elements when n is 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3])
  })

  it('handles empty array', () => {
    expect(drop([], 1)).toEqual([])
  })

  it('handles null', () => {
    expect(drop(null, 1)).toEqual([])
  })
})
