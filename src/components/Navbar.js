import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@chakra-ui/avatar';
import {
  Box, Flex, Heading, HStack, Link,
} from '@chakra-ui/layout';
import { Route as RouterLink } from 'react-router-dom';

const Navbar = (props) => (
  <Flex
    justifyContent="space-between"
    p={['4', '8']}
    position="fixed"
    height="20"
    top="0"
    left="0"
    right="0"
    alignItems="center"
    zIndex="1"
    bg="white"
    shadow="lg"
  >
    <Box>
      <Heading size="md" color="teal" cursor="pointer">
        <Link as={RouterLink} to="/login">LoyalityFx</Link>
      </Heading>
    </Box>
    <Flex>
      <HStack spacing="4">
        <Link href="/profile">
          <Avatar
            name="Tunde Nasri"
            size="sm"
            cursor="pointer"
            src="http://res.cloudinary.com/buymezobo/image/upload/v1622232510/qiibee/v5xpjizpvfsqm0axtkc2.svg"
          />
        </Link>
      </HStack>
    </Flex>
  </Flex>
);

Navbar.propTypes = {

};

export default Navbar;
