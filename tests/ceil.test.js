import { describe, it, expect } from 'vitest'
import ceil from '../src/ceil.js'

describe('ceil', () => {
  it('rounds up a decimal number', () => {
    expect(ceil(4.006)).toBe(5)
  })

  it('rounds up with precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01)
  })

  it('rounds up with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100)
  })

  it('returns same value for integer', () => {
    expect(ceil(4)).toBe(4)
  })

  it('handles negative number', () => {
    expect(ceil(-4.006)).toBe(-4)
  })

  it('handles zero', () => {
    expect(ceil(0)).toBe(0)
  })
})
