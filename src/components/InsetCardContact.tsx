import '../global.scss'
import { Spacer } from './Spacer'
import { containerContentStyle, headingLarge, theme } from '../theme'
import { css } from '@emotion/css'

const styles = {
  backgGradientStyle: css`
    background-image: linear-gradient(135deg, #ffeded, #ffeedb);
  `,
  headingMedium: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 40px;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.03em;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      font-size: 32px;
    }
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: 32px;
    }
  `,
  insetCardStyle: css`
    display: flex;
    padding: 128px 80px;
    align-items: center;
    border-radius: 20px;
    background-color: ${theme.colors.lynxwhite};
    text-align: center;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-align: center;
    @media screen and (max-width: ${theme.breakpoints.desktop}) {
      padding-top: 112px;
      padding-bottom: 112px;
    }
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      padding: 80px 40px;
    }
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      width: 96vw;
      margin-left: -39.7px;
      padding: 64px 40px;
    }
  `,
}
export const InsetCardContact = () => {
  return (
    <div className={containerContentStyle} id='contact'>
      <div
        className={css`
          ${styles.insetCardStyle}
          ${styles.backgGradientStyle}
        `}
      >
        <div
          className={css`
            max-width: 700px;
          `}
        >
          <h2 className={headingLarge}>Want to create something awesome? Drop me an email.</h2>
          <Spacer height={64} />
          <a
            className={css`
              ${styles.headingMedium}
              color: ${theme.colors.black};
              text-decoration: none;
            `}
            href='mailto:matous@najman.cz'
          >
            → matous@najman.cz
          </a>
        </div>
      </div>
    </div>
  )
}
