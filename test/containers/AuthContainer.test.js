import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { AuthContainer } from '../../src/containers/AuthContainer';

const initSetup = () => {
  const handleSubmit = jest.fn();
  const props = {
    stayIn: jest.fn(),
    signIn: jest.fn(),
    handleSubmit
  };
  const mockStore = configureStore();
  const store = mockStore({});
  const AuthContainerShallow = shallow(<AuthContainer store={store} {...props} />);
  const AuthContainerMount = mount(<AuthContainer store={store} {...props} />);

  return {
    AuthContainerShallow,
    AuthContainerMount
  };
};

it('render AuthContainer', () => {
  const { AuthContainerShallow } = initSetup();
  expect(AuthContainerShallow).toMatchSnapshot();
});

it('check username in store after onChange', () => {
  const { AuthContainerMount } = initSetup();
  const InputTest = AuthContainerMount.find('input').first();
  InputTest.simulate('change', { target: { name: 'username', value: 'user' } });
  expect(AuthContainerMount.state('username')).toEqual('user');
});

it('check password in store after onChange callback', () => {
  const { AuthContainerMount } = initSetup();
  const InputTest = AuthContainerMount.find('input').last();
  InputTest.simulate('change', { target: { name: 'password', value: '123' } });
  expect(AuthContainerMount.state('password')).toEqual('123');
});

it('check handleSubmit callback', () => {
  const { AuthContainerMount } = initSetup();
  const signInTest = AuthContainerMount.props().signIn;
  const ButtonTest = AuthContainerMount.find('button');
  ButtonTest.simulate('click');
  expect(signInTest.mock.calls.length).toEqual(1);
});
