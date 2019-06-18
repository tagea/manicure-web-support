import {
  AUTHENTICATED,
  AUTHENTICATION_ERROR,
  LOGOUT,
  LOGOUT_ERROR
} from '../constants/ActionTypes';
import { getAuthToken, sendAuthToken, stateLocalStorage, removeLocalStorage } from '../api';

export const signInAction = (username, password) => async (dispatch) => {
  try {
    removeLocalStorage();
    const token = await getAuthToken(username, password);
    dispatch({ type: AUTHENTICATED });
    stateLocalStorage(token); // set
  } catch (error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.message
    });
  }
};

export const signOutAction = () => async (dispatch) => {
  try {
    await sendAuthToken();
    removeLocalStorage();
    dispatch({ type: LOGOUT });
  } catch (error) {
    removeLocalStorage();
    dispatch({
      type: LOGOUT_ERROR,
      payload: error.message
    });
  }
};

// // note for future: add token check // //
export const stayInAction = () => (dispatch) => {
  try {
    const token = stateLocalStorage();
    if (token) {
      dispatch({ type: AUTHENTICATED });
    }
  } catch (error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error.message
    });
  }
};
