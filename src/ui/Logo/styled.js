import styled from 'styled-components';
import { Typography, Grid } from '@material-ui/core';

export const LogoStyled = styled(Grid)`
  &&{
    padding: 20px 0;
    padding-right:10px;
  }
`;

export const ImgStyled = styled('img')`
  vertical-align: middle;
`;

export const TopHeaderStyled = styled(Typography)`
  &&{
    font-family: 'Baloo Bhai', cursive;
    font-size: 2.3em;         
  }
`;

export const SubHeaderStyled = styled(Typography)`
  &&{
    font-weight: normal;
    font-size: 1.5em;
  }
`;
