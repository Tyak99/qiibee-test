import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import {
  Flex,
  HStack, Text, Box, Heading,
} from '@chakra-ui/layout';

import {
  ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalOverlay, Modal,
} from '@chakra-ui/modal';

import PropTypes from 'prop-types';
import React from 'react';
import Container from '../../components/Container';

const BrandView = ({
  onOpen, isOpen, onClose, selectedBrand,
}) => {
  const isFollowing = selectedBrand?.followers.jrneier;
  return (
    <Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {selectedBrand
          && (
            <>
              <ModalHeader>{selectedBrand.name}</ModalHeader>
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
                        <Text mt="4" w="sm" textAlign="center">
                          Follow Fibre Limited to start earning loyality token erhje
                          iernie
                          ernieuns iernern
                        </Text>
                        <Button mt="4" colorScheme="teal" w="sm">Follow</Button>
                      </>
                    )}
                </Flex>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};

BrandView.proptype = {
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BrandView;
