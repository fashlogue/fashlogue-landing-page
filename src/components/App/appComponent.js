import * as React from 'react';
import { theme } from '../../config';
import {
  Base,
  GlobalStyle,
} from '../UI';


const appComponent = ({ children }) => {

  return (
    <Base>
      <GlobalStyle />
      <Base>
        <div>hello</div>
      </Base> 
    </Base>
  );
};

export default appComponent;
