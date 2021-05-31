import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import {
  Flex,
  HStack, Text, Box, Heading,
} from '@chakra-ui/layout';

import {
  ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalOverlay, Modal,
} from '@chakra-ui/modal';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const BrandView = ({
  onOpen, isOpen, onClose, selectedBrandId, followBrand, customerId, redeemPoints,
}) => {
  if (!selectedBrandId) return null;
  const [point, setPoint] = useState(0);
  const brand = useSelector((state) => state.brands[selectedBrandId]);
  const customer = useSelector((state) => state.customers[customerId]);
  const loyaltyPoints = customer.loyaltyPoints[selectedBrandId];
  const isFollowing = brand.followers[customerId];

  const redeem = () => {
    redeemPoints(point, loyaltyPoints);
  };
  return (
    <Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {selectedBrandId
          && (
            <>
              <ModalHeader>{brand.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex flexDir="column" alignItems="center" mb="8">
                  <Avatar borderRadius="sm" />
                  {/* <Text textAlign="center">Redeem your rewards</Text> */}
                  {isFollowing
                    ? (
                      <>
                        <Heading size="md" mt="4">{`${customer.loyaltyPoints[selectedBrandId]} points`}</Heading>
                        {/* <Text mt="4">Enter point amount to redeem</Text> */}
                        <Box mt="8">
                          <Input w="sm" placeholder="Amount" onChange={(e) => setPoint(e.target.value)} />
                          <Button mt="4" colorScheme="teal" w="sm" onClick={() => redeem(point)}>Redeem</Button>
                        </Box>
                      </>
                    )
                    : (
                      <>
                        <Text mt="4" w="sm" textAlign="center">
                          {`Follow ${brand.name} to start earning loyalty token`}
                        </Text>
                        <Button mt="4" colorScheme="teal" w="sm" onClick={followBrand}>Follow</Button>
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
  customerId: PropTypes.string.isRequired,
};

export default BrandView;
