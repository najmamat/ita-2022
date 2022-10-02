import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
import { css } from '@emotion/css'
import { theme } from '../../theme'
import { urls } from '../../urls'

const styles = {
  navbarHref: css`
    display: flex;
    margin-right: 6px;
    margin-left: 6px;
    padding: 6px 14px;
    -webkit-box-align: center;
    align-items: center;
    transition-delay: 0s, 0s, 0s;
    color: ${theme.colors.black};
    font-size: ${theme.fontsize.menu};
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    :hover {
      background-color: ${theme.colors.backgGrey};
      opacity: 0.9;
    }
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      transition: 0.3s;
      margin-left: 12%;
      margin-right: -16px;
      padding: 16px 0 16px 16px;
      border-radius: 6px;
      width: 76%;
      :hover {
        background-color: ${theme.colors.backgGrey};
      }
    }
  `,
  links: css`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `,
}

//NOTE: not using NavLinks from ReactRouterDom, bcs it doesn't work with anchors
export const NavLinks = () => {
  return (
    <div className={styles.links}>
      <Link className={styles.navbarHref} to={urls.work}>
        Work
      </Link>
      <Link className={styles.navbarHref} to={urls.about}>
        About
      </Link>
      <Link className={styles.navbarHref} to={urls.contact}>
        Contact
      </Link>
    </div>
  )
}
