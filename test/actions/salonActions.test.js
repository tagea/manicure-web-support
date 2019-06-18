import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../../src/services/constants/ActionTypes';
import { fetchSalonAction } from '../../src/services/salons/actions';
import { getAuthToken, stateLocalStorage } from '../../src/services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});
const auth = { username: 'a', password: 'a' };

beforeEach(() => store.clearActions());

it('Dispatches the correct fetchUserAction and payload', () => (
  store.dispatch(fetchSalonAction()).then(() => (
    expect(store.getActions()).toMatchSnapshot()
  ))
));

it('error fetch user list', () => {
  const expectedActions = [
    {
      type: types.FETCH_SALON_WAITING
    },
    {
      type: types.FETCH_SALON_FAILURE,
      payload: 'Request failed with status code 401'
    }
  ];
  return store.dispatch(fetchSalonAction()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it('correct fetch user list', async () => {
  // create authenticate to get token
  const token = await getAuthToken(auth.username, auth.password);
  stateLocalStorage(token);
  // check user list
  return store.dispatch(fetchSalonAction(1, 1)).then(() => {
    expect(store.getActions()).toMatchObject([
      { type: 'FETCH_SALON_WAITING' },
      { type: 'FETCH_SALON_SUCCESS' }
    ]);
  });
});
