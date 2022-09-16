import { Article } from '.././article/BlogArticle'
import { blogServices, serviceUrls } from '../../../../serviceLayer'
import { checkInputIfEmpty } from '../../../../helperFunctions'
import { createSlug, useComponentDidMount } from '../../../../helperFunctions'
import { genericHookContextBuilder } from '../../../../helperFunctions'
import { title } from 'process'
import { urls } from '../../../../urls'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const useLogicState = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [filteredArticles, setFilteredArticles] = useState([] as Article[])
  const [article, setArticle] = useState(null as null | Article)

  const [isLoading, setIsLoading] = useState(true)
  const [articlesLoading, setArticlesLoading] = useState(true)
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const inputFields = [newTitle, newContent]

  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')
  const [articleError, setArticleError] = useState('')

  useComponentDidMount(() => {
    getArticle(params.url!)
    loadArticles()
  })

  const checkIfUrlExists = (slug: string) => {
    return filteredArticles.some(article => article.slug === slug)
  }

  const loadArticles = async () => {
    try {
      setArticlesLoading(true)
      const articles = await blogServices.getArticles()
      setFilteredArticles(articles)
    } catch (error) {
      setArticleError('Articles not found')
    } finally {
      setArticlesLoading(false)
    }
  }

  const getArticle = async (slug: string) => {
    try {
      const response = await blogServices.getArticle(slug)
      setArticle(response)
      setNewTitle(response.title)
      setNewContent(response.content)
    } catch (error) {
      setArticleError('Article not found')
      console.info(error)
    } finally {
      setIsLoading(false)
    }
  }

  const editArticle = async () => {
    setTitleError('')
    setContentError('')

    let isValidForm = true
    if (checkInputIfEmpty(newTitle)) {
      setTitleError('Title is required')
      isValidForm = false
    }
    if (checkInputIfEmpty(newContent)) {
      setContentError('Content is required')
      isValidForm = false
    }
    if (checkIfUrlExists(createSlug(newTitle))) {
      setTitleError('This title is already taken')
      isValidForm = false
    }
    if (!isValidForm) return

    try {
      setIsLoading(true)
      await blogServices.editArticle(newTitle, newContent, article!.slug)
      setArticle(null as null | Article)
      setNewTitle('')
      setNewContent('')
    } catch (error) {
      setArticleError('Editing article failed')
    } finally {
      setIsLoading(false)
      navigate(urls.ita.blog.articles.detail(createSlug(newTitle)))
    }
  }

  return {
    newContent,
    setNewContent,
    contentError,
    newTitle,
    setNewTitle,
    titleError,
    setTitleError,
    setContentError,
    editArticle,
  }
}

export const { ContextProvider: BlogEditArticleContextProvider, Context: BlogEditArticleContext } =
  genericHookContextBuilder(useLogicState)
