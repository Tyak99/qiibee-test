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

const Sidebar = ({ auth, customer, brand }) => {
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
      <Box py={5} shadow="md" h="100%">
        {
      auth.userType === 'brand'
        ? (
          <>
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

          </>
        )
        : (
          <Flex justifyContent="center" flexDir="column" alignItems="center">
            <Avatar name={`${customer.firstName} ${customer.lastName}`} bg="teal" color="white" />
            <Text>Welcome,</Text>
            <Heading size="sm">{`${customer.firstName} ${customer.lastName}`}</Heading>
          </Flex>
        )
      }
        <Box mt="16">
          <Box>
            <HStack ml={4} spacing={4}>
              <Icon as={FaAddressCard} color="teal.500" />
              <Text fontSize="lg" color="teal.500">Dashboard</Text>
            </HStack>
          </Box>
        </Box>
        <Box px="4" position="absolute" bottom="8">
          <Button variant="link" onClick={logOut} leftIcon={<FiLogOut />}>Log Out</Button>
        </Box>
      </Box>
    </VStack>
  );
};

Sidebar.propTypes = {
  auth: PropTypes.shape({
    id: PropTypes.string,
    userType: PropTypes.string.isRequired,
  }).isRequired,
  customer: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
  brand: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
