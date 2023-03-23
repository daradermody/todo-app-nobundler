import { useEffect, useState } from 'https://esm.sh/react@18.2.0'

export function useLocalStorageState<T>(storageKey: string): ReturnType<typeof useState<T>> {
  const [data, setData] = useState<T>()

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(storageKey) || '[]'))
  }, [setData])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(data))
  }, [data])

  return [data, setData]
}
