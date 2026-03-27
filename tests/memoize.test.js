import { describe, it, expect, vi } from 'vitest'
import memoize from '../src/memoize.js'

describe('memoize', () => {
  it('returns cached result on repeated calls with same arg', () => {
    const fn = vi.fn(n => n * 2)
    const memoized = memoize(fn)
    expect(memoized(5)).toBe(10)
    expect(memoized(5)).toBe(10)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('computes new result for different arg', () => {
    const fn = vi.fn(n => n * 2)
    const memoized = memoize(fn)
    expect(memoized(5)).toBe(10)
    expect(memoized(6)).toBe(12)
    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('uses custom resolver for cache key', () => {
    const fn = vi.fn((a, b) => a + b)
    const memoized = memoize(fn, (a, b) => `${a}-${b}`)
    expect(memoized(1, 2)).toBe(3)
    expect(memoized(1, 2)).toBe(3)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('exposes cache property', () => {
    const memoized = memoize(n => n)
    memoized(1)
    expect(memoized.cache.has(1)).toBe(true)
  })

  it('throws TypeError when func is not a function', () => {
    expect(() => memoize(null)).toThrow(TypeError)
  })

  it('throws TypeError when resolver is not a function', () => {
    expect(() => memoize(n => n, 'notAFunction')).toThrow(TypeError)
  })
})
