import * as React from 'react'
import { BlogNewArticleContext } from './BlogNewArticleContext.tsx'
import { Footer } from '../../../../components/Footer'
import { Grid2Column } from '../../../../components/UICore/Grid2Column'
import { Header } from '../../../../components/navigation/Header'
import { HeadingRegular } from '../../../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../../../components/InsetCardContact'
import { containerContentStyle, theme } from '../../../../theme'
import { css } from '@emotion/css'
import { motion } from 'framer-motion'
import { urls } from '../../../../urls'
import { useComponentDidMount } from '../../../../helperFunctions'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const styles = {
  testStyle: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  textarea: css`
    resize: none;
    width: 100%;
    font-size: ${theme.fontsize.cards};
    line-height: ${theme.lineheight.cards};
    border-radius: 8px;
    border: 2px solid ${theme.colors.grey};
    margin-top: 20px;
    :focus {
      outline: none;
      border: 2px solid ${theme.colors.black};
    }
  `,
  inputStyle: css`
    display: block;
    font-size: ${theme.fontsize.cards};
    line-height: ${theme.lineheight.cards};
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 16px 16px 16px 50px;
    width: 470px;
    border-radius: 8px;
    border: 2px solid ${theme.colors.grey};
    :focus {
      outline: none;
      border: 2px solid ${theme.colors.black};
    }
  `,
  headingExtraLarge: css`
    margin-top: 0;
    margin-bottom: 0;
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
    margin-top: 10px;
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
      opacity: 0.5;
    }
  `,
}

export const BlogNewArticle = () => {
  const navigate = useNavigate()
  const logic = useContext(BlogNewArticleContext)

  return (
    <div>
      <Header />
      <div className={containerContentStyle} id='work'>
        <form
          className={styles.testStyle}
          onSubmit={e => {
            e.preventDefault()
            logic.createArticle()
          }}
        >
          <Grid2Column>
            <div id='about'>
              <h1 className={styles.headingExtraLarge}>Create New Article</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btnStyle}
                onClick={() => navigate(urls.ita.blog.root)}
              >
                Back to Blog
              </motion.button>
            </div>

            <div>
              <label>
                <HeadingRegular>Title&nbsp;</HeadingRegular>

                <input
                  className={css`
                    ${styles.inputStyle}
                    ${logic.titleError &&
                    `
                      border: 2px solid red;
                      background-color: ${theme.colors.red};
                    `}
                  `}
                  type='text'
                  onChange={e => {
                    logic.setTitleError('')
                    logic.setNewTitle(e.target.value)
                  }}
                  value={logic.newTitle}
                />
                <HeadingRegular>
                  <div
                    className={css`
                      color: ${theme.colors.red};
                    `}
                  >
                    {logic.titleError}
                    {logic.articleError}
                  </div>
                </HeadingRegular>
              </label>
            </div>
          </Grid2Column>
          <label
            className={css`
              padding-top: 60px;
            `}
          >
            <HeadingRegular>
              Content&nbsp;
              <div
                className={css`
                  color: ${theme.colors.red};
                `}
              >
                {logic.contentError === '' ? '' : `is empty`}
              </div>
            </HeadingRegular>
            <textarea
              className={css`
                ${styles.textarea}
                ${logic.contentError &&
                `
                      border: 2px solid red;
                      background-color: ${theme.colors.red};
                    `}
              `}
              placeholder='Something awesome!'
              cols={90}
              rows={20}
              onChange={e => {
                logic.setContentError('')
                logic.setNewContent(e.target.value)
              }}
              value={logic.newContent}
            />
          </label>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.btnStyle}
            type='submit'
          >
            Create Article
          </motion.button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
