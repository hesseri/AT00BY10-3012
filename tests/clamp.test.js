import { describe, it, expect } from 'vitest'
import clamp from '../src/clamp.js'

describe('clamp', () => {
  // BUG: comparison logic is inverted - clamp(5, 0, 10) returns 0 instead of 5
  it('returns number when within bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5)
  })

  it('clamps to lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
  })

  it('clamps to upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5)
  })

  it('returns lower bound when equal', () => {
    expect(clamp(-5, -5, 5)).toBe(-5)
  })

  it('returns upper bound when equal', () => {
    expect(clamp(5, -5, 5)).toBe(5)
  })

  it('handles zero bounds', () => {
    expect(clamp(0, 0, 0)).toBe(0)
  })
})
