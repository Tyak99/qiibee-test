import React from 'react';
import { Box } from '@chakra-ui/layout';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Container = ({ children }) => (
  <Box d={{ lg: 'flex' }}>
    <Sidebar />
    <Navbar />
    <Box ml={{ base: 0, lg: '340px' }} w="100%" m="0 auto" bg="#F1F4FD" h="100vh">
      <Box m="0 auto" w={{ base: '100%', lg: '800px' }} pl={{ lg: '2rem' }} mt="24">
        {children}
      </Box>
    </Box>
  </Box>
);

export default Container;
