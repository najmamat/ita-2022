import { Article } from '.'
import fs from 'fs'
import slugify from 'slugify'

export const createSlug = (text: string) => {
  return slugify(text, {
    replacement: '-',
    lower: true,
    strict: false,
    trim: true,
  })
}

export const getArticlesFromFile = (): Article[] => {
  const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
  const data = JSON.parse(dataString)
  return data.articles
}

export const writeArticlesToFile = (articles: Article[]) => {
  const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
  const data = JSON.parse(dataString)
  const newData = { ...data, articles: articles }
  fs.writeFileSync(`${__dirname}/../data.json`, JSON.stringify(newData))
}
