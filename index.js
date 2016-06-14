import { createStore } from 'redux'
import todoApp from './src/main/js/reducers'

let store = createStore(todoApp)

import { addTodo, toggleTodo, setVisibilityFilter } from './src/main/js/actions/todo'

/* Log the initial state of the store. */
console.log(store.getState())

/* Log every state change. */
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

/* Test the actions. */
store.dispatch(addTodo('My first TODO!'))
store.dispatch(addTodo('My second TODO!'))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter('COMPLETED'))
