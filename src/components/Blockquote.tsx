import { css } from '@emotion/css'
import { theme } from '../theme'

const styles = {
  blockquoteStyle: css`
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: 0;
    margin-right: 0;
    padding: 40px;
    border: 1px solid ${theme.colors.line};
    border-radius: 12px;
    background-image: linear-gradient(135deg, #ffeded, #ffeedb);
    color: ${theme.colors.black};
    font-size: 24px;
    line-height: 1.5;
    font-weight: 600;
  `,
}
export const Blockquote = (props: { text: string }) => {
  return <div className={styles.blockquoteStyle}>{props.text}</div>
}
