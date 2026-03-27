import { describe, it, expect } from 'vitest'
import countBy from '../src/countBy.js'

describe('countBy', () => {
  // BUG: new keys are initialized to 0 instead of 1, so counts are off by 1
  it('counts elements by iteratee result', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false }
    ]
    expect(countBy(users, value => value.active)).toEqual({ true: 2, false: 1 })
  })

  it('counts strings by first character', () => {
    expect(countBy(['apple', 'avocado', 'banana'], s => s[0])).toEqual({ a: 2, b: 1 })
  })

  it('counts numbers by Math.floor', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: 1, 6: 2 })
  })

  it('handles empty array', () => {
    expect(countBy([], x => x)).toEqual({})
  })
})
