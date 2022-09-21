import { Provider } from 'react-redux'
import { TodoRedux } from './TodoRedux'
import { css } from '@emotion/css'
import { localStorageKey, store } from './store'
import React from 'react'

export type Todo = {
  id: string
  text: string
  type: 'active' | 'completed'
}

export const TodoAppRedux = () => {
  return (
    <Provider store={store}>
      <TodoRedux />
    </Provider>
  )
}
