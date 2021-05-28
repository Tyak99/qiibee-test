import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import {
  Flex,
  HStack, Text, Box, Heading,
} from '@chakra-ui/layout';

import {
  ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, ModalOverlay, Modal,
} from '@chakra-ui/modal';

import PropTypes from 'prop-types';
import React from 'react';
import Container from '../../components/Container';

const BrandView = ({
  onOpen, isOpen, onClose, isFollowing, currentlySelectedBrand,
}) => (
  <Box>
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Fibre Limited</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" alignItems="center" mb="8">
            <Avatar borderRadius="sm" />
            {isFollowing
              ? (
                <>
                  <Heading size="md" mt="4">300points</Heading>
                  <Text mt="4">Enter point amount to redeem</Text>
                  <Input w="sm" />
                  <Button mt="4" colorScheme="teal" w="sm">Redeem</Button>
                </>
              )
              : (
                <>
                  <Heading size="md">Fibre Limited</Heading>
                  <Text mt="4" w="sm">
                    Follow Fibre Limited to start earning loyality token erhje
                    iernie
                    ernieuns iernern
                  </Text>
                  <Button mt="4" colorScheme="teal" w="sm">Follow</Button>
                </>
              )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
);

BrandView.proptype = {
  isFollowing: PropTypes.bool.isRequired,
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BrandView;
