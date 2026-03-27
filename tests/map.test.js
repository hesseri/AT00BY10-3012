import { describe, it, expect } from 'vitest'
import map from '../src/map.js'

describe('map', () => {
  it('maps array of numbers with square function', () => {
    expect(map([4, 8], n => n * n)).toEqual([16, 64])
  })

  it('maps array of strings', () => {
    expect(map(['a', 'b', 'c'], s => s.toUpperCase())).toEqual(['A', 'B', 'C'])
  })

  it('returns empty array for empty input', () => {
    expect(map([], n => n * 2)).toEqual([])
  })

  it('handles null array', () => {
    expect(map(null, n => n)).toEqual([])
  })

  it('passes index and array to iteratee', () => {
    const calls = []
    map([10, 20], (val, idx, arr) => {
      calls.push({ val, idx, arr })
      return val
    })
    expect(calls[0]).toEqual({ val: 10, idx: 0, arr: [10, 20] })
  })
})
