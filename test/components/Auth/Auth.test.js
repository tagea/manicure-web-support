import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from '../../../src/components/Auth';
import { HeaderStyled, BackgroundStyled } from '../../../src/globalStyled';
import { PaperStyled } from '../../../src/components/Auth/styled';

/* create Auth snapshot */
it('render Auth component', () => {
  const AuthComponent = shallow(<Auth />);
  expect(AuthComponent).toMatchSnapshot();
});

/* test for BackgroundStyled prop */
it('Auth as wrapper BackgroundStyled should contain value "container"', () => {
  const AuthComponent = shallow(<Auth />);
  expect(AuthComponent.find(BackgroundStyled).prop('container')).toBeTruthy();
});

/* test for PaperStyled container propery */
it('PaperStyled should contain "container" property', () => {
  const AuthComponent = shallow(<Auth />);
  expect(AuthComponent.find(PaperStyled).prop('container')).toBeTruthy();
});

/* test for PaperStyled direction propery */
it('PaperStyled should contain "direction" property width "column" value', () => {
  const AuthComponent = shallow(<Auth />);
  expect(AuthComponent.find(PaperStyled).prop('direction')).toEqual('column');
});

/* test for Input type */
it('Input type should be text and password', () => {
  const AuthComponent = shallow(<Auth />);
  const input = AuthComponent.find('Input').map(node => node.prop('type'));
  expect(input).toEqual(['text', 'password']);
});

/* test for Input error */
it('Input error should be password type', () => {
  const AuthComponent = shallow(<Auth />);
  const input = AuthComponent.find('Input').map(node => node.prop('error'));
  expect(input).toEqual([false, false]);
});

/* test Input functions */
it('Input username should have onChange function', () => {
  const AuthComponent = shallow(<Auth />);
  const input = AuthComponent.find('Input').first().prop('onChange');
  expect(input).toBeInstanceOf(Function);
});
it('Input password should have onChange function', () => {
  const AuthComponent = shallow(<Auth />);
  const input = AuthComponent.find('Input').last().prop('onChange');
  expect(input).toBeInstanceOf(Function);
});

/* test Button text */
it('Button should contain value for "text" property', () => {
  const AuthComponent = shallow(<Auth />);
  expect(AuthComponent.find('Button').prop('text')).not.toHaveLength(1);
});

/* test Button function */
it('Button should have onCLick function', () => {
  const AuthComponent = shallow(<Auth />);
  expect(AuthComponent.find('Button').prop('handleClick')).toBeInstanceOf(Function);
});
