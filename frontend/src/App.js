import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  CSSReset,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import InfoForm from './components/InfoForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <InfoForm />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
