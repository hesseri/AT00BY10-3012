import { describe, it, expect } from 'vitest'
import reduce from '../src/reduce.js'

describe('reduce', () => {
  it('sums array of numbers with accumulator', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3)
  })

  it('uses first element as accumulator when none provided', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6)
  })

  it('groups object values by key', () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (acc, value, key) => {
        ;(acc[value] || (acc[value] = [])).push(key)
        return acc
      },
      {}
    )
    expect(result['1'].sort()).toEqual(['a', 'c'])
    expect(result['2']).toEqual(['b'])
  })

  it('handles empty array with accumulator', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0)
  })

  it('maps array with reduce', () => {
    expect(reduce([1, 2, 3], (acc, n) => [...acc, n * 2], [])).toEqual([2, 4, 6])
  })
})
