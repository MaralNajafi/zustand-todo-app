"use client";

import TodoItem from "@/components/TodoItem";
import useTodo from "@/hooks/useTodo";
import {
  Button,
  Container,
  Grid,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

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
      <Container maxWidth="sm" sx={{ paddingBlock: "10rem" }}>
        <form onSubmit={handleAddTodo}>
          <Stack direction={"row"} width={"100%"} spacing={"1rem"}>
            <TextField
              fullWidth
              name="todo-title"
              required
              inputRef={inputRef}
              label="Your Todo"
              variant="standard"
            />
            <Button variant="contained" type="submit">
              ADD
            </Button>
          </Stack>
        </form>
        {todos.length ? (
          <List sx={{ mt: "2rem", maxHeight: "30rem", overflowY: "auto" }}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                editableTodoId={editableTodoId}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                setEditableTodoId={setEditableTodoId}
                handleEditTodo={handleEditTodo}
              />
            ))}
          </List>
        ) : (
          <Grid height={"100%"} width={"100%"} mt={"2rem"}>
            <Typography textAlign={"center"} color={"GrayText"}>
              No Todos Yet!
            </Typography>
          </Grid>
        )}
      </Container>
    </main>
  );
}
