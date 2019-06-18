import {
  FETCH_USER_SUCCESS,
  FETCH_USER_WAITING,
  UNAUTHENTICATION
} from '../constants/ActionTypes';
import { fetchUser, removeLocalStorage } from '../api';

export const fetchUserAction = (page, size) => async (dispatch) => {
  dispatch({ type: FETCH_USER_WAITING });
  try {
    const response = await fetchUser(page, size);
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    removeLocalStorage();
    dispatch({
      type: UNAUTHENTICATION,
      payload: error.message
    });
  }
};
