import { describe, it, expect } from 'vitest'
import toNumber from '../src/toNumber.js'

describe('toNumber', () => {
  it('returns number as-is', () => {
    expect(toNumber(3.2)).toBe(3.2)
  })

  it('converts numeric string to number', () => {
    expect(toNumber('3.2')).toBe(3.2)
  })

  it('returns NaN for symbol', () => {
    expect(toNumber(Symbol('test'))).toBeNaN()
  })

  it('handles binary string', () => {
    expect(toNumber('0b1010')).toBe(10)
  })

  it('handles octal string', () => {
    expect(toNumber('0o17')).toBe(15)
  })

  it('handles bad hex string', () => {
    expect(toNumber('0x1G')).toBeNaN()
  })

  it('returns Infinity for Infinity', () => {
    expect(toNumber(Infinity)).toBe(Infinity)
  })

  it('handles object with valueOf', () => {
    expect(toNumber({ valueOf: () => 42 })).toBe(42)
  })
})
