import {
  AUTHENTICATED,
  AUTHENTICATION_ERROR,
  UNAUTHENTICATION,
  LOGOUT,
  LOGOUT_ERROR
} from '../constants/ActionTypes';

const initState = {
  authenticated: false,
  error: false,
  status: null
};

export default function auth(state = {}, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...initState, authenticated: true, error: false };
    case AUTHENTICATION_ERROR:
      return { ...initState, error: true, status: action.payload };
    case UNAUTHENTICATION:
      return { ...initState, authenticated: false };
    case LOGOUT:
      return { ...initState, authenticated: false };
    case LOGOUT_ERROR:
      return { ...initState, status: action.payload };
    default:
      return state;
  }
}
