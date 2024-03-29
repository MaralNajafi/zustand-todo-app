import { TodoState } from "@/types/todoStore";
import { create } from "zustand";

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  add: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  update: (id, editedTitle) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title: editedTitle } : todo
      ),
    })),
  delete: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
