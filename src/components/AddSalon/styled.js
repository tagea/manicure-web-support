import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';

export const FormBlockStyled = styled(Grid)`
  padding-top: 10px;
`;

export const DayStyled = styled(Typography)`
  text-transform: capitalize;
  text-align: right;
  &&{
    margin-right: 10px;
    line-height: 46px;
  }
`;

export const BlockPhotosStyled = styled(Grid)`
  overflow: hidden;
  height: 190px;
`;

export const GridListStyled = styled(GridList)`
  &&{
    flex-wrap: nowrap;
  }
  transform: translateZ(0);
`;

export const ButtonAddStyled = styled(Grid)`
  text-align: center;
  position: relative;
  top: calc(90px - 40px / 2);
`;

export const GridListTileBarStyled = styled(GridListTileBar)`
  div{
    flex-grow: 1;
  }
`;

export const InputFileStyled = styled('input')`
  display: none;
`;

export const AddPhotoStyled = styled(Button)`
  &&{
    display: inline-block;
    height: 40px;
    border-radius: 50%;
    min-width: 40px;
    width: 40px;
    padding: 9px;
  }
`;
