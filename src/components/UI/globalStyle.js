import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme } from '../../config';

const globalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    margin: 0;
    padding: 0;
    background: ${theme.colors.darkestgray};
  }
  body {
    padding-top: ${theme.Header.height}px;
  }
`;

export default globalStyle;
