import { describe, it, expect } from 'vitest'
import castArray from '../src/castArray.js'

describe('castArray', () => {
  it('wraps a number in an array', () => {
    expect(castArray(1)).toEqual([1])
  })

  it('wraps an object in an array', () => {
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }])
  })

  it('wraps a string in an array', () => {
    expect(castArray('abc')).toEqual(['abc'])
  })

  it('wraps null in an array', () => {
    expect(castArray(null)).toEqual([null])
  })

  it('wraps undefined in an array', () => {
    expect(castArray(undefined)).toEqual([undefined])
  })

  // BUG: castArray() with no arguments should return [] but returns [undefined]
  it('returns empty array when called with no arguments', () => {
    expect(castArray()).toEqual([])
  })

  it('returns the same array if value is already an array', () => {
    const arr = [1, 2, 3]
    expect(castArray(arr)).toBe(arr)
  })
})
