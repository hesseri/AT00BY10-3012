import { describe, it, expect } from 'vitest'
import capitalize from '../src/capitalize.js'

describe('capitalize', () => {
  it('capitalizes all-uppercase string', () => {
    expect(capitalize('FRED')).toBe('Fred')
  })

  it('capitalizes lowercase string', () => {
    expect(capitalize('fred')).toBe('Fred')
  })

  it('capitalizes mixed-case string', () => {
    expect(capitalize('fReD')).toBe('Fred')
  })

  it('handles empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('handles single character', () => {
    expect(capitalize('a')).toBe('A')
  })

  it('handles null', () => {
    expect(capitalize(null)).toBe('')
  })
})
