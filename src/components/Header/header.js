import * as React from 'react';
import { FashlogueLogo } from '../Icons';
import { theme } from '../../config';
import { FashWordMark } from '../Icons';
import {
  Flex,
  Box
} from 'rebass';

const styles = {
  headerComponentContainer: {
    height: theme.Header.height[0],
    width: '100%',
    alignItems: 'center'
  }
};

const header = () => {
  return (
    <Flex style={{...styles.headerComponentContainer}}>
      <Flex 
        align="middle"
        style={{width: '100%'}} 
      >
        <Flex 
          width={1/2} 
          align="middle"
        >
          <Flex mx={5}>
            <Box style={{Maxwidth: '100%'}}>
              <FashlogueLogo 
                width={50}
                height={50}
              />
            </Box>
            <Flex mx={2} align="middle">
              <FashWordMark/>
            </Flex>
          </Flex>
                    
        </Flex>
        <Flex 
          width={1/2} 
          align="middle"
          justifyContent="flex-end"
        >
          <Box mx={4}>
            <p>Register</p>
          </Box>
          <Box mr={4}>
            <p>Team</p>
          </Box>
          <Box mr={4}>
            <p>Sign In</p>
          </Box>
        </Flex>
                
      </Flex>
    </Flex>
  );
};
export default header;