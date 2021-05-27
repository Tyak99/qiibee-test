import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import {
  Box, Heading, HStack, Link, Text,
} from '@chakra-ui/layout';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';

import PropTypes from 'prop-types';

const CompanyCard = ({ isFollowing }) => (
  <Link to="/brand/hmm" as={ReactRouterLink} _hover={{ underline: 'none' }}>
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      borderRadius="md"
      _hover={{ backgroundColor: 'gray.200' }}
      p={{ base: '4', sm: '8' }}
      mb="4"
      shadow="lg"
      w={{ base: '100%' }}
      cursor="pointer"
    >
      <HStack spacing="4">
        <Avatar borderRadius="sm" />
        <Box>
          <Heading size="sm">Fibre Limited</Heading>
          <Text display={{ base: 'block', sm: 'none' }}>FLX</Text>
        </Box>
      </HStack>
      <Text display={{ base: 'none', sm: 'block' }}>FLX</Text>
      {
        isFollowing
      && (
      <HStack color="teal">
        <Icon as={FaCheck} />
        <Text>Followed</Text>
      </HStack>
      )
      }
    </Box>
  </Link>
);

CompanyCard.defaultProps = {
  isFollowing: false,
};

CompanyCard.propTypes = {
  isFollowing: PropTypes.bool,
};

export default CompanyCard;
