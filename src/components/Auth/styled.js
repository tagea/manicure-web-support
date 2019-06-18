import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const PaperStyled = styled(Grid)`
  &&{
    width: 324px;
  }
  border-radius: 4px;
  background-color: ${palette.surface.main};
  padding: 42px 27px;
`;
