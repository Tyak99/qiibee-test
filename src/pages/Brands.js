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
  Stat, StatHelpText, StatLabel, StatNumber,
} from '@chakra-ui/stat';
import { Select } from '@chakra-ui/select';

const Company = ({ alternateColor }) => (
  <Link to="/brand/hmm" as={ReactRouterLink} _hover={{ underline: 'none' }}>
    <Box d="flex" justifyContent="space-between" alignItems="center" bg="gray.100" _hover={{ backgroundColor: 'gray.200' }} p={{ base: '4', sm: '8' }} mb="4" shadow="lg" w={{ base: '100%' }} cursor="pointer">
      <HStack spacing="4">
        <Avatar borderRadius="sm" />
        <Box>
          <Heading size="sm">Fibre Limited</Heading>
        </Box>
      </HStack>
      <Text>FLX</Text>
      {/* {
          alternateColor
            ? <Button colorScheme="teal">Follow</Button>
            : (
              <HStack color="teal">
                <Icon as={FaCheck} />
                <Text>Followed</Text>
              </HStack>
            )
        } */}
    </Box>
  </Link>
);

const Brands = () => (
  <Box>

    <Flex justifyContent="space-between" p={['4', '8']} alignItems="center">
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
    <Box bg="gray" w="100%" h="64">
      <Flex w="60%" p="8" m="0 auto">
        <Stat>
          <StatLabel>My Loyality Wallet</StatLabel>
          <StatNumber>1,200</StatNumber>
          <StatHelpText>Total wallet value in LPX</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Followed Brands</StatLabel>
          <StatNumber>2</StatNumber>
        </Stat>
      </Flex>
    </Box>
    <Box p={{ base: '0', sm: '16' }} m="0 auto" w={{ base: '100%', sm: '60%' }}>
      <Box shadow="lg">
        <HStack px="8">
          <Text>Filter</Text>
          <Select placeholder="Select option" w="44">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
        <Flex justifyContent="space-between" mt="8" px="8">
          <Text>Company</Text>
          <Text>Symbol</Text>
          {/* <Text /> */}
        </Flex>
        <Box mt="4">
          <Company alternateColor />
          <Company />
          <Company alternateColor />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Brands;
