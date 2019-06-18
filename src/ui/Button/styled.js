import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { theme } from '../Themes';

const { palette } = theme;

export const ButtonStyled = styled(Button)`
  &&{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-top: ${props => (props.size === 'large' ? '16px' : '0')};
    font-size: ${props => (props.size === 'large' ? '1.25em' : '0.7em')};
    padding: ${props => (props.size === 'large' ? '7px 57px' : '7px 20px')};
    box-shadow: ${props => (props.variant !== 'text' ? `0px 4px 10px ${palette.shadow.main}` : 'none')};
  }
`;
