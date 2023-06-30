import '@/styles/globals.css';
// import '@fontsource-variable/open-sans';
import '@fontsource/open-sans';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
