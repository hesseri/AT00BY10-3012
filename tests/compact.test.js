import { describe, it, expect } from 'vitest'
import compact from '../src/compact.js'

describe('compact', () => {
  // BUG: resIndex starts at -1, so first truthy value is stored at index -1
  it('removes falsy values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
  })

  it('returns empty array for all-falsy input', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([])
  })

  it('returns same values if all truthy', () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('handles empty array', () => {
    expect(compact([])).toEqual([])
  })

  it('keeps objects and arrays', () => {
    expect(compact([0, {}, [], false])).toEqual([{}, []])
  })
})
