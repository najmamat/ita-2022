import { Footer } from '../../components/Footer'
import { Grid2Column } from '../../components/UICore/Grid2Column'
import { Header } from '../../components/navigation/Header'
import { InsetCardContact } from '../../components/InsetCardContact'
import { ProjectLinkCard } from '../../components/ProjectLinkCard'
import { SubpageInfo } from '../../components/SubpageInfo'
import { containerContentStyle } from '../../theme'
import { css } from '@emotion/css'
import { theme } from '../../theme'
import { urls } from '../../urls'
import castrocap from '../../images/castrocap.png'
import mobile from '../../images/mobile1.png'
import sphere from '../../images/sphereImg.png'

const styles = {
  linksListStyle: css`
    align-items: start;
    grid-auto-columns: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    column-count: 3;
    column-gap: 24px;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      column-count: 1;
    }
  `,
}

export const SchoolProjects = () => {
  return (
    <div>
      <Header />
      <SubpageInfo
        title='University projects, CTU in Prague'
        description='Projects listed here were created during my studies at CTU in Prague (Software Engineering and Technologies). They are mostly Backend projects, but there are also some Frontend projects.'
        client='Czech Technical University in Prague'
        type='Semestral projects'
        year='2022'
        prevPageUrl={urls.root}
      />
      <div className={containerContentStyle}>
        <div className={styles.linksListStyle}>
          <ProjectLinkCard
            urlTo={urls.school.reserveNow}
            title='ReserveNow'
            type='React, JS, Java, SpringBoot, PostgreSQL'
            coverImage={castrocap}
          />
          <ProjectLinkCard
            urlTo={urls.school.wordleClone}
            title='Wordle Clone'
            type='React, JS, MobX'
            coverImage={castrocap}
          />
          <ProjectLinkCard
            urlTo={urls.school.roomRes}
            title='RoomRes'
            type='Java, ELK Stack, Kafka, Microservices'
            coverImage={castrocap}
          />
        </div>
      </div>
      <InsetCardContact />
      <Footer />
    </div>
  )
}
