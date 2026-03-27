import { describe, it, expect } from 'vitest'
import filter from '../src/filter.js'

describe('filter', () => {
  // BUG: result is initialized as [[]] instead of [] causing wrong output
  it('filters active users', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ]
    expect(filter(users, ({ active }) => active)).toEqual([{ user: 'barney', active: true }])
  })

  it('filters numbers greater than threshold', () => {
    expect(filter([1, 2, 3, 4], n => n > 2)).toEqual([3, 4])
  })

  it('returns empty array when no element passes predicate', () => {
    expect(filter([1, 2, 3], n => n > 10)).toEqual([])
  })

  it('returns all elements when all pass predicate', () => {
    expect(filter([1, 2, 3], n => n > 0)).toEqual([1, 2, 3])
  })

  it('handles empty array', () => {
    expect(filter([], Boolean)).toEqual([])
  })

  it('handles null', () => {
    expect(filter(null, Boolean)).toEqual([])
  })
})
