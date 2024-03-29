import React from "react";
import { TodoItemProps } from "./TodoItem";
import {
  Typography,
  IconButton,
  ListItem,
  TextField,
  ListItemAvatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
const TodoItem = ({
  editableTodoId,
  todo,
  updateTodo,
  deleteTodo,
  setEditableTodoId,
  handleEditTodo,
}: TodoItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon color="error" />
        </IconButton>
      }
    >
      {editableTodoId !== todo.id && (
        <ListItemAvatar>
          <IconButton onClick={() => setEditableTodoId(todo.id)}>
            <ModeIcon />
          </IconButton>
        </ListItemAvatar>
      )}

      {editableTodoId === todo.id ? (
        <TextField
          fullWidth
          variant="outlined"
          autoFocus
          type="text"
          value={todo.title}
          onChange={(event) => updateTodo(todo.id, event.target.value)}
          onBlur={() => {
            setEditableTodoId(null);
            if (todo.title === "") {
              deleteTodo(todo.id);
            }
          }}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              event.preventDefault();
              setEditableTodoId(null);
              if (todo.title === "") {
              }
            }
          }}
        />
      ) : (
        <Typography
          height={"100%"}
          sx={{ cursor: "text" }}
          width={"100%"}
          variant="body1"
          onClick={() => handleEditTodo(todo.id)}
        >
          {todo.title}
        </Typography>
      )}
    </ListItem>
  );
};

export default TodoItem;
