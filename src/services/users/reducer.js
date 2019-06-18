import {
  FETCH_USER_SUCCESS,
  FETCH_USER_WAITING,
  LOGOUT
} from '../constants/ActionTypes';

const initState = {
  users: [],
  waiting: false,
  sizeOfUsers: 0,
  nextPageUsers: null,
  error: null
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        users: action.payload.users,
        sizeOfUsers: action.payload.count,
        nextPageUsers: action.payload.pagin.next
      });
    case FETCH_USER_WAITING:
      return Object.assign({}, state, { waiting: true });
    case LOGOUT:
      return { initState };
    default:
      return state;
  }
}
