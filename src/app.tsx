import { AddItem } from "./components/add-item";
import { RenderItems } from "./components/render-items";
import { TodoContextProvider } from "./context/todo-context-provider";
export function App() {
  return (
    <TodoContextProvider>
      <div>
        <RenderItems />
        <AddItem />
      </div>
    </TodoContextProvider>
  );
}
