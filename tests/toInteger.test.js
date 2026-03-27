import { describe, it, expect } from 'vitest'
import toInteger from '../src/toInteger.js'

describe('toInteger', () => {
  it('truncates decimal to integer', () => {
    expect(toInteger(3.2)).toBe(3)
  })

  it('converts Number.MIN_VALUE to 0', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0)
  })

  it('converts Infinity to max integer', () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308)
  })

  it('converts string to integer', () => {
    expect(toInteger('3.2')).toBe(3)
  })

  it('returns 0 for null', () => {
    expect(toInteger(null)).toBe(0)
  })

  it('returns negative integer', () => {
    expect(toInteger(-5.9)).toBe(-5)
  })
})
