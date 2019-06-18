import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../../../src/ui/Input';
import { InputStyled } from '../../../src/ui/Input/styled';

/* create Input snapshot */
it('render Input styled-component', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled)).toMatchSnapshot();
});

/* test for Input variant */
it('should render Input with "outlined" style', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled).prop('variant')).toEqual('outlined');
});

/* test for Input margin */
it('should render Input "margin" propery width "none", "normal" or "dense" value', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled).prop('margin')).toMatch(/none|dense|normal/);
});

/* test for Input size fullWidth */
it('should reneder Input width "fillWidth"', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled).prop('fullWidth')).toBeTruthy();
});

/* check Input id value */
it('Input "id" propery should be string type', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled).prop('id')).toEqual(expect.stringContaining(''));
});

/* check Input label value */
it('Input "label" propery should be string type', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled).prop('label')).toEqual(expect.stringContaining(''));
});

/* check Input name value */
it('Input "name" propery should be string type', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled).prop('name')).toEqual(expect.stringContaining(''));
});

/* check Input type value */
it('Input "type" propery should be string type', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled).prop('type')).toEqual(expect.stringContaining(''));
});

/* check Input error property */
it('Input "error" property should be bool', () => {
  const InputComponent = shallow(<Input />);
  expect(InputComponent.find(InputStyled).prop('error')).toBeFalsy();
});
