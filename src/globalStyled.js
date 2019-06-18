import styled, { createGlobalStyle } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { theme } from './ui/Themes';
import bg from './img/background.jpg';

const { palette } = theme;

export const GlobalStyle = createGlobalStyle`
  html{
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    flex: auto;
    color: ${palette.text.main};
  }
  .root{
    display: flex;
    flex-direction: column;
    flex: auto; 
  }
`;

export const BackgroundStyled = styled(Grid)`
  flex: auto;
  background-color: ${palette.secondary.light};
  background-image: url('${bg}');
  background-size: cover;
  padding-bottom: 40px;
`;

export const HeaderStyled = styled(Typography)`
  &&{
    font-weight: 300;
    font-size: 1.5em;
  }
  padding: 0px;
  padding-bottom: 30px;
`;
