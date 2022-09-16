import { Todo } from './TodoAppRedux'
import { TodoReducer } from './todoSlice'
import { configureStore } from '@reduxjs/toolkit'

export const localStorageKey = 'todo-redux'

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
