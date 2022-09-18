import { App } from './App'
import { BlogArticle } from './routes/ita-course/blog/article/BlogArticle'
import { BlogArticleContextProvider } from './routes/ita-course/blog/article/BlogArticleContext'
import { BlogContextProvider } from './routes/ita-course/blog/app/BlogContext'
import { BlogEditArticle } from './routes/ita-course/blog/editArticle/BlogEditArticle'
import { BlogEditArticleContextProvider } from './routes/ita-course/blog/editArticle/BlogEditArticleContext'
import { BlogNewArticle } from './routes/ita-course/blog/newArticle/BlogNewArticle'
import { BlogNewArticleContextProvider } from './routes/ita-course/blog/newArticle/BlogNewArticleContext.tsx'
import { BlogPage } from './routes/ita-course/blog/app/Blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CVPage } from './routes/cv/CVPage'
import { Hackertyper } from './routes/ita-course/hackertyper/Hackertyper'
import { ITA } from './routes/ita-course/ITA-course'
import { JSHistory } from './routes/ita-course/js-history/JSHistory'
import { MemoryGame } from './routes/ita-course/memory-game/MemoryGame'
import { Mortgage } from './routes/ita-course/mortgage/Mortgage'
import { ReserveNow } from './routes/school-projects/reserve-now/ReserveNow'
import { RoomRes } from './routes/school-projects/RoomRes'
import { SchoolProjects } from './routes/school-projects/SchoolProjects'
import { ScrollToTop } from './ScrollToTop'
import { TodoAppRedux } from './routes/ita-course/todo-redux/TodoAppRedux'
import { WordleClone } from './routes/school-projects/wordle/WordleClone'
import { ZeptejteSeStudenta } from './routes/zeptejtesestudenta/ZeptejteSeStudenta'
import { concatUrls } from './urls'
import { urls } from './urls'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  //NOTE: React.StrictMode breaks the ability to use react-beautiful-dnd. Link: https://github.com/atlassian/react-beautiful-dnd/issues/2350
  // <React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <Routes>
      <Route path={urls.root} element={<App />}></Route>
      <Route path={urls.ita.root} element={<ITA />}></Route>
      <Route path={urls.ita.jshistory} element={<JSHistory />}></Route>
      <Route path={urls.ita.todoRedux} element={<TodoAppRedux />}></Route>
      <Route path={urls.ita.hackertyper} element={<Hackertyper />}></Route>
      <Route path={urls.ita.mortgageCalculator} element={<Mortgage />}></Route>
      <Route path={urls.ita.memoryGame} element={<MemoryGame />}></Route>
      <Route path={urls.cv} element={<CVPage />}></Route>
      <Route path={urls.school.root} element={<SchoolProjects />}></Route>
      <Route path={urls.school.roomRes} element={<RoomRes />}></Route>
      <Route path={urls.school.reserveNow} element={<ReserveNow />}></Route>
      <Route path={urls.school.wordleClone} element={<WordleClone />}></Route>
      <Route path={urls.students} element={<ZeptejteSeStudenta />}></Route>
      <Route
        path={urls.ita.blog.blogNewArticle}
        element={
          <BlogNewArticleContextProvider>
            <BlogNewArticle />
          </BlogNewArticleContextProvider>
        }
      />
      <Route
        path={urls.ita.blog.blogEditArticle.route}
        element={
          <BlogEditArticleContextProvider>
            <BlogEditArticle />
          </BlogEditArticleContextProvider>
        }
      />
      <Route
        path={urls.ita.blog.root}
        element={
          <BlogContextProvider>
            <BlogPage />
          </BlogContextProvider>
        }
      ></Route>
      <Route
        path={urls.ita.blog.articles.route}
        element={
          <BlogArticleContextProvider>
            <BlogArticle />
          </BlogArticleContextProvider>
        }
      />
    </Routes>
  </BrowserRouter>
)
