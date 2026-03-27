import { describe, it, expect } from 'vitest'
import divide from '../src/divide.js'

describe('divide', () => {
  // BUG: implementation uses divisor/divisor instead of dividend/divisor - always returns 1
  it('divides two numbers', () => {
    expect(divide(6, 4)).toBe(1.5)
  })

  it('divides to whole number', () => {
    expect(divide(10, 2)).toBe(5)
  })

  it('handles division resulting in zero', () => {
    expect(divide(0, 5)).toBe(0)
  })

  it('handles negative dividend', () => {
    expect(divide(-10, 2)).toBe(-5)
  })

  it('returns 1 when undefined args used', () => {
    expect(divide(undefined, undefined)).toBe(1)
  })
})
