import { Footer } from '../components/Footer'
import { Grid2Column } from './UICore/Grid2Column'
import { Header } from './navigation/Header'
import { Link } from 'react-router-dom'
import { ListItemTight } from './UICore/ListItemTight'
import { ParagraphBasic } from './UICore/ParagraphBasic'
import { RichText } from './UICore/RichText'
import { Spacer } from '../components/Spacer'
import { containerContentStyle, theme } from '../theme'
import { css } from '@emotion/css'
import { text } from 'stream/consumers'
import { urls } from '../urls'
import React from 'react'

const styles = {
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
  projectDetailsWrapperStyle: css`
    display: flex;
    -webpack-box-pack: justify;
    justify-content: space-between;
    grid-column-gap: 16px;
  `,
  headingExtraSmall: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${theme.fontsize.menu};
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.03em;
  `,
  leftColumnStyle: css`
    display: flex;
    flex-direction: column;
  `,
  btnStyle: css`
    color: ${theme.colors.black};
    margin-right: 6px;
    margin-left: 6px;
    padding: 6px 14px;
    font-size: ${theme.fontsize.menu};
    line-height: ${theme.lineheight.menu};
    font-weight: 600;
    border: none;
    border-radius: 8px;
    background-color: ${theme.colors.backgGrey};
    cursor: pointer;
    :hover {
      background-color: ${theme.colors.backgGrey};
      opacity: 0.8;
    }
  `,
}
type InfoProps = {
  title: string
  description: string
  client: string
  type: string
  year: string
  prevPageUrl: string
}

export const SubpageInfo = (props: InfoProps) => {
  return (
    <div className={containerContentStyle}>
      <Grid2Column>
        <div className={styles.leftColumnStyle}>
          <h1 className={styles.headingExtraLarge}>{props.title}</h1>
          <Spacer height={16} />
          <Link to={props.prevPageUrl}>
            <button className={styles.btnStyle}>Back</button>
          </Link>
        </div>
        <div>
          <RichText>
            <ParagraphBasic>{props.description}</ParagraphBasic>
          </RichText>
          <Spacer height={64} />
          <ListItemTight>
            <div className={styles.projectDetailsWrapperStyle}>
              <h2 className={styles.headingExtraSmall}>Client</h2>
              <h3
                className={css`
                  ${styles.headingExtraSmall}
                  color: ${theme.colors.grey};
                `}
              >
                {props.client}
              </h3>
            </div>
          </ListItemTight>
          <ListItemTight>
            <div className={styles.projectDetailsWrapperStyle}>
              <h2 className={styles.headingExtraSmall}>Type</h2>
              <h3
                className={css`
                  ${styles.headingExtraSmall}
                  color: ${theme.colors.grey};
                `}
              >
                {props.type}
              </h3>
            </div>
          </ListItemTight>
          <ListItemTight>
            <div className={styles.projectDetailsWrapperStyle}>
              <h2 className={styles.headingExtraSmall}>Year</h2>
              <h3
                className={css`
                  ${styles.headingExtraSmall}
                  color: ${theme.colors.grey};
                `}
              >
                {props.year}
              </h3>
            </div>
          </ListItemTight>
        </div>
      </Grid2Column>
    </div>
  )
}
