import { describe, it, expect } from 'vitest'
import toString from '../src/toString.js'

describe('toString', () => {
  it('returns empty string for null', () => {
    expect(toString(null)).toBe('')
  })

  it('returns empty string for undefined', () => {
    expect(toString(undefined)).toBe('')
  })

  it('preserves sign of -0', () => {
    expect(toString(-0)).toBe('-0')
  })

  it('converts array to comma-joined string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })

  it('returns string as-is', () => {
    expect(toString('abc')).toBe('abc')
  })

  it('converts number to string', () => {
    expect(toString(42)).toBe('42')
  })

  it('converts symbol to string', () => {
    const sym = Symbol('test')
    expect(toString(sym)).toBe('Symbol(test)')
  })
})
