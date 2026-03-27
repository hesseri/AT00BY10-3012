import { describe, it, expect } from 'vitest'
import slice from '../src/slice.js'

describe('slice', () => {
  it('slices from start to end of array', () => {
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4])
  })

  it('slices with start and end', () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3])
  })

  it('handles negative start', () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4])
  })

  it('handles negative end', () => {
    expect(slice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3])
  })

  it('returns empty array for null input', () => {
    expect(slice(null, 0, 2)).toEqual([])
  })

  it('returns full array when no start or end given', () => {
    expect(slice([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('returns empty array when start equals end', () => {
    expect(slice([1, 2, 3], 2, 2)).toEqual([])
  })
})
