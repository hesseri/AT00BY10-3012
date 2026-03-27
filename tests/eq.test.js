import { describe, it, expect } from 'vitest'
import eq from '../src/eq.js'

describe('eq', () => {
  it('returns true for same object reference', () => {
    const object = { a: 1 }
    expect(eq(object, object)).toBe(true)
  })

  it('returns false for different objects with same content', () => {
    expect(eq({ a: 1 }, { a: 1 })).toBe(false)
  })

  it('returns true for equal primitive strings', () => {
    expect(eq('a', 'a')).toBe(true)
  })

  it('returns false for string primitive vs string object', () => {
    expect(eq('a', Object('a'))).toBe(false)
  })

  it('returns true for NaN compared to NaN', () => {
    expect(eq(NaN, NaN)).toBe(true)
  })

  it('returns true for equal numbers', () => {
    expect(eq(1, 1)).toBe(true)
  })

  it('returns false for different numbers', () => {
    expect(eq(1, 2)).toBe(false)
  })

  it('returns true for null compared to null', () => {
    expect(eq(null, null)).toBe(true)
  })
})
