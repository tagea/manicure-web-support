import React from 'react';
import Grid from '@material-ui/core/Grid';
import LogoSrc from '../../img/logo.png';

import { LogoStyled, ImgStyled, TopHeaderStyled, SubHeaderStyled } from './styled';

const Logo = () => (
  <LogoStyled container justify="center" alignItems="center" spacing={8}>
    <Grid item>
      <ImgStyled src={LogoSrc} alt="logo" width="58" height="58" />
    </Grid>
    <Grid item>
      <TopHeaderStyled variant="h3" align="center">ManiCure</TopHeaderStyled>
      <SubHeaderStyled variant="h4" align="center">Support</SubHeaderStyled>
    </Grid>
  </LogoStyled>
);

export { Logo };
