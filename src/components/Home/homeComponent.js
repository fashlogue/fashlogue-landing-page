import React from 'react';
import Hero from '../../components/Hero/hero';
import {
    Box,
    Flex,
} from 'rebass';



const homeComponent = (props) => {
    return (
        <Box>
            <Flex>
                <Hero/>
            </Flex>
        </Box>
    )
}
export default homeComponent