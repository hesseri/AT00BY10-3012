import { describe, it, expect } from 'vitest'
import defaultToAny from '../src/defaultToAny.js'

describe('defaultToAny', () => {
  it('returns value when it is valid', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1)
  })

  it('returns first valid default', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10)
  })

  it('skips null and returns first non-null default', () => {
    expect(defaultToAny(undefined, null, 20)).toBe(20)
  })

  it('returns last default even if NaN', () => {
    expect(defaultToAny(undefined, null, NaN)).toBeNaN()
  })

  it('returns value 0 without falling to default', () => {
    expect(defaultToAny(0, 10, 20)).toBe(0)
  })
})
