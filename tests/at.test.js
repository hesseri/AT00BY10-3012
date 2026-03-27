import { describe, it, expect } from 'vitest'
import at from '../src/at.js'

describe('at', () => {
  it('gets values at given paths', () => {
    const obj = { a: [{ b: { c: 3 } }, 4] }
    expect(at(obj, ['a[0].b.c', 'a[1]'])).toEqual([3, 4])
  })

  it('gets a single path value', () => {
    const obj = { x: 1, y: 2 }
    expect(at(obj, 'x')).toEqual([1])
  })

  it('returns undefined for missing paths', () => {
    const obj = { a: 1 }
    expect(at(obj, 'b')).toEqual([undefined])
  })

  it('handles multiple paths as rest args', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(at(obj, 'a', 'c')).toEqual([1, 3])
  })

  it('handles empty paths array', () => {
    const obj = { a: 1 }
    expect(at(obj, [])).toEqual([])
  })
})
