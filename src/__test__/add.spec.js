import {add} from '../add'

describe('trying jest config', () => {
  it('should add a to be', () => {
    const result = add(1, 2)
    expect(result).toBe(3)
  })
})
