import React from 'react';

import {
  Box, Heading, Link, Text, VStack,
} from '@chakra-ui/layout';
import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/tabs';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => (
  <Box p="16" m="0 auto" d="flex" alignItems="center" flexDir="column">
    <Box maxW="xl" w="full" mt="16">

      <VStack alignItems="flex-start">
        <Heading color="teal">LoyalityPro</Heading>
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
              <Heading size="lg">Log In</Heading>
              <Text>Please log in as a brand here</Text>
              <Box mt="8">
                <VStack spacing="4" alignItems="flex-start">
                  <FormControl id="brand-name" isRequired>
                    <FormLabel>Brand Email</FormLabel>
                    <Input placeholder="Email" type="email" />
                  </FormControl>
                  <FormControl id="passwords" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password" />
                  </FormControl>
                </VStack>
                <Button colorScheme="teal" w="full" mt="8">Submit</Button>
              </Box>
            </TabPanel>
            <TabPanel>
              <Heading size="lg">Log In</Heading>
              <Text>Please register as a customer here</Text>

              <Box mt="8">
                <VStack spacing="4" alignItems="flex-start">
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" />
                  </FormControl>
                  <FormControl id="passwords" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password" />
                  </FormControl>
                </VStack>
                <Button colorScheme="teal" w="full" mt="12">Submit</Button>
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

export default Login;
