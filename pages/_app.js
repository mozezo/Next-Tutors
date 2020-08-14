import '../styles/globals.css'
import Layout from '../containers/Layout/Layout';
import GlobalStyles from '../assets/style/Global.style';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
