import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { css } from '@emotion/css'
import { theme } from '../../theme'
import { urls } from '../../urls'

const styles = {
  classicNav: css`
    display: flex;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      display: none;
    }
  `,
  navMenuStyle: css`
    display: flex;
    margin-right: -4px;
    -webkit-box-pack: end;
    justify-content: flex-end;
  `,
}

export const Navigation = () => {
  return (
    <div className={styles.classicNav}>
      <div className={styles.navMenuStyle}>
        <NavLinks />
      </div>
    </div>
  )
}
