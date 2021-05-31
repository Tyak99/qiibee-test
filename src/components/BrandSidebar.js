import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@chakra-ui/avatar';
import {
  Box, Flex, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/layout';
import { Route as RouterLink } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';

const BrandSidebar = ({ brand }) => (
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
          <Avatar name="B N" bg="teal" color="white" />
          <Text>Welcome,</Text>
          <Heading size="sm">{brand.name}</Heading>
        </Flex>
        <Box px={4} mt="8">
          <Flex justifyContent="space-between" py="4" borderBottom="1px solid gray">
            <Text>Supply</Text>
            <Text>{brand.symbol}</Text>
          </Flex>

          <Box mt="4">
            <Flex justifyContent="space-between" py="4">
              <Text>Total</Text>
              <Text>{brand.loyaltyPoint}</Text>
            </Flex>
            <Flex justifyContent="space-between" py="4" borderBottom="1px solid gray">
              <Text>Circulating</Text>
              <Text>0</Text>
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
      </Box>
      )
    }
  </VStack>
);

BrandSidebar.propTypes = {
  brand: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    loyaltyPoint: PropTypes.string.isRequired,
  }).isRequired,
};

export default BrandSidebar;
