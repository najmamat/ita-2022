import { css } from '@emotion/css'
const styles = {
  richTextStyle: css`
    display: block;
    line-height: 1.5;
    text-align: left;
  `,
}

export const RichText = (props: { children: React.ReactNode }) => {
  return <div className={styles.richTextStyle}>{props.children}</div>
}
