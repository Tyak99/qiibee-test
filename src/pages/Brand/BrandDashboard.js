import React, { useState } from 'react';
import {
  Heading, Box, Flex, Text,
} from '@chakra-ui/layout';
import {
  Table, Thead, Tr, Th, Tbody, Td,
} from '@chakra-ui/table';

import { Checkbox } from '@chakra-ui/checkbox';
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';

import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/toast';
import BrandSidebar from '../../components/BrandSidebar';
import { brandActions } from '../../store/reducers/brandReducer';

const BrandStat = ({ amount, title }) => (
  <Box
    border="2px"
    borderColor="gray.200"
    p="4"
    borderRadius="md"
    w="72"
    textAlign="center"
  >
    <Heading size="3xl">{amount}</Heading>
    <Text>{title}</Text>
  </Box>
);
const BrandDashboard = () => {
  const [checkedFollowers, setCheckedFollowers] = useState([]);
  const auth = useSelector((state) => state.auth);
  const customers = useSelector((state) => state.customers.data);
  const brand = useSelector((state) => state.brands[auth.id]);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();

  const followers = Object.values(brand.followers).map((item) => {
    const data = customers[item.id];
    const earned = data.loyaltyPoints[brand.id];
    return {
      id: data.id,
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
      earned: earned || 0,
    };
  });

  const setChecked = (index, value) => {
    const follower = followers[index];

    if (value === false) {
      setCheckedFollowers([...checkedFollowers]
        .filter((followerId) => followerId !== follower.id));
    } else {
      setCheckedFollowers(checkedFollowers.concat(follower.id));
    }
  };

  const awardLoyaltyPoint = ({ points }) => {
    const pointsToAward = checkedFollowers.length * points;
    if (pointsToAward < brand.loyaltyPoints) {
      checkedFollowers.forEach((customerId) => {
        dispatch(brandActions
          .awardPoints({ customerId, brandId: brand.id, amount: Number(points) }));
      });
      return toast({
        title: 'Points awarded.',
        description: "Hooray! you've awarded points to customers :)",
        status: 'success',
        duration: 2000,
      });
    }
    return toast({
      title: 'Inssufficient points',
      description: "You don't have enough points to award :(",
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box d={{ lg: 'flex' }}>
      <BrandSidebar brand={brand} />
      <Box w="100%" m="0 auto" h="100vh" ml="340px">
        <Box mt="20" py="4" px={{ base: 0, lg: '8' }} h="100%">
          <Box mt="8">
            <Text>Overview</Text>
            <Flex justifyContent="space-between" mt="4" w={{ base: '100%', lg: '700px' }}>
              <BrandStat amount={brand?.loyaltyPoints} title={`Total available ${brand?.symbol}`} />
              <BrandStat amount={brand?.totalAwardedPoints} title={`Total rewarded ${brand?.symbol}`} />
            </Flex>
          </Box>
          <Box mt="8">
            <Flex justifyContent="space-between">
              <Box>
                <Heading size="lg">Followers</Heading>
                <Text fontSize="sm">
                  Select customers to award point and input point amount to award your
                  loyal customers
                </Text>
              </Box>

              {
                checkedFollowers.length > 0
                && (
                <form onSubmit={handleSubmit(awardLoyaltyPoint)}>
                  <Flex>
                    <FormControl isInvalid={errors.points?.type === 'min'}>
                      <Input placeholder="Amount" {...register('points', { min: 1 })} type="number" isRequired defaultValue={0} />
                      <FormErrorMessage>Min points you can award is 1</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" ml="4" colorScheme="teal" px="8">Award Points</Button>
                  </Flex>
                </form>
                )
              }
            </Flex>
            <Table variant="simple" size="lg" mt="4">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>email</Th>
                  <Th isNumeric>Points earned</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  followers.map((item, index) => (
                    <Tr key={item.id}>
                      <Td>
                        <Flex>
                          <Checkbox onChange={(e) => setChecked(index, e.target.checked)} mr="4" />
                          {item.name}
                        </Flex>
                      </Td>
                      <Td>{item.email}</Td>
                      <Td isNumeric>{item.earned}</Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandDashboard;
