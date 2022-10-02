import { Footer } from './components/Footer'
import { Header } from './components/navigation/Header'
import { Link } from 'react-router-dom'
import { css } from '@emotion/css'
import { theme } from './theme'
import { urls } from './urls'

export const PageNotFound = () => {
  return (
    <div>
      <Header />
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h1>404 - Page Not Found</h1>
        <Link
          to={urls.root}
          className={css`
            text-decoration: none;
          `}
        >
          <button
            className={css`
              background-color: ${theme.colors.backgGrey};
              border: none;
              color: ${theme.colors.grey};
              padding: 10px 20px;
              border-radius: 8px;
              font-weight: 800;
              font-size: ${theme.fontsize.h2};
              cursor: pointer;
              :hover {
                opacity: 0.8;
              }
            `}
          >
            Go to Home Page
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}
