import { describe, it, expect } from 'vitest'
import isArguments from '../src/isArguments.js'

describe('isArguments', () => {
  it('returns true for arguments object', () => {
    function getArgs() { return arguments }
    expect(isArguments(getArgs())).toBe(true)
  })

  it('returns false for array', () => {
    expect(isArguments([1, 2, 3])).toBe(false)
  })

  it('returns false for plain object', () => {
    expect(isArguments({ 0: 'a', length: 1 })).toBe(false)
  })

  it('returns false for null', () => {
    expect(isArguments(null)).toBe(false)
  })

  it('returns false for string', () => {
    expect(isArguments('hello')).toBe(false)
  })
})
