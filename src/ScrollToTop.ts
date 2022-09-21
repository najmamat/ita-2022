// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// export const ScrollToTop = () => {
//   const pathname = useLocation()

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [pathname])

//   return null
// }

import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// inspiration
// > https://mtm.dev/react-router-scroll-to-top/

export const ScrollToTop = () => {
  const location = useLocation()
  // don't scroll app when use do refresh in the browser
  const [isInitRender, setIsInitRender] = useState(true)

  useEffect(() => {
    if (isInitRender) {
      setIsInitRender(false)
      return
    }
    window.scrollTo(0, 0)
  }, [location])

  return null
}
