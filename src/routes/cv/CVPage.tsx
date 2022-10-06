import * as React from 'react'
import { Blockquote } from '../../components/Blockquote'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { ExperienceListItem } from '../../App'
import { Footer } from '../../components/Footer'
import { Grid2Column } from '../../components/UICore/Grid2Column'
import { H2 } from '../../components/UICore/H2'
import { Header } from '../../components/navigation/Header'
import { HeadingRegular } from '../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../components/InsetCardContact'
import { List } from '@mui/material'
import { ListItemTight } from '../../components/UICore/ListItemTight'
import { ParagraphBasic } from '../../components/UICore/ParagraphBasic'
import { ResponsiveContainer } from 'recharts'
import { RichText } from '../../components/UICore/RichText'
import { Spacer } from '../../components/Spacer'
import { containerContentStyle, theme } from '../../theme'
import { css } from '@emotion/css'
import { formatMoney } from '../../helperFunctions'
import { urls } from '../../urls'
import { useEffect, useState } from 'react'
import CV from '../../documents/CV.pdf'
import githubIcon from './github-icon.png'
import linkedinIcon from './linkedin-icon.png'

const styles = {
  headingExtraLarge: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 80px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -0.03em;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      font-size: 52px;
    }
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: 42px;
    }
  `,
  projectDetailsWrapperStyle: css`
    display: flex;
    -webpack-box-pack: justify;
    justify-content: space-between;
    grid-column-gap: 16px;
  `,
  headingExtraSmall: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${theme.fontsize.menu};
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.03em;
  `,
  contentBlockContainer: css`
    z-index: 0;
    max-width: 1600px;
    padding: 64px 96px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: ${theme.breakpoints.desktop}) {
      padding: 32px 64px;
    }
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 32px 40px;
    }
  `,
  paragraphStyle: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${theme.fontsize.cards};
    line-height: 1.5;
    color: ${theme.colors.grey};
  `,
  hrefStyle: css`
    text-decoration: none;
    color: ${theme.colors.grey};
  `,
  iconStyle: css`
    width: 28px;
    height: 28px;
  `,
}

export const CVPage = () => {
  return (
    <>
      <Header />
      <div className={containerContentStyle} id={urls.anchor.work}>
        <Grid2Column>
          <h1 className={styles.headingExtraLarge}>Matouš Najman</h1>
          <div>
            {/* <Spacer height={64} /> */}
            <ListItemTight>
              <div className={styles.projectDetailsWrapperStyle}>
                <h2 className={styles.headingExtraSmall}>Location</h2>
                <h3
                  className={css`
                    ${styles.headingExtraSmall}
                    color: ${theme.colors.grey};
                  `}
                >
                  Prague, Czech Republic
                </h3>
              </div>
            </ListItemTight>
            <ListItemTight>
              <div className={styles.projectDetailsWrapperStyle}>
                <h2 className={styles.headingExtraSmall}>E-mail</h2>
                <h3
                  className={css`
                    ${styles.headingExtraSmall}
                    color: ${theme.colors.grey};
                  `}
                >
                  <a className={styles.hrefStyle} href='mailto:matous@najman.cz'>
                    matous@najman.cz
                  </a>
                </h3>
              </div>
            </ListItemTight>
            <ListItemTight>
              <div className={styles.projectDetailsWrapperStyle}>
                <h2 className={styles.headingExtraSmall}>CV</h2>
                <h3
                  className={css`
                    ${styles.headingExtraSmall}
                    color: ${theme.colors.grey};
                  `}
                >
                  <a className={styles.hrefStyle} href={CV} target='_blank' rel='noreferrer'>
                    open pdf
                  </a>
                </h3>
              </div>
            </ListItemTight>
            <ListItemTight>
              <div className={styles.projectDetailsWrapperStyle}>
                <h2 className={styles.headingExtraSmall}>Socials</h2>
                <div>
                  <a href='https://github.com/najmamat' target='_blank' rel='noreferrer'>
                    <img src={githubIcon} className={styles.iconStyle} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/matou%C5%A1-najman-923414224'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={linkedinIcon} className={styles.iconStyle} />
                  </a>
                </div>
              </div>
            </ListItemTight>
          </div>
        </Grid2Column>
      </div>
      <div className={styles.contentBlockContainer} id={urls.anchor.about}>
        <Grid2Column>
          <HeadingRegular>Technologies I have worked with</HeadingRegular>

          <RichText>
            <ListItemTight>
              <div className={styles.paragraphStyle}>
                FE&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&ensp;React, Typesript, JS, HTML, CSS, Emotion,
                Framer
              </div>
            </ListItemTight>
            <ListItemTight>
              <div className={styles.paragraphStyle}>
                BE&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&ensp;Java, SpringBoot, Hazelcast, Kafka, ELK Stack
              </div>
            </ListItemTight>
            <ListItemTight>
              <div className={styles.paragraphStyle}>Wordpress, Elementor, PageBuilder</div>
            </ListItemTight>
            <ListItemTight>
              <div className={styles.paragraphStyle}>Python, PostgreSQL</div>
            </ListItemTight>
          </RichText>
        </Grid2Column>
      </div>
      <div className={styles.contentBlockContainer}>
        <Grid2Column>
          <HeadingRegular>Work Experience</HeadingRegular>
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
      <div className={styles.contentBlockContainer}>
        <Grid2Column>
          <HeadingRegular>Courses</HeadingRegular>
          <div>
            {/* div to display in right column */}
            <ExperienceListItem
              companyName='IT-Absolvent, SmartBrains'
              jobTitle='Frontend development with React, Typescript'
              duration='June 2022-September 2022'
            ></ExperienceListItem>
          </div>
        </Grid2Column>
      </div>
      <div className={styles.contentBlockContainer}>
        <Grid2Column>
          <HeadingRegular>Education</HeadingRegular>
          <div>
            {/* div to display in right column */}
            <ExperienceListItem
              companyName='CTU - Czech Technical University in Prague'
              jobTitle='Software Engineering and Technology'
              duration='September 2020-today'
            ></ExperienceListItem>
            <ExperienceListItem
              companyName='Gymnázium nad Štolou'
              jobTitle='Všeobecné 6. letté gymnázium'
              duration='September 2014-June 2020'
            ></ExperienceListItem>
          </div>
        </Grid2Column>
      </div>
      <div className={styles.contentBlockContainer}>
        <Grid2Column>
          <HeadingRegular>Languages</HeadingRegular>
          <div>
            {/* div to display in right column */}
            <ExperienceListItem
              companyName='English'
              jobTitle='Level - C1'
              duration='Cambridge Certificate in Advanced English'
            ></ExperienceListItem>
            <ExperienceListItem
              companyName='Czech'
              jobTitle='Level - C2'
              duration='Native speaker'
            ></ExperienceListItem>
            <ExperienceListItem
              companyName='German'
              jobTitle='Level - A2'
              duration='6 years in high school'
            ></ExperienceListItem>
          </div>
        </Grid2Column>
      </div>
      <Footer />
    </>
  )
}

const filterBtnStyle = css`
  color: ${theme.colors.grey};
  margin-right: 0px;
  margin-left: 0px;
  padding: 6px 14px;
  font-size: ${theme.fontsize.menu};
  line-height: ${theme.lineheight.menu};
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  cursor: pointer;
  :hover {
    background-color: #dcdcdc;
    opacity: 0.5;
  }
`

export const CustomButton = (props: { value: string; handleClick: () => void }) => {
  return (
    <button
      className={css`
        ${filterBtnStyle}
      `}
      onClick={props.handleClick}
    >
      {props.value}
    </button>
  )
}
