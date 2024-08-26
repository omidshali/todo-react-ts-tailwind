import { useReducer } from "preact/hooks";
import { TodoContext } from "./todo-context";
import { TodoReducer } from "../reducer/todo-reducer";
import { initialState } from "../reducer/todo-reducer";

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodoItem: (item) => dispatch({ type: "create", payload: item }),
        removeTodoItem: (id) => dispatch({ type: "remove", payload: id }),
        markAsCompleted: (id) => dispatch({ type: "complete", payload: id }),
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
