import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { StatCard } from './StatCard';

const Stats = (props) => (
  <Box py="4" maxW="md">
    <Heading size="md">Stats</Heading>
    <Flex justifyContent="space-between">
      <StatCard />
      <StatCard />
    </Flex>
  </Box>
);

Stats.propTypes = {

};

export default Stats;
