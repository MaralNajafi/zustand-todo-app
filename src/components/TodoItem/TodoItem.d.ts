import Todo from "@/types/todoStore";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface TodoItemProps {
  editableTodoId: srting | null;
  todo: Todo;
  updateTodo: (id: string, editedTitle: string) => void;
  deleteTodo: (id: string) => void;
  setEditableTodoId: Dispatch<SetStateAction<string | null>>;
  handleEditTodo: (id: string) => void;
}
