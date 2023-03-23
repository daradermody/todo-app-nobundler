import React, { useCallback, useState } from 'https://esm.sh/react@18.2.0'
import { Box, Button, IconButton, TextField } from 'https://esm.sh/@mui/material@5.11.14'
import AddIcon from 'https://esm.sh/@mui/icons-material@5.11.11/Add'

interface TodoInputProps {
  addTodo(text: string): void
}

export default function TodoInput({addTodo}: TodoInputProps) {
  const [input, setInput] = useState('')

  const handleAddTodo = useCallback(() => {
    if (input) {
      addTodo(input)
      setInput('')
    }
  }, [addTodo, input])

  return (
    <Box display="flex" alignItems="center" alignItems="stretch" sx={{ gap: 1 }}>
      <TextField
        placeholder="Add todo item"
        fullWidth
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleAddTodo()}
      />
      <Button aria-label="add" size="large" color="primary" onClick={handleAddTodo} variant="contained" disabled={!input}>
        <AddIcon/>
      </Button>
    </Box>
  )
}
