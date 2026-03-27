import { describe, it, expect } from 'vitest'
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {
  it('returns true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  it('returns true for boolean', () => {
    expect(isEmpty(true)).toBe(true)
  })

  it('returns true for number', () => {
    expect(isEmpty(1)).toBe(true)
  })

  it('returns false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  it('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('returns false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false)
  })

  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true)
  })

  it('returns false for non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  it('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('returns false for non-empty Map', () => {
    expect(isEmpty(new Map([['a', 1]]))).toBe(false)
  })

  it('returns true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true)
  })
})
