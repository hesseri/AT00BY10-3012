import { describe, it, expect } from 'vitest'
import every from '../src/every.js'

describe('every', () => {
  it('returns false when predicate fails for some element', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false)
  })

  it('returns true when predicate passes for all elements', () => {
    expect(every([1, 2, 3], n => n > 0)).toBe(true)
  })

  it('returns true for empty array (vacuous truth)', () => {
    expect(every([], Boolean)).toBe(true)
  })

  it('returns false when first element fails predicate', () => {
    expect(every([0, 1, 2], Boolean)).toBe(false)
  })

  it('passes index and array to predicate', () => {
    const calls = []
    every([10, 20], (val, idx, arr) => {
      calls.push({ val, idx, arr })
      return true
    })
    expect(calls[0]).toEqual({ val: 10, idx: 0, arr: [10, 20] })
  })

  it('handles null array', () => {
    expect(every(null, Boolean)).toBe(true)
  })
})
