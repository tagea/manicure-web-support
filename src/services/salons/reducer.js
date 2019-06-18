import {
  FETCH_SALON_SUCCESS,
  FETCH_SALON_WAITING,
  FETCH_SALON_FAILURE,
  LOGOUT
} from '../constants/ActionTypes';

const initState = {
  salons: [],
  waiting: false,
  sizeOfSalons: 0,
  nextPageSalons: null,
  error: null
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_SALON_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        salons: action.payload.salons,
        sizeOfSalons: action.payload.count,
        nextPageSalons: action.payload.pagin.next
      });
    case FETCH_SALON_WAITING:
      return Object.assign({}, state, { waiting: true });
    case FETCH_SALON_FAILURE:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { initState };
    default:
      return state;
  }
}
