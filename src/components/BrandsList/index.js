import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/layout';
import BrandCard from './BrandCard';

const BrandsList = ({ openBrand, brands, customerId }) => (
  <Box mt="4">
    {
      Object.values(brands).map((brand) => (
        <BrandCard
          openBrand={openBrand}
          brand={brand}
          key={brand.id}
          isFollowing={!!brand.followers[customerId]}
        />
      ))
    }
  </Box>
);

BrandsList.propTypes = {
  openBrand: PropTypes.func.isRequired,
  brands: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string,
    }),
  }).isRequired,
};

export default BrandsList;
