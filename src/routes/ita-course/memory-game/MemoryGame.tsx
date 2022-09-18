import * as React from 'react'
import { Footer } from '../../../components/Footer'
import { H2 } from '../../../components/UICore/H2'
import { Header } from '../../../components/navigation/Header'
import { HeadingRegular } from '../../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../../components/InsetCardContact'
import { SubpageInfo } from '../../../components/SubpageInfo'
import { arrayToMatrix } from '../../../helperFunctions'
import { containerContentStyle, theme } from '../../../theme'
import { css } from '@emotion/css'
import { generateId } from '../../../helperFunctions'
import { images } from './pics'
import { motion } from 'framer-motion'
import { shuffleCards } from '../../../helperFunctions'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { urls } from '../../../urls'
import { useComponentDidMount } from '../../../helperFunctions'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../../helperFunctions'
import { v4 as uuidv4 } from 'uuid'
import cardbackground from './pictures/cardbackg.png'
import gradient from './pictures/gradient.png'

const styles = {
  grid4Column: css`
    display: grid;
    align-items: start;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin: 0 100px;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: 1fr 1fr;
      margin: 0 0;
    }
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: 1fr 1fr;
      margin: 0 0;
    }
  `,
  cardContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 0;
    width: 300px;
    height: 150px;
    border-radius: 8px;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 150px;
    }
  `,
  cardImage: css`
    :hover {
      cursor: pointer;
    }
  `,
}

type Card = {
  id: string
  img: string
  isFlipped: boolean
  isGuessed: boolean
}

type CardProps = {
  card: Card
  handleCardClick: (card: Card) => void
}

const CardComponent = (props: CardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.95 }}>
      <div
        className={styles.cardContainer}
        onClick={() => {
          props.handleCardClick(props.card)
        }}
      >
        <img
          className={styles.cardImage}
          src={props.card.isFlipped ? props.card.img : cardbackground}
        />
      </div>
    </motion.div>
  )
}

const GridComponent = () => {
  const [cards, setCards] = useState<Card[][]>([])
  const [flippedCards, setFlippedCards] = useState<[] | [Card] | [Card, Card]>([])

  useComponentDidMount(() => {
    const newCards = images
      .map(img => ({
        id: uuidv4(),
        img: img,
        isGuessed: false,
        isFlipped: false,
      }))
      .flatMap(i => [
        { ...i, id: uuidv4() },
        { ...i, id: uuidv4() },
      ])
    const shuffledCards = shuffleCards(newCards)
    const cardsGridArr = arrayToMatrix(shuffledCards, 4)
    setCards(cardsGridArr)
  })

  const handleCardClick = (card: Card) => {
    if (card.isGuessed === true) return
    if (flippedCards.length === 1 && flippedCards[0].id === card.id) return
    setCards(
      cards.map(row => row.map(c => (c.id === card.id ? { ...c, isFlipped: !c.isFlipped } : c)))
    )
    if (flippedCards.length < 2) {
      setFlippedCards([...flippedCards, card] as [Card] | [Card, Card])
    }
    if (flippedCards.length !== 2) {
      return
    } else {
      setCards(
        cards.map(row =>
          row.map(c =>
            c.id === flippedCards[0].id || c.id === flippedCards[1].id
              ? flippedCards[0].img === flippedCards[1].img
                ? { ...c, isGuessed: true }
                : { ...c, isFlipped: false }
              : c
          )
        )
      )
    }
    setFlippedCards([])
  }

  return (
    <div className={styles.grid4Column}>
      {cards.map(row =>
        row.map(card => (
          <CardComponent card={card} key={card.id} handleCardClick={handleCardClick} />
        ))
      )}
    </div>
  )
}

export const MemoryGame = () => {
  return (
    <>
      <Header />
      <SubpageInfo
        title='Memory Game'
        description={`This project was created as a part of IT-absolvent frontend ReactJS course. The
                purpose of the project was to create a simple web application where user is trying to guess the pair of randomly distributed pictures across 4x4 field. On mobile devices, the game is made into 2x8 field.
                The game is played by clicking on the picture and the picture is flipped over and the game is over when all the pictures are guessed.
                After clicking on 2 cards, you ahve to click for the 3rd timeto guess again. If you guess wrong, the picture is flipped back over. `}
        client='IT-absolvent React Course'
        type='Portfolio project'
        year='2022'
        prevPageUrl={urls.ita.root}
      />
      <div className={containerContentStyle} id='about'>
        <GridComponent />
      </div>
      <InsetCardContact />
      <Footer />
    </>
  )
}
