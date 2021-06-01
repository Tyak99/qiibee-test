import React, { useEffect } from 'react';

import {
  Box, Heading, Link, Text, VStack,
} from '@chakra-ui/layout';
import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/tabs';
import { Button } from '@chakra-ui/button';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/toast';
import { authActions } from '../../store/reducers/authReducer';
import AuthForm from '../../components/AuthForm';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const history = useHistory();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);
  const brands = useSelector((state) => state.brands);
  const customers = useSelector((state) => state.customers.data);

  const invalidCredentials = () => toast({
    title: 'Invalid credentials',
    description: 'Invalid email or password',
    status: 'error',
    duration: 2000,
    position: 'top',
    isClosable: true,
  });

  const findBrand = (email) => Object.values(brands)
    .find((brand) => brand.email === email);
  const findCustomer = (email) => Object.values(customers)
    .find((customer) => customer.email === email);

  useEffect(() => {
    if (authData.isAuthenticated === true) {
      const redirectTo = authData.userType === 'brand' ? '/dashboard' : '/brands';
      history.push(redirectTo);
    }
  }, [authData]);

  const loginBrand = (data) => {
    const { brandEmail } = data;
    const foundBrand = findBrand(brandEmail);
    if (foundBrand) {
      dispatch(authActions.authenticateUser({ id: foundBrand.id, userType: 'brand' }));
    } else {
      return invalidCredentials();
    }
  };

  const loginCustomer = (data) => {
    const { customerEmail } = data;
    const foundCustomer = findCustomer(customerEmail);
    if (foundCustomer) {
      dispatch(authActions.authenticateUser({ id: foundCustomer.id, userType: 'customer' }));
    } else {
      return invalidCredentials();
    }
  };

  return (
    <Box p="16" m="0 auto" d="flex" alignItems="center" flexDir="column">
      <Box maxW="xl" w="full" mt="16">

        <VStack alignItems="flex-start">
          <Heading color="teal">LoyaltyPro</Heading>
          <Text>Please Log in as a brand or customer below</Text>
        </VStack>
        <Box mt="16">
          <Tabs isFitted variant="enclosed" colorScheme="teal">
            <TabList mb="1em">
              <Tab _selected={{ borderTop: '2px solid teal' }} fontSize="lg">Brand</Tab>
              <Tab _selected={{ borderTop: '2px solid teal' }} fontSize="lg">Customer</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading size="lg">Log In</Heading>
                <Text>Please log in as a brand here</Text>
                <Box mt="8">
                  <form onSubmit={handleSubmit(loginBrand)}>
                    <VStack spacing="4" alignItems="flex-start">
                      <AuthForm placeholder="Email" type="email" id="brandEmail" label="Brand Email" formFunc={register} />
                      <AuthForm placeholder="Password" type="password" id="brandPassword" label="Password" formFunc={register} />
                    </VStack>
                    <Button colorScheme="teal" w="full" mt="8" type="submit">Submit</Button>
                  </form>
                </Box>
              </TabPanel>
              <TabPanel>
                <Heading size="lg">Log In</Heading>
                <Text>Please register as a customer here</Text>

                <Box mt="8">
                  <form onSubmit={handleSubmit(loginCustomer)}>
                    <VStack spacing="4" alignItems="flex-start">
                      <AuthForm placeholder="Email" type="email" id="customerEmail" label="Email" formFunc={register} />
                      <AuthForm placeholder="Password" type="password" id="customerPassword" label="Password" formFunc={register} />
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
              <Link to="/register" as={RouterLink} color="teal">Sign Up</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
