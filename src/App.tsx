import './global.scss'
import { Footer } from './components/Footer'
import { Grid2Column } from './components/UICore/Grid2Column'
import { Header } from './components/navigation/Header'
import { HeadingRegular } from './components/UICore/HeadingRegular'
import { Helmet } from 'react-helmet'
import { InsetCardContact } from './components/InsetCardContact'
import { Link } from 'react-router-dom'
import { ListItemTight } from './components/UICore/ListItemTight'
import { ProjectLinkCard } from './components/ProjectLinkCard'
import { Spacer } from './components/Spacer'
import { containerContentStyle, headingLarge, theme } from './theme'
import { css } from '@emotion/css'
import { urls } from './urls'
import React from 'react'
import banana from './images/banana.png'
import blogmobile from './images/blogmobile.png'
import castrocap from './images/castrocap.png'
import fireImg from './images/fireImg2.png'
import icon from './images/logo-icon.png'
import jsImg from './images/jsbook.png'
import mobile1 from './images/mobile1.png'
import pexeso from './images/pexeso.png'
import sphereImg from './images/sphereImg.png'
import watch from './images/watch.png'

const styles = {
  headingSmall: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${theme.fontsize.cards};
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.03em;
  `,
  paragraphLargeStyle: css`
    font-size: ${theme.fontsize.text};
    line-height: 1.5;
  `,
  linksListStyle: css`
    align-items: start;
    grid-auto-columns: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-count: 2;
    column-gap: 24px;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      column-count: 1;
    }
  `,
  headingContainerStyle: css`
    z-index: 0;
    max-width: 1600px;
    padding: 128px 96px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: ${theme.breakpoints.desktop}) {
      padding: 112px 64px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: 64px 40px;
    }
  `,
  headingStyle: css`
    ${headingLarge}
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    max-width: 900px;
  `,
  aboutImgStyle: css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    border: 0;
    vertical-align: middle;
    overflow-x: hidden;
    display: inline-block;
    max-width: 100%;
  `,
  aboutImgWrapperStyle: css`
    position: relative;
    overflow: hidden;
    overflow-x: hidden;
    margin-top: 136px;
    margin-bottom: 136px;
    padding-top: 50%;
    margin-left: -9px;
    margin-right: -8px;
    @media screen and (max-width: ${theme.breakpoints.desktop}) {
      margin-top: 112px;
      margin-bottom: 112px;
    }
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      padding-top: 66%;
    }
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      margin-top: 64px;
      margin-bottom: 64px;
      padding-top: 100%;
      margin-right: -10px;
    }
  `,
  paragraphNoMarginStyle: css`
    margin-top: 0;
    margin-bottom: 0;
  `,
  linkStyles: css`
    text-decoration: none;
    color: ${theme.colors.black};
    background-color: ${theme.colors.backgGrey};
    padding: 2px 8px;
    border-radius: 4px;
    :hover {
      opacity: 0.8;
    }
  `,
  aboutHeadingStyle: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  wholePageWrapper: css`
    scroll-behavior: smooth;
  `,
}
export const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <link rel='icon' href={icon} />
        <title>Matouš Najman</title>
        <meta name='theme-color' content={theme.colors.white} />
        <meta name='description' content='Matouš Najman - Software Developer' />
        <link rel='canonical' href='https://najmamat.github.io/portfolio/' />
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
      </Helmet>
      <Header />
      <div className={styles.headingContainerStyle}>
        <h1 className={styles.headingStyle}>
          I’m Matouš — a&nbsp;software developer{' '}
          <span
            className={css`
              color: ${theme.colors.sonicsilver};
            `}
          >
            that cares a lot about making a difference
          </span>
        </h1>
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
          Featured work
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
            urlTo={urls.ita.root}
            title='IT-Absolvent, SmartBrains'
            type='React, Typescript'
            coverImage={watch}
          />
          <ProjectLinkCard
            urlTo={urls.school.root}
            title='University projects, CTU'
            type='Java, SpringBoot, React, Javascript'
            coverImage={sphereImg}
          />
          <ProjectLinkCard
            urlTo={urls.students}
            title='ZeptejteSeStudenta.cz'
            type='Website Design, Implementation'
            coverImage={mobile1}
          />
        </div>
      </div>
      <div className={containerContentStyle} id='about'>
        <Grid2Column>
          <div>
            <HeadingRegular>About me</HeadingRegular>
            <Spacer height={12} />
            <Link className={styles.linkStyles} to={urls.cv}>
              <span
                className={css`
                  font-weight: 600;
                `}
              >
                CV
              </span>
            </Link>
          </div>
          <div className={styles.paragraphLargeStyle}>
            <p className={styles.paragraphNoMarginStyle}>
              I am a <strong>Software Developer</strong> based in <strong>Prague, Czech Rep</strong>
              . I&apos;m a student attending Czech Technical University CTU Faculty of Electrical
              Engineering. My field field of study is{' '}
              <strong>Software Engineering and Technologies SIT.</strong>
            </p>
            <Spacer height={32} />
            <p className={styles.paragraphNoMarginStyle}>
              I have a big passion for <strong>designing and building</strong> Web Apps. I have
              something to offer in every part of <strong>Web App Development</strong> from initial
              thought, prototyping, UX/UI design to implementation, deployment and maintenance of
              the Web App. At the moment I&apos;m concetrating on{' '}
              <strong>Frontend Development</strong>.
            </p>
            <Spacer height={32} />
            <p className={styles.paragraphNoMarginStyle}>
              In my free time I do lots of sports. I am semi-professional ice hockey player playing
              3rd year in University Hockey League for <strong>Engineers Prague</strong>. My second
              most beloved hobby is building custom <strong>keyboards and computers</strong>.
            </p>
          </div>
        </Grid2Column>
      </div>
      <div className={styles.aboutImgWrapperStyle}>
        <img src={fireImg} className={styles.aboutImgStyle}></img>
      </div>
      <div className={containerContentStyle}>
        <Grid2Column>
          <HeadingRegular>Experience</HeadingRegular>
          <div>
            {/* div to display in right column */}
            <ExperienceListItem
              companyName='Mon Alba s.r.o.'
              jobTitle='Web Developer, Frontend, Network administrator'
              duration='February 2020-today'
            ></ExperienceListItem>
            <ExperienceListItem
              companyName='Devoteam Alps & Ice'
              jobTitle='Network administrator, Internal IT'
              duration='December 2021-today'
            ></ExperienceListItem>
            <ExperienceListItem
              companyName='Společnost pro technologie ochrany památek, z.s.'
              jobTitle='Webinar streamer, Video editor'
              duration='September 2019-May 2021'
            ></ExperienceListItem>
          </div>
        </Grid2Column>
      </div>
      <div className={containerContentStyle}>
        <Grid2Column>
          <div>
            {/* div to display in left column */}
            <HeadingRegular>Services</HeadingRegular>
            <Spacer height={64} />
            <ListItemTight>Web development</ListItemTight>
            <ListItemTight>Web governance</ListItemTight>
            <ListItemTight>UX/UI design</ListItemTight>
            <ListItemTight>Copy writing</ListItemTight>
          </div>
          <div>
            {/* div to display in right column */}
            <HeadingRegular>Technologies I have worked with</HeadingRegular>
            <Spacer height={64} />
            <ListItemTight>
              FE&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&ensp;React, Typesript, JS, HTML, CSS, Emotion
            </ListItemTight>
            <ListItemTight>
              BE&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&ensp;SpringBoot, Java, Hazelcast, Kafka, ELK Stack
            </ListItemTight>
            <ListItemTight>Wordpress, Elementor, PageBuilder</ListItemTight>
            <ListItemTight>Python, PostgreSQL, Framer</ListItemTight>
          </div>
        </Grid2Column>
      </div>
      <InsetCardContact />
      <Footer />
    </div>
  )
}

const listItemStyle = css`
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${theme.colors.line};
`
const paragraphStyle = css`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${theme.fontsize.cards};
  line-height: 1.5;
`

type ExperienceListItem = {
  companyName: string
  jobTitle: string
  duration: string
}
export const ExperienceListItem = (props: ExperienceListItem) => {
  return (
    <div className={listItemStyle}>
      <h3 className={styles.headingSmall}>{props.companyName}</h3>
      <Spacer height={4} />
      <h4
        className={css`
          ${styles.headingSmall}
          color: ${theme.colors.grey};
        `}
      >
        {props.jobTitle}
      </h4>
      <Spacer height={16} />
      <div
        className={css`
          ${paragraphStyle}
          color: ${theme.colors.sonicsilver};
        `}
      >
        {props.duration}
      </div>
    </div>
  )
}
