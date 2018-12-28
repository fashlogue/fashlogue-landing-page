import React from 'react';
import {
    Flex,
    Box,
    Button,
    Text
} from 'rebass';
import {theme} from '../../config'
const heroImage = require('../../assets/images/heroImage.png')

const hero = () => {
    return (
        <Flex flexDirection='column'>
            <Box mx='auto' style={{width: '40%'}}>
                <img mx='auto' style={{maxWidth: '100%'}} src={heroImage}/>
            </Box>
            <Box style={{textAlign: 'center'}} width={1/2} mx='auto'>
                <Text  fontSize={5} style={{fontWeight: 700 }}>Create your catalogue and save them Accessible from anywhere in the world.</Text>
            </Box>
            <Box mx='auto' style={{textAlign: 'center'}} width={1/3}>
                <p>Get your catalog to the world, connect with designer and get inspirations from other designers. Learn how to get your Designs to the blockchain and get paid.</p>
            </Box>
            <Box mx='auto'>
                <Button borderRadius={20} px={6} bg={theme.colors.fashpink}>Get Started</Button>
            </Box>
            
        </Flex>
        
    )
}
export default hero;