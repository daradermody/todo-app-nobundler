import React from 'https://esm.sh/react@18.2.0'
import { v4 as uuidv4 } from 'https://esm.sh/uuid@9.0.0'
import { CircularProgress, Container, Typography } from 'https://esm.sh/@mui/material@5.11.14'
import TodoInput from './TodoInput.tsx'
import TodoList, { Todo } from './TodoList.tsx'
import { useLocalStorageState } from './useLocalStorageState.ts'
import { AppInfo } from './AppInfo.tsx'

interface AppProps {
  fetchCount: number;
  loadTime: number;
}

export default function App({fetchCount, loadTime}: AppProps) {
  const [todos, setTodos] = useLocalStorageState<Todo[]>('todoItems')

  function addTodo(todoText: string) {
    setTodos([
      ...todos!,
      {id: uuidv4(), text: todoText}
    ])
  }

  function deleteTodo(id: Todo['id']) {
    setTodos(todos => todos!.filter(todo => todo.id !== id))
  }

  if (todos === undefined) {
    return <CircularProgress/>
  }

  return (
    <Container fixed maxWidth="sm">
      <Typography variant="h3" sx={{mt: 2, mb: 2, textAlign: 'center'}}>Unbundled Todo App</Typography>
      <TodoList todos={todos} onDelete={deleteTodo}/>
      <TodoInput addTodo={addTodo}/>
      <AppInfo fetchCount={fetchCount} loadTime={loadTime}/>
    </Container>
  )
}

