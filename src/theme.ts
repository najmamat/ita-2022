import './fonts/InterWeb/inter.css'
import { css } from '@emotion/css'

export const theme = {
  font: {
    primary: 'Inter,sans-serif;',
  },
  colors: {
    black: '#000000',
    lynxwhite: '#F7F7F7',
    sonicsilver: '#757575',
    white: '#ffffff',
    rosefrost: '#FFEDE9',
    green: '#06842c',
    grey: '#525252',
    line: '#f0f0f0',
    red: '#f69697',
    backgGrey: '#dcdcdc',
  },
  fontsize: {
    h1: '64px',
    h2: '32px',
    text: '28px',
    cards: '20px',
    menu: '18px',
  },
  lineheight: {
    h1: '74px',
    h2: '42px',
    text: '28px',
    cards: '26px',
    menu: '23px',
  },
  breakpoints: {
    tablet: '767px',
    mobile: '479px',
    desktop: '991px',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ffeded, #ffeedb)',
  },
}

export const headingLarge = css`
  margin-top: 0;
  margin-bottom: 0;
  font-family: ${theme.font.primary};
  font-size: ${theme.fontsize.h1};
  line-height: 1.15;
  font-weight: 600;
  letter-spacing: -0.04em;
  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    font-size: 40px;
  }
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`
export const containerContentStyle = css`
  z-index: 0;
  max-width: 1600px;
  padding: 128px 96px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    padding: 112px 64px;
  }
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: 64px 40px;
  }
`
