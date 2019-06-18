import React from 'react';
import { shallow } from 'enzyme';
import { Toolbar } from '../../src/components/Toolbar';
import { AppBarStyled } from '../../src/components/Toolbar/styled';

it('render Toolbar component', () => {
  const ToolbarComponent = shallow(<Toolbar />);
  expect(ToolbarComponent).toMatchSnapshot();
});

it('AppBar should contain "position" property', () => {
  const ToolbarComponent = shallow(<Toolbar />);
  expect(ToolbarComponent.find(AppBarStyled).prop('position')).toBeTruthy();
});

it('AppBar should contain "position" property with "static" value', () => {
  const ToolbarComponent = shallow(<Toolbar />);
  expect(ToolbarComponent.find(AppBarStyled).prop('position')).toEqual('static');
});
