import { Article } from '.././article/BlogArticle'
import { blogServices, serviceUrls } from '../../../../serviceLayer'
import { createSlug, useComponentDidMount } from '../../../../helperFunctions'
import { genericHookContextBuilder } from '../../../../helperFunctions'
import { title } from 'process'
import { urls } from '../../../../urls'
import { useState } from 'react'

const useLogicState = () => {
  const [filteredArticles, setFilteredArticles] = useState([] as Article[])

  const [isLoading, setIsLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [filterError, setFilterError] = useState('')
  const [articleError, setArticleError] = useState('')

  useComponentDidMount(async () => {
    try {
      const articles = await blogServices.getArticles()
      setFilteredArticles(articles)
    } catch (error) {
      setArticleError('Database is unavailable')
    } finally {
      setIsLoading(false)
    }
  })

  const filterOnChange = async (value: string) => {
    setSearch(value)
    try {
      setIsLoading(true)
      setFilteredArticles(await blogServices.filter(value))
    } catch (e) {
      setFilterError('Error while filtering articles')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    filteredArticles,
    filterOnChange,
    search,
    filterError,
    articleError,
  }
}

export const { ContextProvider: BlogContextProvider, Context: BlogContext } =
  genericHookContextBuilder(useLogicState)
