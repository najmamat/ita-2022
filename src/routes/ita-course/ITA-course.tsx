import { Blockquote } from '../../components/Blockquote'
import { Footer } from '../../components/Footer'
import { Grid2Column } from '../../components/UICore/Grid2Column'
import { H2 } from '../../components/UICore/H2'
import { Header } from '../../components/navigation/Header'
import { HeadingRegular } from '../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../components/InsetCardContact'
import { ParagraphBasic } from '../../components/UICore/ParagraphBasic'
import { ProjectLinkCard } from '../../components/ProjectLinkCard'
import { RichText } from '../../components/UICore/RichText'
import { SubpageInfo } from '../../components/SubpageInfo'
import { containerContentStyle } from '../../theme'
import { css } from '@emotion/css'
import { theme } from '../../theme'
import { urls } from '../../urls'
import blogmobile from '../../images/blogmobile.png'
import castrocap from '../../images/castrocap.png'
import mobile from '../../images/mobile1.png'
import pexeso from '../../images/pexeso.png'
import sphere from '../../images/sphereImg.png'
import watch from '../../images/watch.png'

const styles = {
  linksListStyle: css`
    align-items: start;
    grid-auto-columns: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-count: 3;
    column-gap: 24px;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      column-count: 1;
    }
  `,
}

export const ITA = () => {
  return (
    <div>
      <Header />
      <SubpageInfo
        title='IT-Absolvent Course'
        description='I’m an absolvent of ITA Course 2022. The course took 10 weeks. The course included 3 hour lecture each week and 1 on 1 code reviews with our mentor. I have created my portfolio site during the as well bunch of small web app projects to showcase my skills as a programmer and designer.'
        client='SmartBrains, Brno'
        type='React, Typescript course'
        year='2022'
        prevPageUrl={urls.root}
      />
      <div className={containerContentStyle} id='about'>
        <Grid2Column>
          <HeadingRegular>About IT-Absolvent Course</HeadingRegular>

          <RichText>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              At the start of the course, we were introduced to the basic concepts of React.js
              library and how does the programmers workflow look like from writing the first line of
              code to deploying the application to the production server. We were also introduced to
              the basic concepts of Typescript and how does it differ from Javascript.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              For better understading of the whole ecosystem of Web development, we started working
              with Node.js. We also learned about frontend architecture of small and big web
              applications. I also learned about all the cons of programming SPA (Single Page
              Applications).
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Later in the course, we started focusing on Typescript details and we have looked
              deeper into principals React.js library. We also learned about the basics of Redux and
              how to use it in our applications.
            </ParagraphBasic>
            <Blockquote
              text={
                'The course was very intense and I have learned a lot of new things. My favourite part of the course was 1 on 1 code review with our mentor, this was the best way to learn new things and to get feedback on my code.'
              }
            ></Blockquote>
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>What have I created</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              The course was as practical as possible, while still going through all of the
              theoretical topics. I have created a bunch of small web apllications and my portfolio
              site to showcase my skill as a programmer and designer.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Small web applications varied from simple counter app to more complex ones as we
              progressed, such as Blog Web App, that uses its own backend API. I also created
              backend for Blog Web App as a part of the course using Node.js and Express.js.
              Projects can be found on links below.
            </ParagraphBasic>
          </RichText>
        </Grid2Column>
      </div>
      <div className={containerContentStyle} id='work'>
        <h2
          className={css`
            margin-top: 0px;
            margin-bottom: 20px;
            font-size: 18px;
            line-height: 1.3;
            font-weight: 600;
            letter-spacing: -0.03em;
            @media screen and (max-width: ${theme.breakpoints.mobile}) {
              font-size: 18px;
            }
          `}
        >
          Portfolio projects
          <span
            className={css`
              color: ${theme.colors.sonicsilver};
            `}
          >
            &nbsp;&nbsp;·&nbsp;&nbsp;2022
          </span>
        </h2>
        {/* Content Cards */}
        <div className={styles.linksListStyle}>
          <ProjectLinkCard
            urlTo={urls.ita.todoRedux}
            title='Todo App - Redux'
            type='React, Typescript Course'
            coverImage={watch}
          />
          <ProjectLinkCard
            urlTo={urls.ita.memoryGame}
            title='Memory Game'
            type='React, Typescript Course'
            coverImage={castrocap}
          />
          <ProjectLinkCard
            urlTo={urls.ita.mortgageCalculator}
            title='Mortgage Calculator'
            type='React, Typescript Course'
            coverImage={sphere}
          />

          <ProjectLinkCard
            urlTo={urls.ita.jshistory}
            title='History of Javascript'
            type='React, Typescript Course'
            coverImage={pexeso}
          />
          <ProjectLinkCard
            urlTo={urls.ita.blog.root}
            title='Blog with Markdown'
            type='React, Typescript Course'
            coverImage={blogmobile}
          />
          <ProjectLinkCard
            urlTo={urls.ita.hackertyper}
            title='Hacker Typer'
            type='React, Typescript Course'
            coverImage={mobile}
          />
        </div>
      </div>
      <InsetCardContact />
      <Footer />
    </div>
  )
}
