import { describe, it, expect } from 'vitest'
import isDate from '../src/isDate.js'

describe('isDate', () => {
  it('returns true for a Date object', () => {
    expect(isDate(new Date())).toBe(true)
  })

  it('returns true for a specific date', () => {
    expect(isDate(new Date('2023-01-01'))).toBe(true)
  })

  it('returns false for a date string', () => {
    expect(isDate('Mon April 23 2012')).toBe(false)
  })

  it('returns false for null', () => {
    expect(isDate(null)).toBe(false)
  })

  it('returns false for a number', () => {
    expect(isDate(1234567890)).toBe(false)
  })

  it('returns false for plain object', () => {
    expect(isDate({})).toBe(false)
  })
})
