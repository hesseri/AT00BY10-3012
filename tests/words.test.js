import { describe, it, expect } from 'vitest'
import words from '../src/words.js'

describe('words', () => {
  it('splits simple sentence into words', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
  })

  it('uses custom pattern when provided', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
  })

  it('handles camelCase string', () => {
    expect(words('fooBar')).toEqual(['foo', 'Bar'])
  })

  it('handles empty string', () => {
    expect(words('')).toEqual([])
  })

  it('handles string with no words', () => {
    expect(words('---')).toEqual([])
  })

  it('splits unicode word boundaries', () => {
    expect(words('Ångström')).toEqual(['Ångström'])
  })
})
