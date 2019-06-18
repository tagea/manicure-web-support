import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const GroupButtonStyled = styled(Typography)`
  button{
    margin: 0 4px;
  }
`;

export const DialogTitleStyled = styled(DialogTitle)`
  border-bottom: 1px solid ${palette.border.light};
  &&{
    padding-bottom: 26px;
    margin-bottom: 30px;
  }
`;
