import { describe, it, expect } from 'vitest'
import defaultTo from '../src/defaultTo.js'

describe('defaultTo', () => {
  it('returns value when it is a valid number', () => {
    expect(defaultTo(1, 10)).toBe(1)
  })

  it('returns default when value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10)
  })

  it('returns default when value is null', () => {
    expect(defaultTo(null, 10)).toBe(10)
  })

  // BUG: defaultTo does not handle NaN - uses == null check which misses NaN
  it('returns default when value is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10)
  })

  it('returns zero when value is 0', () => {
    expect(defaultTo(0, 10)).toBe(0)
  })

  it('returns false when value is false', () => {
    expect(defaultTo(false, true)).toBe(false)
  })

  it('returns empty string when value is empty string', () => {
    expect(defaultTo('', 'default')).toBe('')
  })
})
