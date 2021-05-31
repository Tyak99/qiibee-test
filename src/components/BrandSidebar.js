import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@chakra-ui/avatar';
import {
  Box, Flex, Heading, HStack, Text, VStack,
} from '@chakra-ui/layout';
import { useHistory } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Icon from '@chakra-ui/icon';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { authActions } from '../store/reducers/authReducer';

const BrandSidebar = ({ brand }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    dispatch(authActions.logOut());
    history.push('/login');
  };
  return (
    <VStack
      color="black"
      bg="white"
      h="100vh"
      w="340px"
      position="fixed"
      borderRight="1px solid gray.100"
      display={{ base: 'none', lg: 'block' }}
    >
      {
      brand
      && (
      <Box py={5} shadow="md" h="100%">
        <Flex justifyContent="center" flexDir="column" alignItems="center">
          <Avatar name={brand.name} bg="teal" color="white" src={brand.logo} />
          <Text>Welcome,</Text>
          <Heading size="sm">{brand.name}</Heading>
        </Flex>
        <Box px={4} mt="8">
          <Flex justifyContent="space-between" py="4" borderBottom="1px solid gray">
            <Text>Supply</Text>
            <Text>{brand.symbol}</Text>
          </Flex>

          <Box mt="4">
            <Flex borderBottom="1px solid gray" justifyContent="space-between" py="4">
              <Text>Total</Text>
              <Text>{brand.loyaltyPoints}</Text>
            </Flex>
          </Box>
        </Box>

        <Box mt="16">
          <Box borderLeft="5px solid teal">
            <HStack ml={4} spacing={4}>
              <Icon as={FaAddressCard} />
              <Text fontSize="lg">Dashboard</Text>
            </HStack>
          </Box>
        </Box>
        <Box px="4" position="absolute" bottom="8">
          <Button variant="link" onClick={logOut} leftIcon={<FiLogOut />}>Log Out</Button>
        </Box>
      </Box>
      )
    }
    </VStack>
  );
};

BrandSidebar.propTypes = {
  brand: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    loyaltyPoints: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
};

export default BrandSidebar;
