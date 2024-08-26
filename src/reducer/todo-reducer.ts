export const initialState: TodoStateType = {
  todos: [],
};

// : Reducer<TodoStateType, TodosActionTypes>
export const TodoReducer = (state: TodoStateType, action: TodosActionTypes) => {
  switch (action.type) {
    case "create":
      return {
        todos: [
          ...state.todos,
          {
            ...action.payload,
            id: Math.floor(Math.random() * 1000),
            completed: false,
          },
        ],
      };
    case "remove":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "complete": {
      const copyOfTodos = [...state.todos];
      const todoIndex = copyOfTodos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      copyOfTodos[todoIndex].completed = action.payload.completed;
      return { todos: copyOfTodos };
    }
    default:
      return state;
  }
};
