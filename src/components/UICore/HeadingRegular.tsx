import { css } from '@emotion/css'
import { theme } from '../../theme'
const styles = {
  headingRegularStyle: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${theme.fontsize.h2};
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.02em;
    display: flex;
    flex-direction: row;
  `,
}
export const HeadingRegular = (props: { children: React.ReactNode }) => {
  return <h2 className={styles.headingRegularStyle}>{props.children}</h2>
}
