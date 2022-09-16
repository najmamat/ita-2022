import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import type { Todo } from './TodoAppRedux'

const setTodosToLocalStorage = (key: string, todos: Todo[]) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(todos))
  } catch (e) {
    console.info(e)
  }
}
const getTodosFromLocalStorage = (key: string): Todo[] => {
  try {
    const todos = window.localStorage.getItem(key)
    if (todos) {
      return JSON.parse(todos)
    }
  } catch (e) {
    console.info(e)
  }
  return []
}

type ITodoReducers = {
  addTodo: (state: ITodoState, action: PayloadAction<string>) => void
  toggleTodo: (state: ITodoState, action: PayloadAction<string>) => void
  deleteTodo: (state: ITodoState, action: PayloadAction<string>) => void
  updateTodo: (state: ITodoState, action: PayloadAction<Todo>) => void
  setFilter: (state: ITodoState, action: PayloadAction<string>) => void
  updateTodos: (state: ITodoState, action: PayloadAction<Todo[]>) => void
}

type ITodoState = {
  todos: Todo[]
  filter: string
}
const lsKeyTodos = 'todo-redux'
const initialState: ITodoState = {
  todos: getTodosFromLocalStorage(lsKeyTodos),
  filter: 'all',
}

export const todoSlice = createSlice<ITodoState, ITodoReducers>({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo: Todo = {
        id: uuidv4(),
        text: action.payload,
        type: 'active',
      }
      state.todos = [newTodo, ...state.todos]
      setTodosToLocalStorage(lsKeyTodos, state.todos)
    },
    toggleTodo(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.type = todo.type === 'active' ? 'completed' : 'active'
        setTodosToLocalStorage(lsKeyTodos, state.todos)
      } else {
        console.info('Todo not found')
      }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      setTodosToLocalStorage(lsKeyTodos, state.todos)
    },
    updateTodo(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
        setTodosToLocalStorage(lsKeyTodos, state.todos)
      } else {
        console.info('Todo not found')
      }
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    updateTodos(state, action) {
      state.todos = action.payload
      setTodosToLocalStorage(lsKeyTodos, state.todos)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo, setFilter, updateTodos } =
  todoSlice.actions
export const TodoReducer = todoSlice.reducer
