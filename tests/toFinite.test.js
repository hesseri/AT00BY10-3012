import { describe, it, expect } from 'vitest'
import toFinite from '../src/toFinite.js'

describe('toFinite', () => {
  it('returns a decimal number as-is', () => {
    expect(toFinite(3.2)).toBe(3.2)
  })

  it('converts Infinity to max integer', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308)
  })

  it('converts -Infinity to negative max integer', () => {
    expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308)
  })

  it('converts string to finite number', () => {
    expect(toFinite('3.2')).toBe(3.2)
  })

  it('returns 0 for falsy values', () => {
    expect(toFinite(null)).toBe(0)
    expect(toFinite(undefined)).toBe(0)
    expect(toFinite('')).toBe(0)
  })

  it('preserves -0', () => {
    expect(toFinite(-0)).toBe(-0)
  })
})
