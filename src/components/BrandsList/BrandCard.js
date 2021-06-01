import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import {
  Box, Heading, HStack, Text,
} from '@chakra-ui/layout';

import PropTypes from 'prop-types';
import { formatNumber } from '../../helpers';

const BrandCard = ({ isFollowing, openBrand, brand }) => (
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
    onClick={() => openBrand(brand.id)}
  >
    <HStack spacing="4">
      <Avatar borderRadius="sm" />
      <Box>
        <Heading size="sm">{brand.name}</Heading>
        <Text fontSize="sm">{brand.symbol}</Text>
      </Box>
    </HStack>
    <Box>

      <Text display={{ base: 'none', sm: 'block' }}>{`${formatNumber(brand.loyaltyPoints)} ${brand.symbol}`}</Text>
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

BrandCard.defaultProps = {
  isFollowing: false,
};

BrandCard.propTypes = {
  isFollowing: PropTypes.bool,
  openBrand: PropTypes.func.isRequired,
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    loyaltyPoints: PropTypes.number.isRequired,
    logo: PropTypes.string,
  }).isRequired,
};

export default BrandCard;
