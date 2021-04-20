import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import WelcomeMessage from 'components/WelcomeMessage';

export default function App() {
  return (
    <ChakraProvider resetCSS>
      <WelcomeMessage />
    </ChakraProvider>
  );
}
