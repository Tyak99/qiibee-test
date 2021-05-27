import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import {
  Box, Flex, Heading, HStack, Link, Text,
} from '@chakra-ui/layout';
import React from 'react';
import { Route as RouterLink, Link as ReactRouterLink } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import {
  Stat, StatHelpText, StatNumber,
} from '@chakra-ui/stat';
import { Select } from '@chakra-ui/select';

const Company = ({ isFollowing }) => (
  <Link to="/brand/hmm" as={ReactRouterLink} _hover={{ underline: 'none' }}>
    <Box d="flex" justifyContent="space-between" alignItems="center" bg="gray.100" _hover={{ backgroundColor: 'gray.200' }} p={{ base: '4', sm: '8' }} mb="4" shadow="lg" w={{ base: '100%' }} cursor="pointer">
      <HStack spacing="4">
        <Avatar borderRadius="sm" />
        <Box>
          <Heading size="sm">Fibre Limited</Heading>
          <Text display={{ base: 'block', sm: 'none' }}>FLX</Text>
        </Box>
      </HStack>
      <Text display={{ base: 'none', sm: 'block' }}>FLX</Text>
      {
        isFollowing
      && (
      <HStack color="teal">
        <Icon as={FaCheck} />
        <Text>Followed</Text>
      </HStack>
      )
      }
    </Box>
  </Link>
);

const StatCard = () => (
  <Stat shadow="lg" p="2" bg="white" borderRadius="md" maxW="40">
    <StatNumber fontWeight="semibold" color="teal">1,200</StatNumber>
    <StatHelpText>Wallet Value</StatHelpText>
  </Stat>
);
const Brands = () => (
  <Box>
    <Flex justifyContent="space-between" p={['4', '8']} alignItems="center" bg="white">
      <Box>
        <Heading size="md" color="teal" cursor="pointer">
          <Link as={RouterLink} to="/login">LoyalityFx</Link>
        </Heading>
      </Box>
      <Flex>
        <HStack spacing="4">
          <Link href="/profile">
            <Avatar
              name="Tunde Nasri"
              size="sm"
              cursor="pointer"
            />
          </Link>
        </HStack>
      </Flex>
    </Flex>
    <Box m="0 auto" w={{ base: '100%', lg: '800px' }}>
      <Box mt="8" p="4" maxW="md">
        <Heading size="md">Stats</Heading>
        <Flex justifyContent="space-between">
          <StatCard />
          <StatCard />
        </Flex>
      </Box>
      <Box mt="16">
        <Box px={{ base: '4', lg: 0 }}>
          <Heading size="md">Redeem Loyalty Tokens</Heading>
          <Text>Follow brands you love to be eligible for loyalty token rewards</Text>
        </Box>
        <Box mt="8">
          <HStack px={{ base: '4', lg: 0 }}>
            <Text>Filter</Text>
            <Select placeholder="Select option" w="44">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <Box mt="4">
            <Company />
            <Company isFollowing />
            <Company />
            <Company />
            <Company />
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Brands;
