import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, ...pageProps }) => (
  <ChakraProvider resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
