import { Blockquote } from '../../../components/Blockquote'
import { Footer } from '../../../components/Footer'
import { Grid2Column } from '../../../components/UICore/Grid2Column'
import { H2 } from '../../../components/UICore/H2'
import { Header } from '../../../components/navigation/Header'
import { HeadingRegular } from '../../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../../components/InsetCardContact'
import { ParagraphBasic } from '../../../components/UICore/ParagraphBasic'
import { ProjectCodeInfo } from '../../../components/ProjectWithCodeInfo'
import { RichText } from '../../../components/UICore/RichText'
import { Spacer } from '../../../components/Spacer'
import { containerContentStyle } from '../../../theme'
import { css } from '@emotion/css'
import { theme } from '../../../theme'
import { urls } from '../../../urls'
import wordleImg from './wordle.png'

const styles = {
  imgStyle: css`
    width: 100%;
    height: auto;
    max-width: 1600px;
    border-radius: 20px;
  `,
  linkStyle: css`
    color: ${theme.colors.black};
  `,
}

export const WordleClone = () => {
  return (
    <div>
      <Header />
      <ProjectCodeInfo
        title='Wordle Clone'
        description='This project was created as a semestral project for the subject KAJ - Klientské aplikace v Javascriptu (Client-side applications in Javascript) at CTU in Prague. The goal of the project was to create a clone of the website Wordle. The application is created with React and Javascript.'
        client='Czech Technical University in Prague'
        type='Semestral project'
        year='2022'
        code='https://github.com/najmamat/wordgame-code'
        prevPageUrl={urls.school.root}
      />
      <div className={containerContentStyle}>
        <Grid2Column>
          <HeadingRegular>About the App</HeadingRegular>

          <RichText>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              The goal of this project was to create a clone of the website {''}
              <a
                className={styles.linkStyle}
                href='https://www.nytimes.com/games/wordle/index.html'
                target='_blank'
                rel='noreferrer'
              >
                NY Times Wordle
              </a>
              . App is deployed on GitHub pages, it can be found on this link:{' '}
              <a
                className={styles.linkStyle}
                href='https://najmamat.github.io/word-game/'
                target='_blank'
                rel='noreferrer'
              >
                https://najmamat.github.io/word-game/
              </a>
            </ParagraphBasic>
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>How to play</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              The goal of the game is to guess the desired word that is randomly chosen from english
              dictionary every round. The player has 6 attemps to guess the word. The player can
              only guess valid english words. Words can be entered with a keyboard or by clicking on
              an onscreen keyboard. The player has to submit the word by hitting ENTER.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              After the player submits the word, the game will color the letters by following rules.
              If this letter present in the word and it is on a right position, it will be colored
              green. If the letter is present in the word but it is on a wrong position, it will be
              colored yellow. If the letter is not present in the word, it will be colored grey.
            </ParagraphBasic>
          </RichText>
        </Grid2Column>
        <HeadingRegular>Showcase picture</HeadingRegular>
        <Spacer height={32} />
        <img className={styles.imgStyle} src={wordleImg} />
      </div>
      <InsetCardContact />
      <Footer />
    </div>
  )
}
