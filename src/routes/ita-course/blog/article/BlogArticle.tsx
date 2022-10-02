import { AnimatePresence, motion } from 'framer-motion'
import { BlogArticleContext } from './BlogArticleContext'
import { Footer } from '../../../../components/Footer'
import { H2 } from '../../../../components/UICore/H2'
import { Header } from '../../../../components/navigation/Header'
import { HeadingRegular } from '../../../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../../../components/InsetCardContact'
import { Link } from 'react-router-dom'
import { concatUrls, urls } from '../../../../urls'
import { containerContentStyle, theme } from '../../../../theme'
import { css } from '@emotion/css'
import { useComponentDidMount } from '../../../../helperFunctions'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const styles = {
  headingExtraLarge: css`
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 80px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -0.03em;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      font-size: 52px;
    }
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: 42px;
    }
  `,
  btnStyle: css`
    color: ${theme.colors.grey};
    margin-right: 6px;
    margin-left: 6px;
    padding: 6px 14px;
    font-size: ${theme.fontsize.menu};
    line-height: ${theme.lineheight.menu};
    font-weight: 600;
    border: none;
    border-radius: 8px;
    background-color: ${theme.colors.line};
    cursor: pointer;
    :hover {
      background-color: #dcdcdc;
    }
  `,
  articleContentContainer: css`
    margin-top: 20px;
    margin-right: 6px;
    margin-left: 6px;
  `,
}

export type Article = {
  id: string
  slug: string
  title: string
  content: string
}

export const BlogArticle = () => {
  const logic = useContext(BlogArticleContext)

  return (
    <div>
      <Header />
      <div className={containerContentStyle} id='work'>
        <h1 className={styles.headingExtraLarge} id='about'>
          {logic.article?.title}
        </h1>
        <Link to={urls.ita.blog.root}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.btnStyle}
          >
            Back to Blog
          </motion.button>
        </Link>
        <Link to={urls.ita.blog.blogEditArticle.detail(logic.article?.slug!)}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.btnStyle}
          >
            Edit Article
          </motion.button>
        </Link>
        <Link to={urls.ita.blog.root}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={css`
              ${styles.btnStyle}
              color: ${theme.colors.red};
            `}
            onClick={() => logic.deleteArticle(logic.article!.slug)}
          >
            Delete Article
          </motion.button>
        </Link>
        <div
          className={css`
            color: ${theme.colors.red};
            font-weight: 800;
            font-size: ${theme.fontsize.text};
            margin-top: 20px;
          `}
        >
          {logic.articleError}
        </div>

        <div className={styles.articleContentContainer}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{logic.article?.content ?? ''}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </div>
  )
}
