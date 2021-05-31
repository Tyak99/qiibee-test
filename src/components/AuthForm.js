import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

const AuthForm = ({
  placeholder, type, label, id, formFunc,
}) => (
  <FormControl id={id} isRequired>
    <FormLabel>{label}</FormLabel>
    <Input placeholder={placeholder} type={type} {...formFunc(id)} />
  </FormControl>
);

AuthForm.defaultProps = {
  placeholder: '',
  type: 'text',
};

AuthForm.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AuthForm;
