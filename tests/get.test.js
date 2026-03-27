import { describe, it, expect } from 'vitest'
import get from '../src/get.js'

describe('get', () => {
  const object = { a: [{ b: { c: 3 } }] }

  it('gets value at string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3)
  })

  it('gets value at array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
  })

  it('returns default value for missing path', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default')
  })

  it('returns undefined when path missing and no default', () => {
    expect(get(object, 'x.y.z')).toBeUndefined()
  })

  it('handles null object', () => {
    expect(get(null, 'a.b', 'fallback')).toBe('fallback')
  })

  it('gets top-level property', () => {
    expect(get({ a: 1 }, 'a')).toBe(1)
  })
})
