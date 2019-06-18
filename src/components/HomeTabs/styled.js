import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const ContainerStyled = styled(Grid)`
  flex: auto;
  overflow: hidden;
`;

export const TabContainerStyled = styled(Grid)`
  height: 100%;
  margin-top: 30px;
`;

export const AppBarStyled = styled(AppBar)`
  &&{
    box-shadow: none;
    border-radius: 3px;
    position: relative;
    >button{
      top: 4px;
    }
  }
`;

export const TabStyled = styled(Tab)`
  &&{
    font-size: 1.2em;
    padding: 6px 0;
    color: ${palette.text.main};
  }
`;

export const LogOutButtonStyled = styled(Grid)`
  position: absolute;
  right: 20px;
  top: 4px;
`;
