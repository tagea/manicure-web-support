import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './styled';

const Button = (props) => {
  const { size, color, text, variant, handleClick } = props;
  return (
    <ButtonStyled
      size={size}
      color={color}
      variant={variant}
      onClick={handleClick}
    >
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
  variant: PropTypes.string
};

Button.defaultProps = {
  size: 'medium',
  color: 'secondary',
  text: '',
  handleClick: () => false,
  variant: 'text'
};

export { Button };
