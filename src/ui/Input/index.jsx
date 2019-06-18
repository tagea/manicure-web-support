import React from 'react';
import PropTypes from 'prop-types';

import { InputStyled } from './styled';

const Input = props => (
  <InputStyled
    {...props}
    margin="dense"
    variant="outlined"
    fullWidth
  />
);

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  autoComplete: PropTypes.string,
  size: PropTypes.string
};

Input.defaultProps = {
  id: '',
  label: '',
  name: '',
  type: '',
  error: false,
  autoComplete: '',
  size: 'small'
};

export { Input };
