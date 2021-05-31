import React, { useEffect } from 'react';

import {
  Box, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/layout';
import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/tabs';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { brandActions } from '../../store/reducers/brandReducer';
import { customerActions } from '../../store/reducers/customerReducer';
import { authActions } from '../../store/reducers/authReducer';
import { generateRandomId } from '../../helpers/randomString';
import AuthForm from '../../components/AuthForm';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);

  const uploadBrandPhoto = (files, brandId) => {
    const formData = new FormData();
    formData.append('file', files[0]);
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
      brandLogo,
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
    uploadBrandPhoto(brandLogo, id);
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
                        <AuthForm placeholder="Brand name" id="brandName" label="Brand name" formFunc={register} />
                        <AuthForm placeholder="e.g MBT" id="brandSymbol" label="Symbol" formFunc={register} />
                      </HStack>
                      <HStack spacing="8">
                        <AuthForm placeholder="Loyalty Point" id="loyaltyPoints" label="Max Loyalty Points" formFunc={register} />
                        <FormControl id="image">
                          <FormLabel>Logo</FormLabel>
                          <input type="file" accept="image/*" {...register('brandLogo')} />
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
