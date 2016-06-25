import expect from 'expect'
import todos from '../../src/main/js/reducers/todos'

describe('Todos reducers', () => {

  it ('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([])
  })

  it ('should handle ADD_TODO', () => {
    expect(todos([], { type: 'ADD_TODO', id: 0, text: 'My first TODO' })).toEqual([ { id: 0, text: 'My first TODO', completed: false } ])
  })

  it ('should handle TOGGLE_TODO', () => {
     expect(todos([{ id: 0, text: 'My first TODO', completed: false }], { type: 'TOGGLE_TODO', id: 0 })).toEqual([ { id: 0, text: 'My first TODO', completed: true } ])
  })

})
