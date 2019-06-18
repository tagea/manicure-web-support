import {
  FETCH_SALON_SUCCESS,
  FETCH_SALON_WAITING,
  FETCH_SALON_FAILURE
} from '../constants/ActionTypes';
import { fetchSalon } from '../api';

export const fetchSalonAction = (page, size) => async (dispatch) => {
  dispatch({ type: FETCH_SALON_WAITING });
  try {
    const response = await fetchSalon(page, size);
    dispatch({
      type: FETCH_SALON_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALON_FAILURE,
      payload: error.message
    });
  }
};
