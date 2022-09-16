import { css } from '@emotion/css'
import { theme } from '../../theme'

const styles = {
  paragraphBasicStyle: css`
    max-width: 60ch;
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme.colors.grey};
    font-size: ${theme.fontsize.cards};
    line-height: 1.5;
    letter-spacing: -0.01em;
  `,
}

export const ParagraphBasic = (props: {
  children: React.ReactNode
  customStyle?: React.CSSProperties
}) => {
  return (
    <div
      className={css`
        ${styles.paragraphBasicStyle}
      `}
      style={{ ...props.customStyle }}
    >
      {props.children}
    </div>
  )
}
