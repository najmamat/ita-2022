import { AnimatePresence } from 'framer-motion'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { DropResult } from 'react-beautiful-dnd'
import { Footer } from '../../../components/Footer'
import { H2 } from '../../../components/UICore/H2'
import { Header } from '../../../components/navigation/Header'
import { InsetCardContact } from '../../../components/InsetCardContact'
import { ProjectCodeInfo } from '../../../components/ProjectWithCodeInfo'
import { SubpageInfo } from '../../../components/SubpageInfo'
import { Todo } from './TodoAppRedux'
import { addTodo, deleteTodo, setFilter, toggleTodo, updateTodo, updateTodos } from './todoSlice'
import { changePositionOfElInArray } from '../../../helperFunctions'
import { css } from '@emotion/css'
import { motion } from 'framer-motion'
import { theme } from '../../../theme'
import { urls } from '../../../urls'
import { useAppSelector } from '../../../helperFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import boxIcon from './icon-box.png'
import delIcon from './icon-remove.png'
import tickedIcon from './icon-ticked-box.png'
import type { RootState } from './store'

const styles = {
  baseStyle: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 64px;
  `,
  todoBaseStyle: css`
    display: table;
    align-items: center;
    align-content: center;
    width: 489px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 5px;
    background-color: ${theme.colors.lynxwhite};
    border: none;
    :hover {
      filter: brightness(95%);
    }
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 90vw;
    }
  `,
  todoLabelStyle: css`
    display: table-cell;
    padding: 10px 0px 10px 10px;
    width: 460px;
    color: ${theme.colors.black};
    font-size: ${theme.fontsize.text};
    line-height: ${theme.lineheight.text};
    min-height: ${theme.lineheight.text};
    opacity: 0.7;
    :hover {
      opacity: 1;
    }
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontsize.cards};
      line-height: ${theme.lineheight.cards};
      min-height: ${theme.lineheight.menu};
    }
  `,
  todoImgStyle: css`
    display: table-cell;
    width: 30px;
    padding: 0px 10px 0px 0px;
    opacity: 0.5;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  `,
  todoInputStyle: css`
    display: block;
    font-size: ${theme.fontsize.text};
    line-height: ${theme.lineheight.text};
    margin: 20px;
    padding: 16px 16px 16px 50px;
    width: 420px;
    border-radius: 8px;
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      width: 30vh;
      font-size: ${theme.fontsize.menu};
      line-height: ${theme.lineheight.menu};
      padding: 16px 16px 16px 30px;
    }
  `,
  todoValueInput: css`
    border: none;
    background-color: transparent;
    color: ${theme.colors.black};
    font-size: ${theme.fontsize.text};
    line-height: ${theme.lineheight.text};
    min-height: ${theme.lineheight.text};
    opacity: 0.7;
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontsize.cards};
      line-height: ${theme.lineheight.cards};
      min-height: ${theme.lineheight.menu};
    }
    :focus {
      border: none;
      outline: none;
    }
  `,
  todoContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    padding: 10px;
  `,
  h2Style: css`
    font-size: ${theme.fontsize.h1};
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme.colors.black};
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 32px;
    margin-top: 88px;
  `,
}

export const TodoRedux = () => {
  const todosAppState = useAppSelector(state => state.todos)
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const idForDnD = 'todos'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTodo(text))
    setText('')
  }

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return
    dispatch(
      updateTodos(
        changePositionOfElInArray(
          todosAppState.todos,
          result.source.index,
          result.destination.index
        )
      )
    )
  }

  return (
    <>
      <Header />
      <div className={styles.baseStyle} id='about'>
        <h2 className={styles.h2Style}>todos</h2>
        <div>
          <FilterButton
            handleClick={() => dispatch(setFilter('all'))}
            value={'all'}
            activeOnFilter={'all'}
          ></FilterButton>
          <FilterButton
            handleClick={() => dispatch(setFilter('completed'))}
            value={'active'}
            activeOnFilter={'completed'}
          />
          <FilterButton
            handleClick={() => dispatch(setFilter('active'))}
            value={'completed'}
            activeOnFilter={'active'}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.todoInputStyle}
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </form>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId={idForDnD}>
            {provided => (
              <ul
                {...provided.droppableProps}
                className={css`
                  ${idForDnD}
                  margin: 0;
                  padding-left: 0;
                  list-style-type: none;
                `}
                ref={provided.innerRef}
              >
                <AnimatePresence>
                  {todosAppState.todos
                    .filter(todo => todo.type !== todosAppState.filter)
                    .map((todo, index) => (
                      <Draggable key={todo.id} draggableId={todo.id} index={index}>
                        {provided => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <TodoComponent todo={todo} />
                            </motion.div>
                          </li>
                        )}
                      </Draggable>
                    ))}
                </AnimatePresence>
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <ProjectCodeInfo
        title='Todo App & Redux'
        description='This project was created at the start of IT-absolvent frontend ReactJS course.
        The purpose of the project was to create a simple web application where user will be able to add, delete and change state of tasks. The application is able to filter tasks by type. Tasks are editable and can be marked as done. You can also drag and drop tasks.'
        client='IT-absolvent React Course'
        type='Portfolio project'
        year='2022'
        prevPageUrl={urls.ita.root}
        code='https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course/todo-redux'
      />
      <Footer />
    </>
  )
}

type TodoProps = {
  todo: Todo
}

const TodoComponent = (props: TodoProps) => {
  const dispatch = useDispatch()
  return (
    <motion.div
      className={css`
        ${styles.todoBaseStyle};
        ${props.todo.type === 'completed' &&
        `
          background-image: ${theme.gradients.primary};
        `}
      `}
    >
      <div className={styles.todoContainer}>
        <img
          className={css`
            padding: 10px;
            cursor: pointer;
          `}
          onClick={() => dispatch(toggleTodo(props.todo.id))}
          src={props.todo.type === 'completed' ? tickedIcon : boxIcon}
        />
        <input
          className={styles.todoValueInput}
          id='value'
          type='text'
          value={props.todo.text}
          onChange={e => {
            e.preventDefault()
            const todoToSend = {
              id: props.todo.id,
              text: e.target.value,
              type: props.todo.type,
            }
            dispatch(updateTodo(todoToSend))
          }}
        />
        <img
          className={styles.todoImgStyle}
          src={delIcon}
          onClick={() => dispatch(deleteTodo(props.todo.id))}
        />
      </div>
    </motion.div>
  )
}

const filterBtnStyle = css`
  color: ${theme.colors.grey};
  margin-right: 6px;
  margin-left: 6px;
  padding: 6px 14px;
  font-size: ${theme.fontsize.menu};
  line-height: ${theme.lineheight.menu};
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  cursor: pointer;
  :hover {
    background-color: #dcdcdc;
    opacity: 0.5;
  }
`

export const FilterButton = (props: {
  activeOnFilter: string
  value: string
  handleClick: () => void
}) => {
  const todosAppState = useAppSelector(state => state.todos)
  return (
    <button
      className={css`
        ${filterBtnStyle}
        ${todosAppState.filter === props.activeOnFilter &&
        `background-color: ${theme.colors.backgGrey};`}
      `}
      onClick={props.handleClick}
    >
      {props.value}
    </button>
  )
}
