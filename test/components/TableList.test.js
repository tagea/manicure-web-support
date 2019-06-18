import React from 'react';
import { shallow } from 'enzyme';
import { InfiniteLoader } from 'react-virtualized';
import { TableList } from '../../src/components/TableList/index';

it('render TableList component', () => {
  const TableListComponent = shallow(<TableList />);
  expect(TableListComponent).toMatchSnapshot();
});

it('InfinitLoader should contain "minimumBatchSize" property with "10" value', () => {
  const TableListComponent = shallow(<TableList />);
  expect(TableListComponent.find(InfiniteLoader).prop('minimumBatchSize')).toBe(10);
});

it('InfinitLoader should contain "rowCount" property with "10000" value', () => {
  const TableListComponent = shallow(<TableList />);
  expect(TableListComponent.find(InfiniteLoader).prop('rowCount')).toBe(10000);
});

it('InfinitLoader should contain "threshold" property with "15" value', () => {
  const TableListComponent = shallow(<TableList />);
  expect(TableListComponent.find(InfiniteLoader).prop('threshold')).toBe(15);
});

it('InfiniteLoader should have isRowLoaded function', () => {
  const TableListComponent = shallow(<TableList />);
  expect(TableListComponent.find('InfiniteLoader').prop('isRowLoaded')).toBeInstanceOf(Function);
});

it('InfiniteLoader should have loadMoreRows function', () => {
  const TableListComponent = shallow(<TableList />);
  expect(TableListComponent.find('InfiniteLoader').prop('loadMoreRows')).toBeInstanceOf(Function);
});
