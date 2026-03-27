import { describe, it, expect } from 'vitest'
import camelCase from '../src/camelCase.js'

describe('camelCase', () => {
  // BUG: camelCase returns a leading space because reduce initial value is ' ' instead of ''
  it('converts space-separated words to camelCase', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar')
  })

  it('converts hyphen-separated string to camelCase', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar')
  })

  it('converts underscore-separated string to camelCase', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar')
  })

  it('handles empty string', () => {
    expect(camelCase('')).toBe('')
  })

  it('handles single word', () => {
    expect(camelCase('hello')).toBe('hello')
  })

  it('handles already camelCase string', () => {
    expect(camelCase('helloWorld')).toBe('helloWorld')
  })
})
