import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@chakra-ui/avatar';
import {
  Box, Flex, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/layout';
import { Route as RouterLink } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';

const Sidebar = (props) => (
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
      <Flex justifyContent="center" flexDir="column" alignItems="center">
        <Avatar name="B N" bg="teal" color="white" />
        <Text>Welcome,</Text>
        <Heading size="sm"> Babatunde Nasri</Heading>
      </Flex>

      <Box mt="16">
        <Box borderLeft="5px solid teal">
          <HStack ml={4} spacing={4}>
            <Icon as={FaAddressCard} />
            <Text fontSize="lg">Dashboard</Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  </VStack>
);

Sidebar.propTypes = {

};

export default Sidebar;
