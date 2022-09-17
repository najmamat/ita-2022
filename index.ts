import * as swagger from 'swagger-express-typescript'
import * as swaggerUi from 'swagger-ui-express'
import { createSlug } from './helperFunctions'
import { getArticlesFromFile } from './helperFunctions'
import { v4 as uuidv4 } from 'uuid'
import { writeArticlesToFile } from './helperFunctions'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import fs from 'fs'
import swaggerDocument from './swagger.json'

const app = express()
const port = 1234

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export type Article = {
  id: string
  title: string
  content: string
  slug: string
}

app.get('/articles', (req, res) => {
  res.send(getArticlesFromFile())
})

app.get('/articles/filter', (req, res) => {
  const data = getArticlesFromFile()
  const filteredArticles = data.filter(article => {
    return article.slug.includes(req.query.search?.toString().toLowerCase() ?? '')
  })
  res.send(filteredArticles)
})

app.get('/articles/:slug', (req, res) => {
  const data = getArticlesFromFile()
  const article = data.find(article => article.slug === req.params.slug)
  res.send(article)
})

app.post('/articles', (req, res) => {
  const id = uuidv4()
  const newArticle = {
    id: id,
    title: req.body.title,
    content: req.body.content,
    slug: createSlug(req.body.title),
  }
  const data = getArticlesFromFile()
  data.push(newArticle)
  writeArticlesToFile(data)
  res.send(newArticle)
})
app.put('/articles/:slug', (req, res) => {
  const data = getArticlesFromFile()
  const newData = data.map(article =>
    article.slug === req.params.slug
      ? {
          ...article,
          title: req.body.title,
          content: req.body.content,
          slug: createSlug(req.body.title),
        }
      : article
  )
  writeArticlesToFile(newData)
  res.send(newData)
})

app.delete('/articles/:slug', (req, res) => {
  const data = getArticlesFromFile()
  const newData = data.filter(article => article.slug !== req.params.slug)
  writeArticlesToFile(newData)
  res.send(newData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const main = async () => {
  const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
  const data = JSON.parse(dataString)
}
main()

export {}
