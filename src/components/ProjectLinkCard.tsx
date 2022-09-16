import '../global.scss'
import { Link } from 'react-router-dom'
import { Spacer } from './Spacer'
import { css } from '@emotion/css'
import { motion } from 'framer-motion'
import { theme } from '../theme'

const styles = {
  h3Style: css`
    margin-top: 0;
    margin-bottom: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `,
  h4Style: css`
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `,
  projectLinkBaseStyles: css`
    background-color: ${theme.colors.lynxwhite};
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 24px;
    border-radius: 16px;
    :hover {
      opacity: 0.8;
      scale: 1.01;
    }
  `,
  projectLinkImgStyles: css`
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
  `,
  workContentStyles: css`
    padding: 24px 28px 24px 24px;
  `,
  projectLinkTitleTypeStyles: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.03em;
    color: ${theme.colors.black};
  `,
}
type ProjectLink = {
  urlTo: string
  title: string
  type: string
  coverImage: string
}

export const ProjectLinkCard = (props: ProjectLink) => {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.9 }}
      className={styles.projectLinkBaseStyles}
    >
      <Link
        className={css`
          text-decoration: none;
        `}
        to={props.urlTo}
      >
        <img className={styles.projectLinkImgStyles} src={props.coverImage} loading='lazy'></img>
        <div className={styles.workContentStyles}>
          <div className={styles.projectLinkTitleTypeStyles}>
            <h3
              className={css`
                ${styles.h3Style}
                color: ${theme.colors.black};
                margin-top: 0;
                margin-bottom: 0;
              `}
            >
              {props.title}
            </h3>
          </div>
          <Spacer height={4} />
          <div className={styles.projectLinkTitleTypeStyles}>
            <h4
              className={css`
                ${styles.h4Style}
                color: ${theme.colors.sonicsilver};
                margin-top: 0;
                margin-bottom: 0;
              `}
            >
              {props.type}
            </h4>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
