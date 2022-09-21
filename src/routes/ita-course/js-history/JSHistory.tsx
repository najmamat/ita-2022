import { Blockquote } from '../../../components/Blockquote'
import { Footer } from '../../../components/Footer'
import { Grid2Column } from '../../../components/UICore/Grid2Column'
import { H2 } from '../../../components/UICore/H2'
import { Header } from '../../../components/navigation/Header'
import { HeadingRegular } from '../../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../../components/InsetCardContact'
import { ParagraphBasic } from '../../../components/UICore/ParagraphBasic'
import { ProjectCodeInfo } from '../../../components/ProjectWithCodeInfo'
import { ProjectLinkCard } from '../../../components/ProjectLinkCard'
import { RichText } from '../../../components/UICore/RichText'
import { Spacer } from '../../../components/Spacer'
import { SubpageInfo } from '../../../components/SubpageInfo'
import { WorkGrid } from '../../../components/UICore/WorkGrid'
import { containerContentStyle } from '../../../theme'
import { css } from '@emotion/css'
import { theme } from '../../../theme'
import { urls } from '../../../urls'
import React from 'react'
import jsImg from '../../../images/jsbook.png'
import jsovertime from './jsovertime.png'
import ntbcode from '../../../images/ntbcode.png'
import sphereImg from '../../../images/sphereImg.png'

const firstImgStyle = css`
  width: 100%;
  margin-bottom: 24px;
  border-radius: 12px;
  border: 0;
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 16px;
    border-radius: 0;
  }
`

export const JSHistory = () => {
  return (
    <div>
      <Header />
      <div className='fix picture'>
        <div
          className={css`
            ${containerContentStyle}
            padding: 0;
            @media screen and (max-width: ${theme.breakpoints.mobile}) {
              padding-left: 0;
              padding-right: 0;
              margin-left: -10px;
              margin-right: -10px;
            }
          `}
        >
          <img src={jsImg} className={firstImgStyle} />
        </div>
      </div>
      <div className={containerContentStyle} id='about'>
        <Grid2Column>
          <HeadingRegular>The history of JavaScript</HeadingRegular>

          <RichText>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              JavaScript is everywhere, and for the seventh year in a row, it has been ranked the
              most commonly used programming language, with 67.8% of developers employing it in
              2019. Its ascent to the world’s most popular programming language is synonymous with
              the rise of the internet itself.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Created out of necessity, it is used to build 95.2% (1.52 billion) of websites today,
              including some of the world’s largest, like Facebook and YouTube. Without it, we would
              not have popular and useful web apps such as Google Maps and eBay.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              So, without further ado, let’s take a look at what JavaScript is, how and why it was
              created, and what’s next for the language.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              So, without further ado, let’s take a look at what JavaScript is, how and why it was
              created, and what’s next for the language.
            </ParagraphBasic>
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>What is JavaScript?</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              JavaScript is a scripting language that is one of the three core languages used to
              develop websites. Whereas HTML and CSS give a website structure and style, JavaScript
              lets you add functionality and behaviors to your website, allowing your website’s
              visitors to interact with content in many imaginative ways.
            </ParagraphBasic>
            <Blockquote
              text={
                'JavaScript is primarily a client-side language, meaning it runs on your computerwithin your browser. However, more recently the introduction of Node.js has allowed JavaScript to also execute code on servers.'
              }
            ></Blockquote>
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>JavaScript Origins</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              The early to mid-1990s was an important time for the internet. Key players like
              Netscape and Microsoft were in the midst of browser wars, with Netscape’s Navigator
              and Microsoft’s Internet Explorer going head to head.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              In September 1995, a Netscape programmer named Brandan Eich developed a new scripting
              language in just 10 days. It was originally named Mocha, but quickly became known as
              LiveScript and, later, JavaScript.
            </ParagraphBasic>
          </RichText>
        </Grid2Column>
      </div>
      <div
        className={css`
          ${containerContentStyle}
          padding: 0 96px;
        `}
        id='content-part2'
      >
        <Grid2Column>
          <HeadingRegular>ECMAScript is Born</HeadingRegular>
          <RichText>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              In 1997, due to JavaScript’s rapid growth, it became clear that the language would
              need to be properly maintained and managed. Therefore, Netscape handed the job of
              creating a language specification to the European Computer Manufacturers Association
              (ECMA), a body founded with the goal of standardizing computing. The ECMA
              specifications were labeled ECMA-262 and ECMAScript languages included JavaScript,
              JScript, and ActionScript.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Between 1997 and 1999, ECMA-262 had three revisions, but nearly 10 years later,
              version 4 was abandoned due to differing opinions on the direction of the language and
              its proposed features. Interestingly, many of these controversial features, such as
              generators, iterators, and destructuring assignments, have been included in more
              recent ECMAScript specifications.
            </ParagraphBasic>
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>Finding Common Ground</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Following a 2008 event in Oslo, the ECMAScript 4 proposals were scaled back by many
              organizations and parties involved with JavaScript, including Yahoo, Google, and
              Microsoft. The project was codenamed Harmony and it came to fruition in 2015, when
              ECMAScript 6 was released.
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              In 2009, the CommonJS project set out to define and promote JavaScript development
              outside the browser by using modules to package useful code and functionality. This
              paved the way for Node.js as an environment to run browserless JavaScript. Now the
              language that ran the frontend of the internet was able to tackle the servers behind
              the scenes.
            </ParagraphBasic>
          </RichText>
        </Grid2Column>
      </div>
      <div className='fix picture'>
        <div
          className={css`
            ${containerContentStyle}
            padding-top: 128px;
            padding-bottom: 0;
          `}
        >
          <img src={jsovertime} className={firstImgStyle} />
        </div>
      </div>
      {/* <div className={containerContentStyle}>
        <HeadingRegular>Other work</HeadingRegular>
        <Spacer height={32} />
        <WorkGrid>
          <ProjectLinkCard
            urlTo={urls.ita.todoRedux}
            title='Todo App Redux'
            type='IT-Absolvent mini project'
            coverImage={sphereImg}
          />
          <ProjectLinkCard
            urlTo={urls.ita.mortgageCalculator}
            title='Mortgage Calculator'
            type='IT-Absolvent mini project'
            coverImage={ntbcode}
          />
        </WorkGrid>
      </div> */}
      <ProjectCodeInfo
        title='Javascript history Web Page'
        description='This project was created at the start of IT-absolvent frontend ReactJS course. The
                purpose of the project was to create a simple web application that would say
                something about programming language we will be learning during course, Javascript.'
        client='IT-absolvent React Course'
        type='Portfolio project'
        year='2022'
        prevPageUrl={urls.ita.root}
        code='https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course/js-history'
      />
      <Footer />
    </div>
  )
}
