import { Article } from './routes/ita-course/blog/article/BlogArticle'

export const serviceUrls = {
  articles: `${process.env.REACT_APP_BE_URL}articles/`,
}

const error = 'Error: No response from server'

export const blogServices = {
  getArticles: async () => {
    const response = await fetch(serviceUrls.articles, { method: 'GET' })
    const data = (await response.json()) as Article[]
    if (!response.ok) throw new Error(error)
    return data
  },
  getArticle: async (url: string) => {
    const response = await fetch(`${serviceUrls.articles}${url}`, { method: 'GET' })
    const data = (await response.json()) as Article
    if (!response.ok) throw new Error(error)
    return data
  },
  createArticle: async (title: string, content: string) => {
    const response = await fetch(serviceUrls.articles, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })
    const data = (await response.json()) as Article
    if (!response.ok) throw new Error(error)
    return data
  },
  deleteArticle: async (url: string) => {
    const response = await fetch(`${serviceUrls.articles}${url}`, { method: 'DELETE' })
    const data = (await response.json()) as Article[]
    if (!response.ok) throw new Error(error)
    return data
  },
  editArticle: async (title: string, content: string, url: string) => {
    const response = await fetch(`${serviceUrls.articles}${url}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })
    const data = (await response.json()) as Article[]
    if (!response.ok) throw new Error(error)
    return data
  },
  filter: async (search: string) => {
    const response = await fetch(`${serviceUrls.articles}filter?search=${search}`, {
      method: 'GET',
    })
    const data = (await response.json()) as Article[]
    if (!response.ok) throw new Error(error)
    return data
  },
}
