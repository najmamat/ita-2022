import { css } from '@emotion/css'
import { theme } from '../../theme'

const styles = {
  h2Style: css`
    font-size: ${theme.fontsize.h1};
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme.colors.black};
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.04em;
  `,
}
export const H2 = (props: { children: React.ReactNode; customStyle?: React.CSSProperties }) => {
  return (
    <h2
      className={css`
        ${styles.h2Style}
      `}
      style={{ ...props.customStyle }}
    >
      {props.children}
    </h2>
  )
}
