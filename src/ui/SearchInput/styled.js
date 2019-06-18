import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { theme } from '../Themes';

const { palette } = theme;

export const SearchStyled = styled(Grid)`
  &&{
    border-radius: 3px;
    background-color: ${palette.surface.main};
  }
  position: relative;
`;

export const SearchIconStyled = styled(SearchIcon)`
  &&{
    position: absolute;
    right: 15px;
    top: 12px;
    color: ${palette.text.transparent};
  }
`;

export const InputStyled = styled(InputBase)`
&&{
    padding: 8px 40px 5px 20px;
    box-sizing: border-box;
    input{
      width: 230px;
      font-size: 0.9em;
      font-weight: 300;
      color: ${palette.text.transparent};
      transition: width 0.3s ease-in;
    }
    input:focus{
      width: 340px;
    }
}
`;
