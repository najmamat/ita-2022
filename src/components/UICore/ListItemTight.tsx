import { css } from '@emotion/css'
import { theme } from '../../theme'

const styles = {
  listItemTightStyle: css`
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${theme.colors.line};
  `,
}

export const ListItemTight = (props: { children: React.ReactNode }) => {
  return <div className={styles.listItemTightStyle}>{props.children}</div>
}
