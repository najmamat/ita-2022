import { Blockquote } from '../../components/Blockquote'
import { Footer } from '../../components/Footer'
import { Grid2Column } from '../../components/UICore/Grid2Column'
import { H2 } from '../../components/UICore/H2'
import { Header } from '../../components/navigation/Header'
import { HeadingRegular } from '../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../components/InsetCardContact'
import { ParagraphBasic } from '../../components/UICore/ParagraphBasic'
import { ProjectCodeInfo } from '../../components/ProjectWithCodeInfo'
import { RichText } from '../../components/UICore/RichText'
import { Spacer } from '../../components/Spacer'
import { containerContentStyle, theme } from '../../theme'
import { css } from '@emotion/css'
import { urls } from '../../urls'
import React from 'react'

const styles = {
  linkStyle: css`
    color: ${theme.colors.black};
  `,
}

export const RoomRes = () => {
  return (
    <div>
      <Header />
      <ProjectCodeInfo
        title='RoomRes'
        description='This project was created as a semestral project for the subject NSS - Návrh softwarových systémů (Design of Software Systems) at CTU in Prague. The goal of the project was to create a system for managing reservations of rooms in an office. The system is composed of a frontend and a backend. The frontend is a React application, the backend is a Java application. The backend is composed of microservices, which communicate with each other using Kafka. The system also uses ELK stack for logging.'
        client='Czech Technical University in Prague'
        type='Semestral project'
        year='2022'
        code={urls.github.school.roomres}
        prevPageUrl={urls.school.root}
      />
      <div
        className={css`
          ${containerContentStyle}
          padding-top: 0;
        `}
      >
        <HeadingRegular>Showcase video 1</HeadingRegular>
        <Spacer height={32} />
        <video
          src={process.env.PUBLIC_URL + '/videos/showcase_1.mp4'}
          width='3440'
          height='1440'
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          controls
        />
        <Spacer height={64} />
        <HeadingRegular>Showcase video 2</HeadingRegular>
        <Spacer height={32} />
        <video
          src={process.env.PUBLIC_URL + '/videos/showcase_2.mp4'}
          width='3440'
          height='1440'
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          controls
        />
        <Spacer height={64} />
        <Grid2Column>
          <HeadingRegular>About the App</HeadingRegular>

          <RichText>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              It is a system for managing reservations of rooms in an office. Frontend is deployed
              on {''}
              <a
                className={styles.linkStyle}
                href='https://nss-frontend.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                https://nss-frontend.vercel.app/
              </a>
              . It also has basic authentication. The app is composed of backend application,
              frontend and database.
            </ParagraphBasic>
            <H2 customStyle={{ marginBottom: '32px', marginTop: '32px' }}>Technologies used</H2>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              For backend we chose Java + SpringBoot, database is PostgreSQL. For caching we used
              Hazelcast cluster cache. Communication between microservices is done using Kafka. JWT
              + Interceptors are used for authentication. For logging we used ELK stack + Logstash.
            </ParagraphBasic>
            <Blockquote
              text={
                'We chose Microservices as our architecture, so we can learn more about Docker and try something different from MVC.'
              }
            ></Blockquote>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Backend part of this app is not deployed anywhere, because it cost a lot to pay for
              cluster hosting. You can try out working app on localhost. README on github has
              step-by-step instructions with pdf documentation (link in the description).
            </ParagraphBasic>
          </RichText>
        </Grid2Column>
      </div>
      <Footer />
    </div>
  )
}
