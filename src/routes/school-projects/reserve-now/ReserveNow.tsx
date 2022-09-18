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
import ImageGallery from 'react-image-gallery'
import React from 'react'
import resn1 from './resn1.png'
import resn2 from './resn2.png'
import resn3 from './resn3.png'
import resn4 from './resn4.png'
import resn5 from './resn5.png'
import resn6 from './resn6.png'

const styles = {
  linkStyle: css`
    color: ${theme.colors.black};
  `,
}

const thumbnailWidthHeight = 400

const images = [
  {
    original: resn1,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: resn2,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: resn3,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: resn4,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: resn5,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: resn5,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
]

export const ReserveNow = () => {
  return (
    <div>
      <Header />
      <ProjectCodeInfo
        title='ReserveNow'
        description='This project was created as a semestral project for the subject RSP - Řízení softwarových projektů (Software Project Management) at CTU in Prague. The goal of the project was to try out working in bigger group. This project was created in a group of 12 people. We used SCRUM methodology for project management. The project is composed of a frontend and a backend. The frontend is a React application, the backend is a Java application.'
        client='Czech Technical University in Prague'
        type='Semestral project'
        year='2022'
        code='https://github.com/najmamat/reservenow'
        prevPageUrl={urls.school.root}
      />
      <div className={containerContentStyle}>
        <Grid2Column>
          <HeadingRegular>About the App</HeadingRegular>

          <RichText>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              ReserveNow is a reservation system creator. It was inspired by{' '}
              <a
                className={styles.linkStyle}
                href='https://www.reenio.cz/'
                target='_blank'
                rel='noreferrer'
              >
                Reenio
              </a>
              . Users can create their own reservation system and manage them on the same platform.
              The main idea was to create 1 platform for business owners and customers to manage
              reservations. The app is composed of backend and frontend parts. During the
              development, we had a basic management structure of 1 boss, then the rest of the team
              was separated into 2 groups (fe, be). Each group had its own scrum master, manager.
              Detailed description and documentation of the project can be found on github.
            </ParagraphBasic>
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>Technologies used</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              For backend we chose Java + SpringBoot, database is PostgreSQL. Due to working in a
              big group, we had to work a lot with Docker. Before we started working on FE, we made
              fully functional prototype in Figma. For FE we used React with Javascript and SCSS.
            </ParagraphBasic>
            <Blockquote
              text={
                'The project was a great experience for me. I learned a lot about working in a big group and how to manage it. I also learned a lot about working with Docker and how to set up a full stack application.'
              }
            />
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>
              My role in the project
            </H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              At first I was working with the BE team on designing our achitecture, but later in the
              project I join FE part of the team to help with finishing Figma prototype and help
              with implementation.
            </ParagraphBasic>
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>What I learned</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              I learned a lot about working in a big group and how to manage it. At first it was
              really hard to get work done in such a big group, but thanks to agile development
              practices, we pushed through. I also learned a lot about working with Docker and how
              to set up a full stack application.
            </ParagraphBasic>
          </RichText>
        </Grid2Column>
        <Spacer height={32} />
        <HeadingRegular>Showcase of the App</HeadingRegular>
        <Spacer height={32} />
        <ImageGallery
          items={images}
          showPlayButton={false}
          disableThumbnailScroll={true}
          showNav={false}
          showFullscreenButton={false}
          autoPlay={true}
          slideInterval={6000}
          lazyLoad={true}
        />
      </div>
      <InsetCardContact />
      <Footer />
    </div>
  )
}
