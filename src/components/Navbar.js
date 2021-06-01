import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import {
  Box, Flex, Heading, HStack,
} from '@chakra-ui/layout';
import { useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { authActions } from '../store/reducers/authReducer';

const Navbar = ({ auth, customer, brand }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    dispatch(authActions.logOut());
    history.push('/login');
  };
  return (
    <Flex
      justifyContent="space-between"
      p={['4', '8']}
      position="fixed"
      height="20"
      top="0"
      left="0"
      right="0"
      alignItems="center"
      zIndex="1"
      bg="white"
      display={{ base: 'flex', lg: 'none' }}
      shadow="lg"
    >
      <Box>
        <Heading size="md" color="teal" cursor="pointer">
          {
            auth.userType === 'brand'
              ? brand.name
              : `${customer.firstName} ${customer.lastName}`
          }
        </Heading>
      </Box>
      <Flex>
        <HStack spacing="4">
          <Button variant="link" onClick={logOut}>Log Out</Button>
          {
            auth.userType === 'brand'
              ? (
                <Avatar
                  name={brand.name}
                  size="sm"
                  cursor="pointer"
                  src={brand.logo}
                />
              )
              : (
                <Avatar
                  name={`${customer.firstName} ${customer.lastName}`}
                  size="sm"
                  cursor="pointer"
                />
              )
          }
        </HStack>
      </Flex>
    </Flex>
  );
};

Navbar.propTypes = {
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

export default Navbar;
