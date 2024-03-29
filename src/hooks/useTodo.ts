import { useTodoStore } from "@/store/todo";
import React, { useRef, useState } from "react";

const useTodo = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const {
    todos,
    add: addTodo,
    delete: deleteTodo,
    update: updateTodo,
  } = useTodoStore();
  const [editableTodoId, setEditableTodoId] = useState<string | null>(null);

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const todoTitle = formData.get("todo-title")?.toString();
    if (todoTitle) {
      if (inputRef.current) inputRef.current.value = "";
      addTodo({ id: new Date().getTime().toString(), title: todoTitle });
    } else {
      alert("Enter a todo before submitting!");
    }
  };

  const handleEditTodo = (id: string) => {
    setEditableTodoId(id);
  };
  return {
    todos,
    editableTodoId,
    setEditableTodoId,
    handleAddTodo,
    deleteTodo,
    updateTodo,
    handleEditTodo,
    inputRef,
  };
};

export default useTodo;
