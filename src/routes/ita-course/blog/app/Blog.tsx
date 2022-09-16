import { AnimatePresence, motion } from 'framer-motion'
import { Blockquote } from '../../../../components/Blockquote'
import { BlogArticle } from '../article/BlogArticle'
import { BlogContext } from './BlogContext'
import { BlogContextProvider } from './BlogContext'
import { BlogNewArticle } from '../newArticle/BlogNewArticle'
import { Footer } from '../../../../components/Footer'
import { Grid2Column } from '../../../../components/UICore/Grid2Column'
import { H2 } from '../../../../components/UICore/H2'
import { Header } from '../../../../components/navigation/Header'
import { HeadingRegular } from '../../../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../../../components/InsetCardContact'
import { Link } from 'react-router-dom'
import { ParagraphBasic } from '../../../../components/UICore/ParagraphBasic'
import { RichText } from '../../../../components/UICore/RichText'
import { SubpageInfo } from '../../../../components/SubpageInfo'
import { blogServices, serviceUrls } from '../../../../serviceLayer'
import { concatUrls, urls } from '../../../../urls'
import { containerContentStyle, theme } from '../../../../theme'
import { css } from '@emotion/css'
import { generateId, useComponentDidMount, useLocalStorage } from '../../../../helperFunctions'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ImageGallery from 'react-image-gallery'
import articelDetail from './pictures/articleDetail.png'
import blogOverview from './pictures/blogOverview.png'
import editArticle from './pictures/editArticle.png'
import searchIcon from './search_icon.png'
import swagger from './pictures/swagger.png'

const thumbnailWidthHeight = 400

const images = [
  {
    original: blogOverview,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: articelDetail,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: editArticle,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: swagger,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
]

const styles = {
  testStyle: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  textarea: css`
    resize: none;
    width: 100%;
  `,
  btnStyle: css`
    color: ${theme.colors.grey};
    margin-right: 6px;
    margin-left: 6px;
    margin-top: 20px;
    padding: 10px 14px;
    font-size: ${theme.fontsize.menu};
    line-height: ${theme.lineheight.menu};
    font-weight: 600;
    border: none;
    border-radius: 8px;
    background-color: ${theme.colors.line};
    cursor: pointer;
    :hover {
      background-color: #dcdcdc;
      opacity: 0.5;
    }
  `,
  btnContainer: css`
    display: block;
    flex-direction: column;
    justify-content: center;
  `,
  link: css`
    text-decoration: none;
    color: ${theme.colors.grey};
    font-size: ${theme.fontsize.h2};
    :hover {
      color: ${theme.colors.black};
    }
  `,
  inputStyle: css`
    display: block;
    font-size: ${theme.fontsize.cards};
    line-height: ${theme.lineheight.cards};
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 16px 16px 16px 50px;
    width: 70%;
    border-radius: 8px;
    border: 2px solid ${theme.colors.grey};
    :focus {
      outline: none;
      border: 2px solid ${theme.colors.black};
    }
  `,
  articlesContainer: css`
    margin-left: 60px;
  `,
  inputContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  `,
  icon: css`
    width: 50px;
    height: 50px;
    margin-right: 10px;
  `,
}

export const BlogPage = () => {
  return (
    <>
      <Header />
      <SubpageInfo
        title='Blog with Markdown support'
        description={`This project was created as a part of IT-absolvent frontend ReactJS course. The
                purpose of the project was to create a simple web application where users can create their own blogposts with Markdown support. Also REST API with Express.js was created to support the application.`}
        client='IT-absolvent React Course'
        type='Portfolio project'
        year='2022'
      />
      <BlogContextProvider>
        <Blog />
      </BlogContextProvider>
      <div
        className={css`
          ${containerContentStyle}
          padding: 32px 96px;
          @media screen and (max-width: ${theme.breakpoints.desktop}) {
            padding: 64px 64px;
          }
          @media screen and (max-width: ${theme.breakpoints.mobile}) {
            padding: 32px 40px;
          }
        `}
        id='about'
      >
        <Grid2Column>
          <HeadingRegular>About Blog App</HeadingRegular>

          <RichText>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Initialy this application was creating using LocalStorage. But later in the course we
              were learning about creating REST API with Express.js. So I refactored the application
              to be using the REST API instead of LocalStorage. You can also filter between
              Blogposts.
            </ParagraphBasic>
            <Blockquote
              text={
                'The application is not functioning properly, because the backend application is not deployed anywhere.'
              }
            ></Blockquote>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              I also created a Swagger documentation for the REST API. Blog App code, Backend and
              Swagger can be found on my GitHub (link in the description at the top of the page).
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Later in the course, we started focusing on Typescript details and we have looked
              deeper into principals React.js library. We also learned about the basics of Redux and
              how to use it in our applications.
            </ParagraphBasic>

            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>Examples</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Below you can see how does the application look like when it is running properly. I
              have created a few articles and a model article with Markdown demo. You can also find
              Swagger documentation for the REST API.
            </ParagraphBasic>
          </RichText>
        </Grid2Column>
      </div>
      <div className={containerContentStyle}>
        <ImageGallery
          items={images}
          showPlayButton={false}
          disableThumbnailScroll={true}
          showNav={false}
          showFullscreenButton={false}
          autoPlay={true}
          slideInterval={6000}
          lazyLoad={true}
        />
      </div>
      <InsetCardContact />
      <Footer />
    </>
  )
}

const Blog = () => {
  const logic = useContext(BlogContext)
  const navigate = useNavigate()

  return (
    <div>
      <div
        className={css`
          ${containerContentStyle}
          padding-top: 0;
        `}
      >
        <Grid2Column>
          <div className={styles.btnContainer}>
            <HeadingRegular>Published Articles</HeadingRegular>
            <h3
              className={css`
                color: ${theme.colors.red};
              `}
            >
              {logic.articleError}
            </h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.btnStyle}
              onClick={() => {
                navigate(urls.ita.blog.blogNewArticle)
              }}
            >
              Create Article
            </motion.button>
            {/* <h3>{logic.filterError}</h3> */}
          </div>
          <div>
            <div className={styles.inputContainer}>
              <img src={searchIcon} className={styles.icon} />
              <input
                type='text'
                className={styles.inputStyle}
                value={logic.search}
                onChange={e => logic.filterOnChange(e.target.value)}
              />
            </div>
            <div className={styles.articlesContainer}>
              <RichText>
                {logic.filteredArticles.map(article => (
                  <ParagraphBasic key={article.id}>
                    <Link
                      className={styles.link}
                      key={article.id}
                      to={urls.ita.blog.articles.detail(article.slug)}
                    >
                      {article.title}
                    </Link>
                  </ParagraphBasic>
                ))}
              </RichText>
            </div>
          </div>
        </Grid2Column>
      </div>
    </div>
  )
}
