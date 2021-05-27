import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/layout';
import CompanyCard from './CompanyCard';

const CompanyList = (props) => (
  <Box mt="4">
    <CompanyCard />
    <CompanyCard isFollowing />
    <CompanyCard />
    <CompanyCard />
    <CompanyCard />
  </Box>
);

CompanyList.propTypes = {

};

export default CompanyList;
