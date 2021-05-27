import { Box, Heading } from '@chakra-ui/layout';
import PropTypes from 'prop-types';
import React from 'react';
import Container from '../components/Container';

const BrandView = () => (
  <div>
    <Container>
      <Box>
        <Heading>This is a brand view</Heading>
      </Box>
    </Container>
  </div>
);

BrandView.proptype = {

};

export default BrandView;
