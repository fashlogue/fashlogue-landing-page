import React from 'react';
import Hero from '../../components/Hero/hero';
import {
    Box,
    Flex,
} from 'rebass';
import { About } from '../About'



const homeComponent = (props) => {
    return (
        <Box>
            <Flex flexDirection='column'>
                <Box>
                    <Hero/>
                </Box>
                <Box mt={6}>
                    <About/>
                </Box> 
            </Flex>
        </Box>
    )
}
export default homeComponent