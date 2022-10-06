import { AnimatePresence } from 'framer-motion'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { DropResult } from 'react-beautiful-dnd'
import { css } from '@emotion/css'
import { motion } from 'framer-motion'
import { useComponentDidMount } from '../helperFunctions'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import dropdownIcon from '../images/mousedown.png'

const styles = {
  readMoreStyles: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  icon: css`
    width: 40px;
    height: 40px;
  `,
}

export const ScrollDownIcon = () => {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={styles.readMoreStyles}
          animate={{ opacity: 1 }}
        >
          <a href='#description'>
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={dropdownIcon}
              alt='scrolldown'
              className={styles.icon}
            />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
