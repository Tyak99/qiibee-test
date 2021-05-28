import {
  Box, Heading, HStack, Text,
  Flex,
} from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Select } from '@chakra-ui/select';
import { useDisclosure } from '@chakra-ui/hooks';
import Stats from '../../components/Stats';
import CompanyList from '../../components/Companies';
import Container from '../../components/Container';
import BrandView from './BrandViewModal';

const Brands = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentlySelectedBrand, setCurrentlySelectedBrand] = useState(null);
  return (
    <Container>
      {/* <Stats /> */}
      <Heading px={{ base: '4', lg: 0 }} size="md">Dashboard</Heading>
      <Box mt="8" shadow="lg" borderRadius="lg" bg="white" p="6" mx={{ base: '4', lg: 0 }}>
        <Flex justifyContent="space-between">
          <Box>
            <Text>Welcome,</Text>
            <Text>Babatunde Yakub</Text>
          </Box>
          <Box>
            <Text>Loyalty point</Text>
            <Text>0</Text>
          </Box>
          <Box>
            <Text>Followed Brands</Text>
            <Text>0</Text>
          </Box>
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
          <Flex justifyContent="space-between" px={{ base: '4', lg: 0 }} mt="8">
            <Text>Company</Text>
            <Text>Token Earned</Text>
          </Flex>
          <CompanyList openBrand={onOpen} />
        </Box>
      </Box>
      <BrandView
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        currentlySelectedBrand={currentlySelectedBrand}
      />
    </Container>
  );
};

export default Brands;
