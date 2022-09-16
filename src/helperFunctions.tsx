import { RootState } from './routes/ita-course/todo-redux/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import slugify from 'slugify'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    window.localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [storedValue, setValue] as const
}

export const generateId = () => Math.floor(Math.random() * 100)

type Props = {
  children: React.ReactNode
}

export const genericHookContextBuilder = <T, P>(hook: () => T) => {
  const Context = React.createContext<T>(undefined as never)

  return {
    Context,
    ContextProvider: (props: Props & P) => {
      const value = hook()

      return <Context.Provider value={value}>{props.children}</Context.Provider>
    },
  }
}

export const arrayToMatrix = <T,>(array: T[], columns: number) => {
  const rowsCount = Array.from({ length: Math.ceil(array.length / columns) }, (_, i) => i)
  return rowsCount.map(i => array.slice(i * columns, i * columns + columns))
}

export const shuffleCards = <T,>(array: T[]) => {
  return array.sort(() => Math.random() - 0.5)
}

export const useComponentDidMount = (fn: () => void) => {
  useEffect(() => {
    fn()
  }, [])
}

export const createSlug = (text: string) => {
  return slugify(text, {
    replacement: '-',
    lower: true,
    strict: false,
    trim: true,
  })
}

export const formatMoney = (amount: number) => {
  return <div>{amount.toFixed(2)}&nbsp;€</div>
}

export const checkInputIfEmpty = (value: string) => {
  const val = value.trim()
  return val.length === 0
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const changePositionOfElInArray = <T,>(
  arr: T[],
  sourceIndex: number,
  destinationIndex: number
) => {
  const item = arr[sourceIndex]
  arr = arr.filter(item => item !== arr[sourceIndex])
  return [...arr.slice(0, destinationIndex), item, ...arr.slice(destinationIndex, arr.length)]
}
