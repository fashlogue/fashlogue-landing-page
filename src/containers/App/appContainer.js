import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Hero } from '../../components/Hero';
import { theme } from '../../config';
import App from '../../components/App';
import {
  Flex,
  Box
} from 'rebass'


const appContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <App> 
        <Hero/>
      </App>
    </ThemeProvider>
  );
};

export default appContainer;
