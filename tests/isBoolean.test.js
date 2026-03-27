import { describe, it, expect } from 'vitest'
import isBoolean from '../src/isBoolean.js'

describe('isBoolean', () => {
  it('returns true for true', () => {
    expect(isBoolean(true)).toBe(true)
  })

  it('returns true for false', () => {
    expect(isBoolean(false)).toBe(true)
  })

  it('returns true for Boolean object', () => {
    expect(isBoolean(Object(false))).toBe(true)
  })

  it('returns false for null', () => {
    expect(isBoolean(null)).toBe(false)
  })

  it('returns false for number', () => {
    expect(isBoolean(1)).toBe(false)
  })

  it('returns false for string', () => {
    expect(isBoolean('true')).toBe(false)
  })
})
