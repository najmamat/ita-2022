import { css } from '@emotion/css'
import { theme } from '../../theme'

const styles = {
  grid2ColumnStyle: css`
    display: grid;
    align-items: start;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-column-gap: 72px;
    grid-row-gap: 80px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
      grid-column-gap: 32px;
      grid-row-gap: 56px;
    }
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      grid-row-gap: 40px;
    }
  `,
}

export const Grid2Column = (props: { children: React.ReactNode }) => {
  return <div className={styles.grid2ColumnStyle}>{props.children}</div>
}
