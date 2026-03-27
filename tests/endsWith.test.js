import { describe, it, expect } from 'vitest'
import endsWith from '../src/endsWith.js'

describe('endsWith', () => {
  it('returns true when string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true)
  })

  it('returns false when string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false)
  })

  it('uses position to check within substring', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true)
  })

  it('returns false for non-matching target with position', () => {
    expect(endsWith('abc', 'c', 2)).toBe(false)
  })

  it('handles empty target', () => {
    expect(endsWith('abc', '')).toBe(true)
  })

  it('returns false when target longer than string', () => {
    expect(endsWith('ab', 'abc')).toBe(false)
  })
})
