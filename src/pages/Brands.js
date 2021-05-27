import {
  Box, Heading, HStack, Text,
} from '@chakra-ui/layout';
import React from 'react';
import { Select } from '@chakra-ui/select';
import Stats from '../components/Stats';
import CompanyList from '../components/Companies';
import Container from '../components/Container';

const Brands = () => (
  <Container>
    {/* <Stats /> */}
    <Heading px={{ base: '4', lg: 0 }} size="md">Welcome, Babatunde</Heading>
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
        <CompanyList />
      </Box>
    </Box>
  </Container>
);

export default Brands;
