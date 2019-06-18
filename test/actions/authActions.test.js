import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../../src/services/constants/ActionTypes';
import { signInAction, signOutAction } from '../../src/services/auth/actions';
import { getAuthToken, stateLocalStorage } from '../../src/services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});
const auth = { username: 'a', password: 'a' };

beforeEach(() => store.clearActions());

it('Dispatches the correct signInAction and payload', () => (
  store.dispatch(signInAction(auth.username, auth.password)).then(() => (
    expect(store.getActions()).toMatchSnapshot()
  ))
));

it('creates AUTHENTICATED when get auth token from server', () => {
  const expectedActions = [{ type: types.AUTHENTICATED }];

  return store.dispatch(signInAction(auth.username, auth.password)).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it('creates AUTHENTICATION_ERROR when get auth token with error', () => {
  const expectedActions = [{
    type: types.AUTHENTICATION_ERROR,
    payload: 'Request failed with status code 401'
  }];

  return store.dispatch(signInAction('', '')).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it('creates LOGOUT action', async () => {
  // create authenticate to get token
  const token = await getAuthToken(auth.username, auth.password);
  stateLocalStorage(token);

  const expectedActions = [{ type: types.LOGOUT }];
  return store.dispatch(signOutAction()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it('creates LOGOUT_ERROR when send token for logout with error', () => {
  const expectedActions = [{
    type: types.LOGOUT_ERROR,
    payload: 'Request failed with status code 401'
  }];
  return store.dispatch(signOutAction()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
