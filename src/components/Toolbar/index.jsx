import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Logo } from '../../ui/Logo';
import { AppBarStyled } from './styled';

const Toolbar = () => (
  <Grid container justify="center">
    <Grid item md={10}>
      <AppBarStyled position="static">
        <Logo />
      </AppBarStyled>
    </Grid>
  </Grid>
);

export { Toolbar };
