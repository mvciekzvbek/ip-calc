import { createGlobalStyle } from 'styled-components'
import { wrapper } from '../store'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
};

export default wrapper.withRedux(App)