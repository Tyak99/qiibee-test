import {
  Box, Heading, HStack, Text,
  Flex,
} from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Select } from '@chakra-ui/select';
import { useDisclosure } from '@chakra-ui/hooks';
import { useDispatch, useSelector } from 'react-redux';
import Stats from '../../components/Stats';
import CompanyList from '../../components/Companies';
import Container from '../../components/Container';
import BrandView from './BrandViewModal';
import { brandActions } from '../../store/reducers/brandReducer';

const Brands = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const auth = useSelector((state) => state.auth);
  const customers = useSelector((state) => state.customers);
  const brands = useSelector((state) => state.brands);

  const {
    firstName, lastName, followedBrands, totalLoyaltyPoints, id, email,
  } = customers.find((customer) => customer.id === auth.id);

  const handleBrandModal = (brandId) => {
    const foundBrand = brands[brandId];
    setSelectedBrandId(foundBrand.id);
    onOpen();
  };

  const followBrand = () => {
    dispatch(brandActions.followBrand({
      brandId: selectedBrandId,
      userData: {
        id, firstName, lastName, email,
      },
    }));
  };

  return (
    <Container>
      {/* <Stats /> */}
      <Heading px={{ base: '4', lg: 0 }} size="md">Dashboard</Heading>
      <Box mt="8" shadow="lg" borderRadius="lg" bg="white" p="6" mx={{ base: '4', lg: 0 }}>
        <Flex justifyContent="space-between">
          <Box>
            <Text>Welcome,</Text>
            <Text>{`${firstName} ${lastName}`}</Text>
          </Box>
          <Box>
            <Text>Loyalty point</Text>
            <Text>{totalLoyaltyPoints}</Text>
          </Box>
          <Box>
            <Text>Followed Brands</Text>
            <Text>{followedBrands}</Text>
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
          <CompanyList
            customerId="jrneier"
            openBrand={(brandId) => handleBrandModal(brandId)}
            brands={brands}
          />
        </Box>
      </Box>
      <BrandView
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        selectedBrandId={selectedBrandId}
        followBrand={followBrand}
        customerId={id}
      />
    </Container>
  );
};

export default Brands;
