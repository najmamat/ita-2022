import '../global.scss'
import { Link } from 'react-router-dom'
import { containerContentStyle, theme } from '../theme'
import { css } from '@emotion/css'
import { urls } from '../urls'

const styles = {
  footerFlexContainerTopStyle: css`
    display: flex;
    width: 100%;
    margin-bottom: 64px;
    padding-bottom: 64px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    justify-items: start;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-column-gap: 80px;
    grid-row-gap: 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    border-bottom: 1px solid ${theme.colors.line};

    @media screen and (max-width: ${theme.breakpoints.desktop}) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-flow: row;
    }
  `,
  footerListStyle: css`
    display: flex;
    margin-bottom: 0;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding-left: 0;
    list-style: none;
  `,
  footerListItemStyle: css`
    margin-bottom: 0;
    margin-left: 0;
    padding-left: 0;
  `,
  footerLinkStyle: css`
    display: inline-block;
    color: ${theme.colors.black};
    font-size: ${theme.fontsize.cards};
    font-weight: 600;
    text-decoration: none;
  `,
  footerFlexContainerBottomStyle: css`
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    justify-items: start;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-column-gap: 80px;
    grid-row-gap: 24px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  `,
}
export const Footer = () => {
  // TODO: add links instead of '/'
  return (
    <div className={containerContentStyle}>
      <div className={styles.footerFlexContainerTopStyle}>
        <ul className={styles.footerListStyle}>
          <li className={styles.footerListItemStyle}>
            <Link className={styles.footerLinkStyle} to='/' aria-current='page'>
              Home
            </Link>
          </li>
          <li className={styles.footerListItemStyle}>
            <Link className={styles.footerLinkStyle} to='/' aria-current='page'>
              Work
            </Link>
          </li>
          <li className={styles.footerListItemStyle}>
            <Link className={styles.footerLinkStyle} to='/' aria-current='page'>
              About
            </Link>
          </li>
          <li className={styles.footerListItemStyle}>
            <Link className={styles.footerLinkStyle} to='/' aria-current='page'>
              Contact
            </Link>
          </li>
        </ul>
        <ul className={styles.footerListStyle}>
          <li className={styles.footerListItemStyle}>
            <Link className={styles.footerLinkStyle} to={urls.cv} aria-current='page'>
              CV
            </Link>
          </li>
          <li className={styles.footerListItemStyle}>
            <Link className={styles.footerLinkStyle} to='/' aria-current='page'>
              Instagram
            </Link>
          </li>
          <li className={styles.footerListItemStyle}>
            <a
              className={styles.footerLinkStyle}
              href='https://www.linkedin.com/in/matou%C5%A1-najman-923414224'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerFlexContainerBottomStyle}>
        <div>{/* Empty div to fill the left column */}</div>
        <ul className={styles.footerListStyle}>
          <li className={styles.footerListItemStyle}>
            <Link
              className={css`
                ${styles.footerLinkStyle}
                font-size: 14px;
                color: ${theme.colors.grey};
              `}
              to='/'
              aria-current='page'
            >
              Matouš Najman&nbsp;&nbsp;·&nbsp;&nbsp;2022
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
