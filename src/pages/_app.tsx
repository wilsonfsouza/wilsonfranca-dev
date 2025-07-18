import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
