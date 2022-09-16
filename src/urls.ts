export const urls = {
  root: '/',
  ita: {
    root: '/ita-course',
    jshistory: '/ita-course/jshistory',
    todoRedux: '/ita-course/todo-redux',
    hackertyper: '/ita-course/hackertyper',
    mortgageCalculator: '/ita-course/mortgage-calculator',
    memoryGame: '/ita-course/memory-game',
    blog: {
      root: '/ita-course/blog',
      blogNewArticle: '/ita-course/blog/new-article',
      blogEditArticle: {
        root: '/ita-course/blog/edit-article',
        route: '/ita-course/blog/edit-article/:url',
        detail: (slug: string) => concatUrls([urls.ita.blog.blogEditArticle.root, '/', slug]),
      },
      articles: {
        root: '/ita-course/blog/articles',
        route: '/ita-course/blog/articles/:url',
        detail: (slug: string) => concatUrls([urls.ita.blog.articles.root, '/', slug]),
      },
    },
  },
  cv: '/cv',
}

export const concatUrls = (urls: String[]) => {
  return urls.map(url => `${url}`).join('')
}
