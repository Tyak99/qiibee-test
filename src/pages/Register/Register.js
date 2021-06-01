import React, { useEffect, useState } from 'react';

import {
  Box, Flex, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/layout';
import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/tabs';
import { FormControl } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@chakra-ui/avatar';
import { brandActions } from '../../store/reducers/brandReducer';
import { customerActions } from '../../store/reducers/customerReducer';
import { authActions } from '../../store/reducers/authReducer';
import { generateRandomId } from '../../helpers';
import AuthForm from '../../components/AuthForm';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);
  const [brandLogo, setBrandLogo] = useState({ previewUrl: '', raw: null });

  const uploadBrandPhoto = (file, brandId) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'l5f01g09');
    dispatch(brandActions.uploadBrandPhoto({ formData, brandId }));
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
      loyaltyPoints,
      brandEmail,
    } = data;
    dispatch(brandActions.createBrand({
      id,
      name: brandName,
      symbol: brandSymbol,
      loyaltyPoints,
      email: brandEmail,
      totalAwardedPoints: 0,
      followers: {},
    }));
    if (brandLogo.raw) {
      uploadBrandPhoto(brandLogo.raw, id);
    }
    dispatch(authActions.authenticateUser({ id, userType: 'brand' }));
  };

  const registerCustomer = (data) => {
    const id = generateRandomId();
    const { firstName, lastName, customerEmail } = data;
    dispatch(customerActions.createCustomer({
      id, firstName, lastName, email: customerEmail, loyaltyPoints: {}, followedBrands: 0,
    }));
    dispatch(authActions.authenticateUser({ id, userType: 'customer' }));
  };

  const photoHandler = (e) => {
    if (!e.target.files[0]) return;
    if (brandLogo.previewUrl) {
      URL.revokeObjectURL(brandLogo.previewUrl);
    }
    const imageFile = e.target.files[0];

    setBrandLogo({ previewUrl: URL.createObjectURL(imageFile), raw: imageFile });
  };

  return (
    <Box p="16" m="0 auto" d="flex" alignItems="center" flexDir="column">
      <Box maxW="xl" w="full" mt="16">
        <VStack alignItems="flex-start">
          <Heading>LoyaltyPro</Heading>
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
                        <AuthForm placeholder="Brand name" id="brandName" label="Brand name" formFunc={register} />
                        <AuthForm placeholder="e.g MBT" id="brandSymbol" label="Symbol" formFunc={register} />
                      </HStack>
                      <HStack spacing="8">
                        <AuthForm placeholder="Loyalty Point" id="loyaltyPoints" label="Max Loyalty Points" formFunc={register} />
                        <FormControl id="image">
                          <label htmlFor="uploadInput">
                            <Flex flexDir="column" alignItems="center">
                              <Avatar src={brandLogo.previewUrl} cursor="pointer" size="lg" />
                              <Text mt="2" cursor="pointer">Upload Brand Logo</Text>
                            </Flex>
                          </label>
                          <input
                            id="uploadInput"
                            type="file"
                            accept="image/*"
                            onChange={photoHandler}
                            style={{ opacity: 0 }}
                          />

                        </FormControl>
                      </HStack>
                      <AuthForm placeholder="Email" type="email" id="brandEmail" label="Email" formFunc={register} />
                      <AuthForm placeholder="Password" type="password" id="brandPassword" label="Password" formFunc={register} />
                      <AuthForm placeholder="Password" type="password" id="brandConfirmPassword" label="Confirm Password" formFunc={register} />
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
                        <AuthForm placeholder="First name" id="firstName" label="First name" formFunc={register} />
                        <AuthForm placeholder="Last name" id="lastName" label="Last name" formFunc={register} />
                      </HStack>
                      <AuthForm placeholder="Email" id="customerEmail" label="Email" formFunc={register} />
                      <AuthForm placeholder="Password" type="password" id="customerPassword" label="Password" formFunc={register} />
                      <AuthForm placeholder="Password" type="password" id="confirmCustomerPassword" label="Password" formFunc={register} />
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
