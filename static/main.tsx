import { createRoot } from 'https://esm.sh/react-dom@18.2.0'
import * as React from 'https://esm.sh/react@18.2.0'
import TodoApp from './TodoApp.tsx'

export function setupApp(fetchCount: number, loadTime: number) {
  createRoot(document.getElementById('app'))
    .render(<TodoApp fetchCount={fetchCount} loadTime={loadTime}/>)
}
