import React, { useEffect, useRef, useState } from 'react';

import {
  Box, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/layout';
import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/tabs';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { brandActions } from '../../store/reducers/brandReducer';
import { customerActions } from '../../store/reducers/customerReducer';
import { authActions } from '../../store/reducers/authReducer';
import { generateRandomId } from '../../helpers/randomString';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);
  const uploadImage = (files) => {
    // const formData = new FormData();
    // formData.append('file', files[0]);
    // formData.append('upload_preset', 'l5f01g09');

    // axios.post('https://api.cloudinary.com/v1_1/buymezobo/upload', formData).then((res) => {
    //   console.log(res);
    // }).catch((error) => console.log({ error }));
  };

  useEffect(() => {
    if (authData.isAuthenticated === true) {
      const redirectTo = authData.userType === 'brand' ? '/dashboard' : '/brands';
      history.push(redirectTo);
    }
  }, [authData]);

  const registerBrand = (data) => {
    const id = generateRandomId();
    const {
      brandName,
      brandSymbol,
      loyaltyPoint,
      brandEmail,
    } = data;
    dispatch(brandActions.createBrand({
      id,
      name: brandName,
      symbol: brandSymbol,
      loyaltyPoint,
      email: brandEmail,
      followers: [],
    }));
    dispatch(authActions.authenticateUser({ id, userType: 'brand' }));
  };

  const registerCustomer = (data) => {
    // TODO: confirm that password and confirmPassword match
    const id = generateRandomId();
    const { firstName, lastName, customerEmail } = data;
    dispatch(customerActions.createCustomer({
      id, firstName, lastName, email: customerEmail,
    }));
    dispatch(authActions.authenticateUser({ id, userType: 'brand' }));
  };

  return (
    <Box p="16" m="0 auto" d="flex" alignItems="center" flexDir="column">
      <Box maxW="xl" w="full" mt="16">

        <VStack alignItems="flex-start">
          <Heading>LoyalityPro</Heading>
          <Text>Please Register as a brand or customer below</Text>
        </VStack>
        <Box mt="16">
          <Tabs isFitted variant="enclosed" colorScheme="teal">
            <TabList mb="1em">
              <Tab _selected={{ borderTop: '2px solid teal' }} fontSize="lg">Brand</Tab>
              <Tab _selected={{ borderTop: '2px solid teal' }} fontSize="lg">Customer</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading size="lg">Register</Heading>
                <Text>Please register as a brand here</Text>
                <Box mt="8">
                  <form onSubmit={handleSubmit(registerBrand)}>
                    <VStack spacing="4" alignItems="flex-start">

                      <HStack spacing="8">
                        <FormControl id="brand-name" isRequired>
                          <FormLabel>Brand name</FormLabel>
                          <Input placeholder="Brand name" {...register('brandName')} />
                        </FormControl>
                        <FormControl id="brand-symbol" isRequired>
                          <FormLabel>Symbol</FormLabel>
                          <Input placeholder="e.g MBT" {...register('brandSymbol')} />
                        </FormControl>
                      </HStack>
                      <HStack spacing="8">
                        <FormControl id="loyalty-point" isRequired>
                          <FormLabel>Max Loyality Point</FormLabel>
                          <Input placeholder="Loyalty Point" {...register('loyaltyPoint')} />
                        </FormControl>
                        <FormControl id="email" isRequired>
                          <FormLabel>Logo</FormLabel>
                          <input type="file" accept="image/*" {...register('image')} />
                        </FormControl>
                      </HStack>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="Email" {...register('brandEmail')} />
                      </FormControl>
                      <FormControl id="password-brand" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder="Password" type="password" {...register('brandPassword')} />
                      </FormControl>
                      <FormControl id="confirm-password-brand" isRequired>
                        <FormLabel>Confirm password</FormLabel>
                        <Input placeholder="Confirm Password" type="password" {...register('brandConfirmPassword')} />
                      </FormControl>
                    </VStack>
                    <Button colorScheme="teal" w="full" mt="8" type="submit">Submit</Button>
                  </form>
                </Box>
              </TabPanel>
              <TabPanel>
                <Heading size="lg">Register</Heading>
                <Text>Please register as a customer here</Text>

                <Box mt="8">
                  <form onSubmit={handleSubmit(registerCustomer)}>
                    <VStack spacing="4" alignItems="flex-start">
                      <HStack spacing="8">
                        <FormControl id="first-name" isRequired>
                          <FormLabel>First name</FormLabel>
                          <Input placeholder="First name" {...register('firstName')} />
                        </FormControl>
                        <FormControl id="last-name" isRequired>
                          <FormLabel>Last name</FormLabel>
                          <Input placeholder="Last name" {...register('lastName')} />
                        </FormControl>
                      </HStack>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="Email" {...register('customerEmail')} />
                      </FormControl>
                      <FormControl id="password-customer" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder="Password" type="password" {...register('customerPassword')} />
                      </FormControl>
                      <FormControl id="confirm-password-customer" isRequired>
                        <FormLabel>Confirm password</FormLabel>
                        <Input placeholder="Confirm Password" type="password" {...register('customerConfirmPassword')} />
                      </FormControl>
                    </VStack>
                    <Button colorScheme="teal" w="full" mt="12" type="submit">Submit</Button>
                  </form>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box textAlign="center">
            <Text>
              Don&lsquo;t have an account?
              {' '}
              <Link to="/login" color="teal" as={RouterLink}>Log In</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
