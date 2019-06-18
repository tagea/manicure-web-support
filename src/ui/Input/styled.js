import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { theme } from '../Themes';

const { palette } = theme;

export const InputStyled = styled(TextField)`
  &&{
    margin: 0 0 14px 0;
    input, label{
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: ${props => (props.size === 'large' ? '1.25em' : '1em')};
      top: -2px;
      color: ${props => (props.error ? palette.text.error : palette.text.transparent)};
    }
    input, div{
      height: ${props => (props.size === 'large' ? '50px' : '46px')};
      box-sizing: border-box;
      color: ${palette.text.transparent};
    }
    div:hover fieldset{
      border-color: ${palette.primary.main} !important;
    }
  }
`;
