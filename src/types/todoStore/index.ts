export interface Todo {
  id: string;
  title: string;
}
export interface TodoState {
  todos: Todo[];
  add: (todo: Todo) => void;
  update: (id: string, editedTitle: string) => void;
  delete: (id: string) => void;
}
