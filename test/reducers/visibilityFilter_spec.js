import expect from 'expect'
import visibilityFilter from '../../src/main/js/reducers/visibilityFilter'

describe('Visibility Filter reducer', () => {

  it('should handle the initial state', () => {
    expect(visibilityFilter(undefined, {})).toEqual('SHOW_ALL')
  })

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(visibilityFilter(undefined, { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' })).toEqual('SHOW_ALL')
  })

})
