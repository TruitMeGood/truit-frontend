import {
  SET_PLACE,
  FETCH_PLACE_VENUES,
  FETCH_PLACE_VENUES_SUCCESS,
  FETCH_PLACE_VENUES_ERROR,
  CLEAR_PLACES
} from '../types';

const initialState = {
  isPlaceLoading: false,
  isPlaceError: false,
  place: {},
  placeVenuesItems: []
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_PLACE_VENUES:
      return {
        ...state,
        ...action.payload,
        isPlaceLoading: true,
        isPlaceError: false
      };
    case FETCH_PLACE_VENUES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isPlaceLoading: false
      };
    case FETCH_PLACE_VENUES_ERROR:
      return {
        ...state,
        ...action.payload,
        isPlaceLoading: false,
        isPlaceError: true
      };
    case CLEAR_PLACES:
      return {
        ...state,
        placeVenuesItems: []
      };
    default:
      return state;
  }
};

export default placeReducer;
