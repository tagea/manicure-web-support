import auth from '../../src/services/auth/reducer';
import * as types from '../../src/services/constants/ActionTypes';

it('should return the initial state for AUTHENTICATED', () => {
  expect(auth(undefined, { type: types.AUTHENTICATED })).toMatchSnapshot();
});

it('should handle AUTHENTICATED', () => {
  expect(auth({}, {
    type: types.AUTHENTICATED,
    authenticated: true,
    error: false
  })).toEqual({
    authenticated: true,
    error: false,
    status: null
  });
});

it('should return the initial state for AUTHENTICATION_ERROR', () => {
  expect(auth(undefined, { type: types.AUTHENTICATION_ERROR })).toMatchSnapshot();
});

it('should return the initial state for LOGOUT', () => {
  expect(auth(undefined, { type: types.LOGOUT })).toMatchSnapshot();
});

it('should handle LOGOUT', () => {
  expect(auth({}, {
    type: types.LOGOUT
  })).toEqual({
    authenticated: false,
    error: false,
    status: null
  });
});

it('should return the initial state for LOGOUT_ERROR', () => {
  expect(auth(undefined, { type: types.LOGOUT_ERROR })).toMatchSnapshot();
});
