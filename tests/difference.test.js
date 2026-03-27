import { describe, it, expect } from 'vitest'
import difference from '../src/difference.js'

describe('difference', () => {
  it('returns values in first array not in second', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1])
  })

  it('returns all values when no overlap', () => {
    expect(difference([1, 2, 3], [4, 5])).toEqual([1, 2, 3])
  })

  it('returns empty array when all values are excluded', () => {
    expect(difference([1, 2], [1, 2])).toEqual([])
  })

  it('handles multiple exclusion arrays', () => {
    expect(difference([1, 2, 3, 4], [1], [3])).toEqual([2, 4])
  })

  it('returns empty array for non-array first arg', () => {
    expect(difference('abc', [1, 2])).toEqual([])
  })

  it('handles empty first array', () => {
    expect(difference([], [1, 2])).toEqual([])
  })
})
