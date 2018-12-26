import * as React from 'react';
import {
    Flex,
  } from 'rebass';
import styledComponents from 'styled-components';
import { theme } from '../../config';


const baseStyles = {
  display: 'flex',
  flexDirection: 'row',
  
};

const base = ({
  children,
  style,
}) => {
  return (
    <div style={{
      ...style,
      ...baseStyles,
    }}>{children}</div>
  );
};

export default base;
