import React from 'react';
import PropTypes from 'prop-types';
import { InfiniteLoader, AutoSizer, Column } from 'react-virtualized';
import { FabButton } from '../../ui/FabButton';
import { SearchInput } from '../../ui/SearchInput';
import { PaperStyled, TableHeader, TableStyled, TableCellStyled } from './styled';
import AddSrc from '../../img/plus.svg';

class TableList extends React.Component {
  render() {
    const { loadMoreRows, listData, columns, rowCount, handleOpen } = this.props;
    return (
      <PaperStyled>
        <TableHeader>
          <SearchInput />
          <FabButton label="Add" src={AddSrc} handleClick={handleOpen} />
        </TableHeader>

        <InfiniteLoader
          isRowLoaded={({ index }) => listData[index]}
          loadMoreRows={loadMoreRows}
          rowCount={rowCount} // all list length (all data)
        >
          {({ onRowsRendered, registerChild }) => (
            <AutoSizer>
              {({ width, height }) => (
                <TableStyled
                  ref={registerChild}
                  onRowsRendered={onRowsRendered}
                  height={height - 220}
                  width={width}
                  defaultWidth={width}
                  rowCount={listData.length}
                  rowGetter={({ index }) => listData[index]}
                  rowHeight={84}
                  columns={columns}
                  headerClassName="headerStyle"
                  rowClassName="rowTable"
                >
                  {columns.map((headerName, index) => (
                    <Column
                      key={index}
                      dataKey={headerName.dataKey}
                      headerRenderer={() => (
                        <TableCellStyled component="div">{headerName.label}</TableCellStyled>
                      )}
                      width={headerName.width}
                      flexGrow={headerName.flexGrow}
                    />
                  ))}
                </TableStyled>
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </PaperStyled>
    );
  }
}

TableList.propTypes = {
  loadMoreRows: PropTypes.func,
  listData: PropTypes.instanceOf(Array),
  columns: PropTypes.arrayOf(PropTypes.object),
  rowCount: PropTypes.number,
  handleOpen: PropTypes.func
};

TableList.defaultProps = {
  loadMoreRows: () => false,
  listData: [],
  columns: [{}],
  rowCount: 10000,
  handleOpen: () => false
};

export { TableList };
