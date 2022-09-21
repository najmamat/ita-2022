import { Link } from 'react-router-dom'
import { css } from '@emotion/css'
import { theme } from '../../../theme'
import { useComponentDidMount } from '../../../helperFunctions'
import { useEffect, useState } from 'react'
import React from 'react'

const codeColor = '#2ad400'

const styles = {
  baseStyle: css`
    width: 105%;
    height: 103vh;
    padding: 12px;
    margin: -3em;
    background-color: black;
    font-family: ${theme.font.primary};
    overflow: hidden;
    border: none;
  `,
  contentStyle: css`
    color: ${codeColor};
    font-size: 16px;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 3em;
  `,
  linkStyle: css`
    color: ${codeColor};
    position: absolute;
    bottom: 30px;
    width: 91%;
    display: flex;
    justify-content: right;
    align-items: center;
  `,
}

export const Hackertyper = () => {
  const [code, setCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const charsPrintedOnKeyPress = 10

  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const paragraphRef = React.useRef<HTMLParagraphElement | null>(null)

  useComponentDidMount(() => {
    containerRef.current?.focus()
    fetch('sourceCode.txt')
      .then(response => response.text())
      .then(text => setCode(text))
  })

  const sliceCode = () => {
    return code.slice(0, currentIndex)
  }

  return (
    <div
      className={styles.baseStyle}
      onKeyDown={() => {
        setCurrentIndex(prevCurrIndex => prevCurrIndex + charsPrintedOnKeyPress)
        paragraphRef.current?.scrollIntoView()
      }}
      tabIndex={0}
      ref={containerRef}
    >
      <div className={styles.contentStyle}>{currentIndex > 0 ? sliceCode() : ''}</div>
      <Link className={styles.linkStyle} to='/'>
        GO BACK HOME
      </Link>
      <p ref={paragraphRef}></p>
    </div>
  )
}
