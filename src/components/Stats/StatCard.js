import React from 'react';
import PropTypes from 'prop-types';
import { Stat, StatHelpText, StatNumber } from '@chakra-ui/stat';

export const StatCard = () => (
  <Stat shadow="lg" p="2" bg="white" borderRadius="md" maxW={{ base: '40', lg: '48' }}>
    <StatNumber fontWeight="semibold" color="teal">1,200</StatNumber>
    <StatHelpText>Wallet Value</StatHelpText>
  </Stat>
);
