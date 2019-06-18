import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../src/components/Home';
import { BackgroundStyled } from '../../src/globalStyled';

it('render Home component', () => {
  const HomeComponent = shallow(<Home />);
  expect(HomeComponent).toMatchSnapshot();
});

it('Home as wrapper BackgroundStyled should contain value "container"', () => {
  const HomeComponent = shallow(<Home />);
  expect(HomeComponent.find(BackgroundStyled).prop('container')).toBeTruthy();
});

it('BackgroundStyled should contain "alignItems" property with "flex-start" value', () => {
  const HomeComponent = shallow(<Home />);
  expect(HomeComponent.find(BackgroundStyled).prop('alignItems')).toEqual('flex-start');
});

it('BackgroundStyled should contain "direction" property with "column" value', () => {
  const HomeComponent = shallow(<Home />);
  expect(HomeComponent.find(BackgroundStyled).prop('direction')).toEqual('column');
});
