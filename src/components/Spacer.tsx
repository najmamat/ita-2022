import { css } from '@emotion/css'

export const Spacer = (props: { height: number }) => {
  return (
    <div
      className={css`
        display: block;
        height: ${props.height}px;
        width: ${props.height}px;
        background-color: transparent;
      `}
    />
  )
}
