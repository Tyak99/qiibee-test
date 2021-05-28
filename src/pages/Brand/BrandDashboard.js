import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Heading, Box, Flex, Text,
} from '@chakra-ui/layout';
import {
  Table, Thead, Tr, Th, Tbody, Td,
} from '@chakra-ui/table';

import { Checkbox } from '@chakra-ui/checkbox';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import BrandSidebar from '../../components/BrandSidebar';

const followers = [
  {
    name: 'Tiunde Nasri',
    amount: 0,
    email: 'tundenasri@gmail.com',
    isChecked: false,
  },
  {
    name: 'Johnson Samuel',
    amount: 110,
    email: 'jsszzzx@gmail.com',
    isChecked: false,

  },
  {
    name: 'Tosin Samuel',
    amount: 110,
    email: 'ernuenr@gmail.com',
    isChecked: false,

  },
  {
    name: 'Busola Lamini',
    amount: 0,
    email: 'btrrh99@gmail.com',
    isChecked: false,

  },
  {
    name: 'John Doe',
    amount: 0,
    email: 'jd@gmail.com',
    isChecked: false,

  },
  {
    name: 'Skones Tops',
    amount: 12,
    email: 'skones@gmail.com',
    isChecked: false,

  },
  {
    name: 'Kira Karen',
    amount: 0,
    email: 'karenk@gmail.com',
    isChecked: false,

  },
];

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
const BrandDashboard = (props) => {
  const [checkedFollwers, setCheckedFollwers] = useState([]);

  const setChecked = (index, value) => {
    const item = followers[index];

    if (value === false) {
      setCheckedFollwers([...checkedFollwers]
        .filter((checkedFollower) => checkedFollower.email !== item.email));
    } else {
      setCheckedFollwers(checkedFollwers.concat(item));
    }
  };
  return (
    <div>
      <Box d={{ lg: 'flex' }}>
        <BrandSidebar />
        <Box w="100%" m="0 auto" h="100vh" ml="340px">
          <Box mt="20" py="4" px={{ base: 0, lg: '8' }} h="100%">
            <Box mt="8">
              <Text>Overview</Text>
              <Flex justifyContent="space-between" mt="4" w={{ base: '100%', lg: '700px' }}>
                <BrandStat amount="50,000" title="Total available MBT" />
                <BrandStat amount="101" title="Total rewarded MBT" />
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

                <Flex>
                  <FormControl>
                    <Input placeholder="Amount" />
                  </FormControl>
                  <Button ml="4" colorScheme="teal" px="8">Award Points</Button>
                </Flex>
              </Flex>
              <Table variant="simple" size="lg" mt="4">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>email</Th>
                    <Th isNumeric>Amount earned</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                  followers.map((item, index) => (
                    <Tr>

                      <Td>
                        <Flex>
                          <Checkbox onChange={(e) => setChecked(index, e.target.checked)} mr="4" />
                          {item.name}
                        </Flex>
                      </Td>
                      <Td>{item.email}</Td>
                      <Td isNumeric>{item.amount}</Td>
                    </Tr>
                  ))
                }
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

BrandDashboard.propTypes = {

};

export default BrandDashboard;
