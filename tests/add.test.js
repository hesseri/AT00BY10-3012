import { describe, it, expect } from 'vitest'
import add from '../src/add.js'

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10)
  })

  it('adds negative numbers', () => {
    expect(add(-6, -4)).toBe(-10)
  })

  it('adds positive and negative number', () => {
    expect(add(10, -3)).toBe(7)
  })

  it('adds zero', () => {
    expect(add(0, 0)).toBe(0)
  })

  it('returns second value when first is undefined', () => {
    expect(add(undefined, 5)).toBe(5)
  })

  it('returns first value when second is undefined', () => {
    expect(add(5, undefined)).toBe(5)
  })
})
