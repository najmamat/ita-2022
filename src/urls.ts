export const urls = {
  root: '/',
  contact: '/#contact',
  work: '/#work',
  about: '/#about',
  anchor: {
    work: 'work',
    contact: 'contact',
    about: 'about',
  },
  pageNotFound: '/404',
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
  school: {
    root: '/school-projects',
    reserveNow: '/school-projects/reserve-now',
    roomRes: '/school-projects/room-res',
    wordleClone: '/school-projects/wordle-clone',
  },
  cv: '/cv',
  students: '/zeptejtesestudenta',
  github: {
    root: 'https://github.com/najmamat',
    portfolio: 'https://github.com/najmamat/portfolio',
    ita: {
      root: 'https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course',
      blog: 'https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course/blog',
      jshistory: 'https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course/js-history',
      memoryGame:
        'https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course/memory-game',
      mortgage: 'https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course/mortgage',
      todoRedux: 'https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course/todo-redux',
    },
    school: {
      roomres: 'https://github.com/najmamat/room-res',
      wordle: 'https://github.com/najmamat/wordgame-code',
      reservenow: 'https://github.com/najmamat/reservenow',
    },
  },
}

export const concatUrls = (urls: String[]) => {
  return urls.map(url => `${url}`).join('')
}
