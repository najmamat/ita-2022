import { Article } from '.././article/BlogArticle'
import { blogServices, serviceUrls } from '../../../../serviceLayer'
import { createSlug, useComponentDidMount } from '../../../../helperFunctions'
import { genericHookContextBuilder } from '../../../../helperFunctions'
import { title } from 'process'
import { urls } from '../../../../urls'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const useLogicState = () => {
  const params = useParams()
  const [article, setArticle] = useState(null as null | Article)

  const [isLoading, setIsLoading] = useState(true)
  const [articleError, setArticleError] = useState('')

  useComponentDidMount(async () => {
    try {
      const response = await blogServices.getArticle(params.url!)
      setArticle(response)
    } catch (error) {
      setArticleError('Article not found. Backend is probably unavailable.')
      console.info(error)
    } finally {
      setIsLoading(false)
    }
  })

  const deleteArticle = async (slug: string) => {
    try {
      setIsLoading(true)
      await blogServices.deleteArticle(slug)
      setArticle(null as null | Article)
    } catch (error) {
      console.info(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    article,
    deleteArticle,
    articleError,
  }
}

export const { ContextProvider: BlogArticleContextProvider, Context: BlogArticleContext } =
  genericHookContextBuilder(useLogicState)
