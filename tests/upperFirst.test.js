import { describe, it, expect } from 'vitest'
import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => {
  it('uppercases first character of lowercase string', () => {
    expect(upperFirst('fred')).toBe('Fred')
  })

  it('leaves rest of string unchanged', () => {
    expect(upperFirst('FRED')).toBe('FRED')
  })

  it('handles empty string', () => {
    expect(upperFirst('')).toBe('')
  })

  it('handles single character', () => {
    expect(upperFirst('a')).toBe('A')
  })

  it('handles string starting with number', () => {
    expect(upperFirst('1abc')).toBe('1abc')
  })
})
