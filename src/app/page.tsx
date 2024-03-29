"use client";

import useTodo from "@/hooks/useTodo";

export default function Home() {
  const {
    todos,
    editableTodoId,
    setEditableTodoId,
    handleAddTodo,
    deleteTodo,
    updateTodo,
    handleEditTodo,
    inputRef,
  } = useTodo();
  return (
    <main>
      <form onSubmit={handleAddTodo}>
        <input
          name="todo-title"
          required
          ref={inputRef}
          placeholder="What are you up to?"
        />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editableTodoId === todo.id ? (
              <input
                autoFocus
                type="text"
                value={todo.title}
                onChange={(event) => updateTodo(todo.id, event.target.value)}
                onBlur={() => {
                  setEditableTodoId(null);
                  deleteTodo(todo.id);
                }}
                onKeyDown={(event) => {
                  if (event.key == "Enter") {
                    event.preventDefault();
                    setEditableTodoId(null);
                  }
                }}
              />
            ) : (
              <span onClick={() => handleEditTodo(todo.id)}>{todo.title}</span>
            )}
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
