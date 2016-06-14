const todo = (previousState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
        if (previousState.id !== action.id) {
            return previousState
        }
        return Object.assign({}, previousState, { completed: !previousState.completed })
    default:
      return previousState
  }
}

const todos = (previousState = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
            ...previousState,
            todo(undefined, action)
        ]
      case 'TOGGLE_TODO':
        return previousState.map( t => todo(t, action) )
      default:
        return previousState
    }
}

export default todos
