import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';

import { } from './styled';

const FabButton = (props) => {
  const { src, label, size, handleClick } = props;
  return (
    <Fab aria-label={label} size={size} color="secondary" onClick={handleClick}>
      <img src={src} alt={label} width="17" height="17" />
    </Fab>
  );
};

FabButton.propTypes = {
  src: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  handleClick: PropTypes.func
};

FabButton.defaultProps = {
  src: '',
  label: '',
  size: 'medium',
  handleClick: () => false
};

export { FabButton };
