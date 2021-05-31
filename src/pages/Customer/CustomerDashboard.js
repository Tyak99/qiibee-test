import {
  Box, Heading, Text,
  Flex,
} from '@chakra-ui/layout';
import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/toast';
import BrandsList from '../../components/BrandsList';
import Container from '../../components/Container';
import BrandView from '../../components/BrandViewModal';
import { brandActions } from '../../store/reducers/brandReducer';
import { customerActions } from '../../store/reducers/customerReducer';

const CustomerDashboard = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const auth = useSelector((state) => state.auth);
  const customers = useSelector((state) => state.customers);
  const brands = useSelector((state) => state.brands);

  const {
    firstName, lastName, followedBrands, loyaltyPoints, id, email,
  } = customers[auth.id];

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

  const redeemPoints = (points, totalPoints) => {
    if (points < totalPoints) {
      dispatch(customerActions.redeemPoints({
        brandId: selectedBrandId,
        customerId: id,
        amount: points,
      }));
      return toast({
        title: 'Redeemed',
        description: `You have redeemed ${points} points :)`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
    return toast({
      title: 'Insufficient points',
      description: "You don't have enough points to redeem :(",
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  };

  const totalLoyaltyPoints = Object.values(loyaltyPoints)
    .reduce((currentValue, acc) => currentValue + acc, 0);

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
          {/* <HStack px={{ base: '4', lg: 0 }}>
            <Text>Filter</Text>
            <Select placeholder="Select option" w="44">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack> */}
          <Flex justifyContent="space-between" px={{ base: '4', lg: 0 }} mt="8">
            <Text>Company</Text>
            <Text>Total Points</Text>
          </Flex>
          <BrandsList
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
        redeemPoints={redeemPoints}
      />
    </Container>
  );
};

export default CustomerDashboard;
