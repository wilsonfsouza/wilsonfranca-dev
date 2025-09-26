import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/global.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
