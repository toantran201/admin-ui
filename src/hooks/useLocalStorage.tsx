import { useCallback, useState } from 'react'

type UseLocalStorageProps<T> = {
  key: string
  defaultValue: T
}

export const useLocalStorage = <Type,>({ key, defaultValue }: UseLocalStorageProps<Type>) => {
  const readStorageValue = useCallback((): Type => {
    if (typeof window === 'undefined') return defaultValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as Type) : defaultValue
    } catch (e) {
      return defaultValue
    }
  }, [defaultValue, key])

  const [storedValue, setStoredValue] = useState<Type>(readStorageValue)

  const setStorageValue = (newValue: Type) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch (err) {
      //
    }
    setStoredValue(newValue)
  }

  return [storedValue, setStorageValue]
}
