import React from 'react';
import { Box } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const GlobalContainer = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const customer = useSelector((state) => state.customers.data[auth.id]);
  const brand = useSelector((state) => state.brands[auth.id]);

  return (
    <Box d={{ lg: 'flex' }}>
      <Sidebar auth={auth} customer={customer} brand={brand} />
      <Navbar auth={auth} customer={customer} brand={brand} />
      <Box w="100%" m="0 auto" h="100vh" ml={{ base: 0, lg: '340px' }} mt={{ base: '50px', lg: 0 }}>
        <Box m="0 auto" py="4" px={{ base: 0, lg: '8' }} h="100%">
          <Box mt="8">
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalContainer;
