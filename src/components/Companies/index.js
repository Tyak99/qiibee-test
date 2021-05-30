import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/layout';
import CompanyCard from './CompanyCard';

const CompanyList = ({ openBrand, brands }) => (
  <Box mt="4">
    {
      brands.map((brand) => (
        <CompanyCard openBrand={openBrand} brand={brand} key={brand.id} />
      ))
    }
  </Box>
);

CompanyList.propTypes = {
  openBrand: PropTypes.func.isRequired,
  brands: PropTypes.instanceOf(PropTypes.array).isRequired,
};

export default CompanyList;
