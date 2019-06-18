import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../../src/ui/Button';
import { ButtonStyled } from '../../../src/ui/Button/styled';

/* create Button snapshot */
it('render Button styled-component with', () => {
  const ButtonComponent = shallow(<Button />);
  expect(ButtonComponent.find(ButtonStyled)).toMatchSnapshot();
});

/* test for Button "variant" */
it('should render contained Button', () => {
  const ButtonComponent = shallow(<Button variant="contained" />);
  expect(ButtonComponent.find(ButtonStyled).prop('variant')).toEqual('contained');
});

/* test for Button color should be primary or secondary */
it('check value for Button "color"', () => {
  const ButtonComponent = shallow(<Button />);
  expect(ButtonComponent.find(ButtonStyled).prop('color')).toMatch(/primary|secondary/);
});

/* test for Button "size" should be "small", "medium", "large" */
it('check value for Button size', () => {
  const ButtonComponent = shallow(<Button />);
  expect(ButtonComponent.find(ButtonStyled).prop('size')).toMatch(/small|medium|large/);
});

/* test handleClick for Button is Function */
it('should click Button', () => {
  const ButtonComponent = shallow(<Button />);
  expect(ButtonComponent.prop('onClick')).toBeInstanceOf(Function);
});
