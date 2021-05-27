import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import {
  Box, Flex, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/layout';
import React from 'react';
import { Route as RouterLink, Link as ReactRouterLink } from 'react-router-dom';
import { FaAddressCard, FaCheck } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import {
  Stat, StatHelpText, StatNumber,
} from '@chakra-ui/stat';
import { Select } from '@chakra-ui/select';

const Company = ({ isFollowing }) => (
  <Link to="/brand/hmm" as={ReactRouterLink} _hover={{ underline: 'none' }}>
    <Box d="flex" justifyContent="space-between" alignItems="center" bg="white" borderRadius="md" _hover={{ backgroundColor: 'gray.200' }} p={{ base: '4', sm: '8' }} mb="4" shadow="lg" w={{ base: '100%' }} cursor="pointer">
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
  <Stat shadow="lg" p="2" bg="white" borderRadius="md" maxW={{ base: '40', lg: '48' }}>
    <StatNumber fontWeight="semibold" color="teal">1,200</StatNumber>
    <StatHelpText>Wallet Value</StatHelpText>
  </Stat>
);

const Sidebar = () => (
  <VStack
    color="black"
    bg="white"
    // rounded="md"
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

const Navbar = () => (
  <Flex
    justifyContent="space-between"
    p={['4', '8']}
    position="fixed"
    height="24"
    top="0"
    left="0"
    right="0"
    alignItems="center"
    zIndex="1"
    bg="white"
    display={{ base: 'flex', lg: 'none' }}
  >
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
);

const Brands = () => (
  <Box>
    <Box d={{ lg: 'flex' }}>
      <Sidebar />
      <Box ml={{ base: 0, lg: '340px' }} w="100%" m="0 auto" bg="#F1F4FD">
        <Navbar />
        <Box m="0 auto" w={{ base: '100%', lg: '800px' }} pl={{ lg: '2rem' }} mt="24">
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
    </Box>
  </Box>
);

export default Brands;
