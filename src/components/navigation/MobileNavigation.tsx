import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { css } from '@emotion/css'
import { theme } from '../../theme'
import { urls } from '../../urls'
import { useEffect, useState } from 'react'
import burger from './burger.png'
import close from './close.png'

const styles = {
  navMenuStyle: css`
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: ${theme.colors.white};
    overflow-x: hidden;
    border-right: ${theme.colors.line} 1px solid;
    transition: 1s;
    display: block;
    column-count: 1;
  `,
  logoWrapperStyle: css`
    flex: 1;
    padding-left: 28px;
    margin-top: 8px;
    padding-bottom: 30px;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
    }
  `,
  logoHrefStyle: css`
    float: left;
    text-decoration: none;
    color: ${theme.colors.black};
  `,
  overlayContent: css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  mobileHeader: css`
    display: none;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
    }
  `,
  mobileMenuIcon: css`
    width: 40px;
    height: 40px;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      margin-right: 30px;
    }
  `,
}

export const MobileNavigation = () => {
  const [menuWidth, setMenuWidth] = useState('0%')

  const toggleMenu = () => {
    menuWidth === '0%' ? setMenuWidth('50%') : setMenuWidth('0%')
  }

  return (
    <div className={styles.mobileHeader}>
      <img
        className={styles.mobileMenuIcon}
        src={menuWidth === '0%' ? burger : close}
        onClick={() => toggleMenu()}
      />
      <div
        className={css`
          ${styles.navMenuStyle}
          width: ${menuWidth};
        `}
      >
        <div className={styles.overlayContent}>
          <div className={styles.logoWrapperStyle}>
            <Link className={styles.logoHrefStyle} to={urls.root} aria-label='Logo'>
              <h2>M|N</h2>
            </Link>
          </div>
          <NavLinks />
        </div>
      </div>
    </div>
  )
}
