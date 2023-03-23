import React from 'https://esm.sh/react'
import { Box, IconButton, List, ListItem, ListItemText } from 'https://esm.sh/@mui/material@5.11.14'
import DeleteIcon from 'https://esm.sh/@mui/icons-material@5.11.11/Delete'

interface TodoListProps {
  todos: Todo[];
  onDelete(id: Todo['id']): void;
}

export interface Todo {
  id: string;
  text: string;
}

export default function TodoList({todos, onDelete}: TodoListProps) {
  if (!todos.length) {
    return <Box textAlign="center" m={4}>No tasks found</Box>
  }

  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
              <DeleteIcon/>
            </IconButton>
          }
        >
          <ListItemText primary={todo.text}/>
        </ListItem>
      ))}
    </List>
  )
}
