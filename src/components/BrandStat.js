import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { formatNumber } from '../helpers';

const BrandStat = ({ amount, title, color }) => (
  <Box
    border="2px"
    borderColor="gray.200"
    p="4"
    borderRadius="md"
    w="72"
    textAlign="center"
  >
    <Heading size="3xl" color={color}>{formatNumber(amount)}</Heading>
    <Text>{title}</Text>
  </Box>
);

BrandStat.propTypes = {
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default BrandStat;
