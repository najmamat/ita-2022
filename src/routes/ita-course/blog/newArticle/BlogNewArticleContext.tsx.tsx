import { Article } from '../article/BlogArticle'
import { blogServices, serviceUrls } from '../../../../serviceLayer'
import { checkInputIfEmpty } from '../../../../helperFunctions'
import { createSlug, useComponentDidMount } from '../../../../helperFunctions'
import { genericHookContextBuilder } from '../../../../helperFunctions'
import { title } from 'process'
import { urls } from '../../../../urls'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useLogicState = () => {
  const [filteredArticles, setFilteredArticles] = useState([] as Article[])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')

  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')
  const [articleError, setArticleError] = useState('')

  useComponentDidMount(async () => {
    try {
      const articles = await blogServices.getArticles()
      setFilteredArticles(articles)
    } catch (error) {
      setArticleError('Articles not found')
    } finally {
      setIsLoading(false)
    }
  })

  const checkIfUrlExists = (slug: string) => {
    return filteredArticles.some(article => article.slug === slug)
  }

  const createArticle = async () => {
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
      await blogServices.createArticle(newTitle, newContent)
      setNewTitle('')
      setNewContent('')
    } catch (error) {
      setArticleError('Creating article failed')
    } finally {
      setIsLoading(false)
      navigate(urls.ita.blog.articles.detail(createSlug(newTitle)))
    }
  }

  return {
    newTitle,
    setNewTitle,
    newContent,
    setNewContent,
    titleError,
    contentError,
    setTitleError,
    setContentError,
    articleError,
    createArticle,
  }
}

export const { ContextProvider: BlogNewArticleContextProvider, Context: BlogNewArticleContext } =
  genericHookContextBuilder(useLogicState)
