import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { Logo } from '../../ui/Logo';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { BackgroundStyled } from '../../globalStyled';
import { PaperStyled } from './styled';

const Auth = (props) => {
  const { error, changeInput, pressEnter, handleSubmit } = props;
  return (
    <BackgroundStyled container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Logo />
        <PaperStyled container direction="column" justify="center" alignItems="center">
          <Input
            id="username-support"
            label="Username"
            type="text"
            name="username"
            autoComplete="username"
            size="large"
            error={error}
            onChange={changeInput}
          />
          <Input
            id="password-support"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            size="large"
            error={error}
            onChange={changeInput}
            onKeyDown={pressEnter}
          />
          <Button variant="contained" size="large" color="secondary" text="Sign in" handleClick={handleSubmit} />
        </PaperStyled>
      </Grid>
    </BackgroundStyled>
  );
};

Auth.propTypes = {
  error: PropTypes.bool,
  handleSubmit: PropTypes.func,
  changeInput: PropTypes.func,
  pressEnter: PropTypes.func
};
Auth.defaultProps = {
  error: false,
  handleSubmit: () => false,
  changeInput: () => false,
  pressEnter: () => false
};

export { Auth };
