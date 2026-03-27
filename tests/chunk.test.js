import { describe, it, expect } from 'vitest'
import chunk from '../src/chunk.js'

describe('chunk', () => {
  // BUG: resIndex is never incremented, so only the last chunk ends up at index 0
  it('splits array into chunks of given size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
  })

  it('handles uneven split', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
  })

  it('returns empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([])
  })

  it('returns empty array when size is 0', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([])
  })

  it('returns one chunk when size equals array length', () => {
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]])
  })

  it('uses default size of 1', () => {
    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]])
  })

  it('handles null array', () => {
    expect(chunk(null, 2)).toEqual([])
  })
})
