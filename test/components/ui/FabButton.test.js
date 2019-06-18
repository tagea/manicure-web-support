import React from 'react';
import { shallow } from 'enzyme';
import { FabButton } from '../../../src/ui/FabButton';
import { FabButtonStyled } from '../../../src/ui/FabButton/styled';

it('render FabButton', () => {
  const FabButtonComponent = shallow(<FabButton />);
  expect(FabButtonComponent.find(FabButtonStyled)).toMatchSnapshot();
});

it('FabButton should contain "size" with value "meduim"', () => {
  const FabButtonComponent = shallow(<FabButton />);
  expect(FabButtonComponent.find(FabButtonStyled).prop('size')).toBe('medium');
});

it('FabButton should contain "color" with value "secondary or default or primary"', () => {
  const FabButtonComponent = shallow(<FabButton />);
  expect(FabButtonComponent.find(FabButtonStyled).prop('color')).toMatch(/default|secondary|primary/);
});

it('FabButton should have onCLick function', () => {
  const ToolbarComponent = shallow(<FabButton />);
  expect(ToolbarComponent.find(FabButtonStyled).prop('onClick')).toBeInstanceOf(Function);
});

it('FabButton should contain img', () => {
  const ToolbarComponent = shallow(<FabButton />);
  expect(ToolbarComponent.find('img')).not.toHaveLength(0);
});

it('img should contain width', () => {
  const ToolbarComponent = shallow(<FabButton />);
  expect(ToolbarComponent.find('img').prop('width')).not.toBe('');
});

it('img should contain height', () => {
  const ToolbarComponent = shallow(<FabButton />);
  expect(ToolbarComponent.find('img').prop('height')).not.toBe('');
});
