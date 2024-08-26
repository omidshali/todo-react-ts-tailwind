import { TodoContextProvider } from "./context/todo-context-provider";
export function App() {
  return (
    <TodoContextProvider>
      <div>To do app</div>
    </TodoContextProvider>
  );
}
