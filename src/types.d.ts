import React from "preact/compat";

export {};

declare global {
  type TodoType = {
    id: number;
    title: string;
    priority: 0 | 1 | 2 | 3 | 4;
    completed: boolean;
  };
}

declare global {
  type TodoStateType = {
    todos: TodoType[];
  };
}
declare global {
  type TodoContextProviderProps = {
    children: React.ReactNode;
  };
}
declare global {
  type CreateActionType = {
    type: "create";
    payload: Omit<TodoType, "id" | "completed">;
  };
}
declare global {
  type RemoveActionType = {
    type: "remove";
    payload: number;
  };
}
declare global {
  type CompleteActionType = {
    type: "complete";
    payload: { id: number; completed: boolean };
  };
}

declare global {
  type TodosActionTypes =
    | CreateActionType
    | RemoveActionType
    | CompleteActionType;
}
declare global {
  type TodoContextType = {
    todos: TodoType[];
    addTodoItem: (item: CreateActionType["payload"]) => void;
    removeTodoItem: (id: number) => void;
    markAsCompleted: (todo: CompleteActionType["payload"]) => void;
  };
}
