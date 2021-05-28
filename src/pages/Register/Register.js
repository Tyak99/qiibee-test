import React from 'react';

import {
  Box, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/layout';
import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/tabs';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Link as RouterLink } from 'react-router-dom';

const Register = () => (
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
                <VStack spacing="4" alignItems="flex-start">
                  <HStack spacing="8">
                    <FormControl id="brand-name" isRequired>
                      <FormLabel>Brand name</FormLabel>
                      <Input placeholder="Brand name" />
                    </FormControl>
                    <FormControl id="last-name" isRequired>
                      <FormLabel>Symbol</FormLabel>
                      <Input placeholder="e.g MBT" />
                    </FormControl>
                  </HStack>
                  <HStack spacing="8">
                    <FormControl id="last-name" isRequired>
                      <FormLabel>Max Loyality Point</FormLabel>
                      <Input placeholder="Last name" />
                    </FormControl>
                    <FormControl id="email" isRequired>
                      <FormLabel>Logo</FormLabel>
                      <Input placeholder="Email" />
                    </FormControl>
                  </HStack>

                  <FormControl id="passwords" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password" />
                  </FormControl>
                  <FormControl id="confirm-password" isRequired>
                    <FormLabel>Confirm password</FormLabel>
                    <Input placeholder="Confirm Password" type="password" />
                  </FormControl>
                </VStack>
                <Button colorScheme="teal" w="full" mt="8">Submit</Button>
              </Box>
            </TabPanel>
            <TabPanel>
              <Heading size="lg">Register</Heading>
              <Text>Please register as a customer here</Text>

              <Box mt="8">
                <VStack spacing="4" alignItems="flex-start">
                  <HStack spacing="8">
                    <FormControl id="first-name" isRequired>
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>
                    <FormControl id="last-name" isRequired>
                      <FormLabel>Last name</FormLabel>
                      <Input placeholder="Last name" />
                    </FormControl>
                  </HStack>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" />
                  </FormControl>
                  <FormControl id="passwords" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password" />
                  </FormControl>
                  <FormControl id="confirm-password" isRequired>
                    <FormLabel>Confirm password</FormLabel>
                    <Input placeholder="Confirm Password" type="password" />
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
            <Link to="/login" color="teal" as={RouterLink}>Log In</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Register;
