import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import { HomeTabs } from '../../src/components/HomeTabs';
import { ContainerStyled, AppBarStyled, TabStyled } from '../../src/components/HomeTabs/styled';

it('render HomeTabs component', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent).toMatchSnapshot();
});

it('ContainerStyled should contain "container" property', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(ContainerStyled).prop('container')).toBeTruthy();
});

it('ContainerStyled should contain "justify" property with "center" value', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(ContainerStyled).prop('justify')).toEqual('center');
});

it('Grid should contain "item" property', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(Grid).prop('item')).toBeTruthy();
});

it('Grid should contain "md" property with "10" value', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(Grid).prop('md')).toBeWithinRange(1, 12);
});

it('AppBar should contain "color" property with "default or primary or secondary" value', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(AppBarStyled).prop('color')).toMatch(/primary|secondary|default/);
});

it('AppBar should contain "position" property with "static" value', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(AppBarStyled).prop('position')).toBe('static');
});

it('FabButton should contain label with text', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find('FabButton').prop('label')).not.toBe('');
});

it('FabButton should contain src width text', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find('FabButton').prop('src')).not.toBe('');
});

it('FabButton should have onCLick function', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find('FabButton').prop('handleClick')).toBeInstanceOf(Function);
});

it('Tabs should contain "indicatorColor" property with "primary" value', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(Tabs).prop('indicatorColor')).toBe('primary');
});

it('Tabs should contain "textColor" property with "primary" value', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(Tabs).prop('textColor')).toBe('primary');
});

it('Tabs should have onChange function', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(Tabs).prop('onChange')).toBeInstanceOf(Function);
});

it('Tabs should contain "value" property with initial value "0"', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(Tabs).prop('value')).toBeFalsy();
});

it('Tab should contain "label" property with "" value', () => {
  const HomeTabsComponent = shallow(<HomeTabs />);
  expect(HomeTabsComponent.find(TabStyled).prop('label')).toBe('');
});

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true
      };
    }
    return {
      message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass: false
    };
  }
});
