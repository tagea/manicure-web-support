import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundStyled } from '../../globalStyled';

const Home = (props) => {
  const { children } = props;
  return (
    <BackgroundStyled direction="column" container alignItems="flex-start">
      { children }
    </BackgroundStyled>
  );
};

Home.propTypes = {
  children: PropTypes.node
};
Home.defaultProps = {
  children: null
};

export { Home };
