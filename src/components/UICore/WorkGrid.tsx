import { css } from '@emotion/css'
import { theme } from '../../theme'
const styles = {
  workGridStyle: css`
    align-items: start;
    grid-auto-columns: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-count: 2;
    column-gap: 24px;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      column-count: 1;
    }
  `,
}

export const WorkGrid = (props: { children: React.ReactNode }) => {
  return <div className={styles.workGridStyle}>{props.children}</div>
}
