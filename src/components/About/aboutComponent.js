import React from 'react';
import {
    Box,
    Flex,
    Text
} from 'rebass';
import {
     AccessImg,
     SecurityImg,
     CollaborationImg,
     StoreImg
} from '../Icons'; 
const aboutComponent = ({}) => { 
    return (
        <Box width={1}>
            <Flex width={0.9} flexWrap='wrap' mx='auto' justifyContent='center' >
                <Box width={0.4}>
                    <Flex flexDirection='column' justifyContent='center'>
                        <Flex mx='auto' justifyContent='center' flexDirection='column'>
                            <Flex justifyContent='center'><AccessImg/></Flex>
                            <Flex flexDirection='column' mt={3}>
                                <Box mx='auto'>
                                    <Text fontWeight='bold' style={{textAlign: 'center'}}>Access your Catalogue anywhere. </Text>
                                </Box>
                                <Box mt={2} style={{textAlign: 'center'}}>
                                    <Text>The ability to use a smartphone, tablet or computer 
                                    to access your account means your catalogues follows
                                    everywhere.
                                    </Text>
                                </Box>
                            </Flex>
                            
                        </Flex>
                    </Flex>
                </Box>
                <Box width={0.4}>
                    <Flex flexDirection='column' justifyContent='center'>
                        <Flex mx='auto' justifyContent='center' flexDirection='column'>
                            <Flex justifyContent='center'><SecurityImg/></Flex>
                            <Flex flexDirection='column' mt={3}>
                                <Box mx='auto'>
                                    <Text fontWeight='bold' style={{textAlign: 'center'}}>Security you can trust. </Text>
                                </Box>
                                <Box mt={2} style={{textAlign: 'center'}}>
                                    <Text>Users token are encrypted and safe, it is never stored in the database. Connection is also secure, users informations are keep very private.
                                    </Text>
                                </Box>
                            </Flex>
                            
                        </Flex>
                    </Flex>
                </Box>
                <Box width={0.4} mt={5}>
                    <Flex flexDirection='column' justifyContent='center'>
                        <Flex mx='auto' justifyContent='center' flexDirection='column'>
                            <Flex justifyContent='center'><CollaborationImg/></Flex>
                            <Flex flexDirection='column' mt={3}>
                                <Box mx='auto'>
                                    <Text fontWeight='bold' style={{textAlign: 'center'}}>Collaboration and interaction. </Text>
                                </Box>
                                <Box mt={2} style={{textAlign: 'center'}}>
                                    <Text>The ability to share your catalogue on the blockchain and get paid, catalogue can be sent to different users snd can also be shared on various social media.
                                    </Text>
                                </Box>
                            </Flex>
                            
                        </Flex>
                    </Flex>
                </Box>
                <Box width={0.4} mt={5}>
                    <Flex flexDirection='column' justifyContent='center'>
                        <Flex mx='auto' justifyContent='center' flexDirection='column'>
                            <Flex justifyContent='center'><StoreImg/></Flex>
                            <Flex flexDirection='column' mt={3}>
                                <Box mx='auto'>
                                    <Text fontWeight='bold' style={{textAlign: 'center'}}>Store any catalogue. </Text>
                                </Box>
                                <Box mt={2} style={{textAlign: 'center'}}>
                                    <Text>The ability to save catalogue in various gallery, with difffernt taxanomy and according to designers and various use case of the designs.
                                    </Text>
                                </Box>
                            </Flex>
                            
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        
    ) 
}
export default aboutComponent;