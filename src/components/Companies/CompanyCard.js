import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import {
  Box, Heading, HStack, Link, Text,
} from '@chakra-ui/layout';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';

import PropTypes from 'prop-types';

// TODO: implement isFollowing
// TODO: format loyalty points
const CompanyCard = ({ isFollowing, openBrand, brand }) => (
  // <Link to="/brand/hmm" as={ReactRouterLink} _hover={{ underline: 'none' }}>
  <Box
    d="flex"
    justifyContent="space-between"
    alignItems="center"
    bg="white"
    borderRadius="md"
    _hover={{ backgroundColor: 'gray.200' }}
    p={{ base: '4', sm: '4' }}
    mb="2"
    shadow="lg"
    w={{ base: '100%' }}
    cursor="pointer"
    onClick={openBrand}
  >
    <HStack spacing="4">
      <Avatar borderRadius="sm" />
      <Box>
        <Heading size="sm">{brand.name}</Heading>
        <Text fontSize="sm">{brand.symbol}</Text>
      </Box>
    </HStack>
    <Box>

      <Text display={{ base: 'none', sm: 'block' }}>{`${brand.loyaltyPoints} ${brand.symbol}`}</Text>
      {
        isFollowing
      && (
        <Text fontSize="xs" color="gray">Following</Text>
      )
      }
    </Box>
  </Box>
  // </Link>
);

CompanyCard.defaultProps = {
  isFollowing: false,
};

CompanyCard.propTypes = {
  isFollowing: PropTypes.bool,
  openBrand: PropTypes.func.isRequired,
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    loyaltyPoints: PropTypes.number.isRequired,
    logo: PropTypes.string,
  }).isRequired,
};

export default CompanyCard;
