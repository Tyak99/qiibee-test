import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/layout';
import CompanyCard from './CompanyCard';

const CompanyList = ({ openBrand }) => (
  <Box mt="4">
    <CompanyCard openBrand={openBrand} />
    <CompanyCard isFollowing openBrand={openBrand} />
    <CompanyCard openBrand={openBrand} />
    <CompanyCard openBrand={openBrand} />
    <CompanyCard openBrand={openBrand} />
  </Box>
);

CompanyList.propTypes = {
  openBrand: PropTypes.func.isRequired,
};

export default CompanyList;
