import expect from 'expect'
import * as actions from '../../src/main/js/actions/todo'

describe('Todo actions', () => {

  it('addTodo should create an ADD_TODO action', () => {
    expect(actions.addTodo('My first TODO')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'My first TODO'
    })
  })

  it('setVisibilityFilter should create a SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('ALL')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'ALL'
    })
  })

  it('toggleTodo should create a TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(0)).toEqual({
      type: 'TOGGLE_TODO',
      id: 0
    })
  })

})
