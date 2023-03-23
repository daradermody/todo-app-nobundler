import { emit } from 'https://deno.land/x/emit/mod.ts'
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

void serve(async (req: Request) => {
  const url = new URL(req.url)
  const filepath = 'static' + (url.pathname !== '/' ? decodeURIComponent(url.pathname) : '/index.html')

  let content
  try {
    content = await Deno.readTextFile(filepath, {read: true})
  } catch {
    return new Response('404 Not Found', {status: 404})
  }

  if (['js', 'jsx', 'ts', 'tsx'].includes(getExtension(filepath))) {
    const url = new URL(filepath, import.meta.url)
    const result = await emit(url)
    content = result[url.href]
  }

  return new Response(content, {headers: {'content-type': getContentType(filepath)}})
})

function getContentType(file: string): string {
  const mime = {
    html: 'text/html',
    js: 'text/javascript',
    jsx: 'text/javascript',
    ts: 'text/javascript',
    tsx: 'text/javascript',
  }[getExtension(file)]

  return mime ? `${mime}; charset=utf-8` : ''
}

function getExtension(file: string): string {
  return file.split('.')[1]
}
