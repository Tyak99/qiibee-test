import React from 'react';
import { Box, Heading } from '@chakra-ui/layout';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Container = ({ children }) => (
  <Box d={{ lg: 'flex' }}>
    {/* <Sidebar /> */}
    <Navbar />
    <Box w="100%" m="0 auto" h="100vh">
      <Box m="0 auto" w={{ base: '100%', lg: '700px' }} bg="#F1F4FD" mt="24" py="4" px={{ base: 0, lg: '8' }}>
        <Box mt="8">
          {children}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Container;
