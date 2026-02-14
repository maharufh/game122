function todoReducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        return {
          todos: [...state.todos, action.payload]
        };
  
      case "DELETE_TODO":
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
  
      case "TOGGLE_TODO":
        return {
          todos: state.todos.map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
  
      case "EDIT_TODO":
        return {
          todos: state.todos.map(todo =>
            todo.id === action.payload.id
              ? { ...todo, text: action.payload.text }
              : todo
          )
        };
  
      case "SET_TODOS":
        return {
          todos: action.payload
        };
  
      default:
        return state;
    }
  }
  
  export default todoReducer;
  