import { Blockquote } from '../../components/Blockquote'
import { Footer } from '../../components/Footer'
import { Grid2Column } from '../../components/UICore/Grid2Column'
import { H2 } from '../../components/UICore/H2'
import { Header } from '../../components/navigation/Header'
import { HeadingRegular } from '../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../components/InsetCardContact'
import { ParagraphBasic } from '../../components/UICore/ParagraphBasic'
import { RichText } from '../../components/UICore/RichText'
import { Spacer } from '../../components/Spacer'
import { SubpageInfo } from '../../components/SubpageInfo'
import { containerContentStyle } from '../../theme'
import { css } from '@emotion/css'
import { theme } from '../../theme'
import { urls } from '../../urls'
import ImageGallery from 'react-image-gallery'
import pic1 from './1.png'
import pic2 from './2.png'
import pic3 from './3.png'
import pic4 from './4.png'
import pic5 from './5.png'

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
  linkStyle: css`
    color: ${theme.colors.black};
  `,
}

const thumbnailWidthHeight = 400

const images = [
  {
    original: pic1,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: pic2,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: pic3,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: pic4,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
  {
    original: pic5,
    thumbnailHeight: thumbnailWidthHeight,
    thumbnailWidth: thumbnailWidthHeight,
  },
]

export const ZeptejteSeStudenta = () => {
  return (
    <div>
      <Header />
      <SubpageInfo
        title='Zeptejte se studenta'
        description='This project was realized for the company Zeptejtesestudenta. They wanted to create a new website for their company. The main goal was to create a website that would be easy to use and would be able to provide the user with all the necessary information. They also wanted another place to publish their articles.'
        client='Zeptejtesestudenta'
        type='Design, Realization'
        year='2022'
        prevPageUrl={urls.root}
      />
      <div className={containerContentStyle}>
        <Grid2Column>
          <HeadingRegular>About the website</HeadingRegular>

          <RichText>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              Website can be found on the following link:{' '}
              <a
                className={styles.linkStyle}
                href='https://www.zeptejtesestudenta.cz/'
                target='_blank'
                rel='noreferrer'
              >
                https://www.zeptejtesestudenta.cz/
              </a>
              .
            </ParagraphBasic>
            <ParagraphBasic customStyle={{ marginBottom: '32px' }}>
              I have created a design prototype in Figma as well as CaseStudy and presentation for
              the client. I have created this website in Wordpress, with Elementor plugin with
              article template, so that the client can easily publish articles on their website on
              their own.
            </ParagraphBasic>
            <Blockquote text={'Design Content, Case study will be available soon.'}></Blockquote>
          </RichText>
        </Grid2Column>
        <Spacer height={32} />
        <HeadingRegular>Showcase of the website</HeadingRegular>
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
