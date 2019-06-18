import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';

import { Table } from 'react-virtualized';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const PaperStyled = styled(Paper)`
  &&{
    background-color: ${palette.surface.light};
    border-radius: 3px;
    box-shadow: none;
    height: 100%;
  }
`;

export const TableStyled = styled(Table)`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  div:focus{
      outline: none;
  }
  .rowTable{
    display: flex;
    padding: 30px 25px;
    box-sizing: border-box;
    border-bottom: 1px solid ${palette.border.light};
    border-top: 1px solid transparent;
    transition: all 0.2s ease-in;
    :hover{
      background-color: ${palette.surface.transparent};
      border-bottom: 1px solid ${palette.border.main};
      border-top: 1px solid ${palette.primary.main};
    }
  }
  .ReactVirtualized__Table__headerRow:hover{
    background-color: transparent;
    border-bottom: 1px solid ${palette.border.light};
    border-top: 1px solid transparent;
    
  }
  .headerStyle{
    padding-top: 0;
    padding-bottom: 0;
    line-height: 20px;
    color: ${palette.text.transparent};
  }
`;

export const TableCellStyled = styled(TableCell)`
  &&{
    font-size: 1.1em;
    border-bottom: none;
    padding: 0px;
  }
`;

export const TableHeader = styled(Grid)` 
  &&{
    display:flex;
    justify-content: space-between;
    margin: 0 20px;
    padding-top: 25px;
  }
`;
