import {
  SET_PLACE,
  FETCH_PLACE_VENUES,
  FETCH_PLACE_VENUES_SUCCESS,
  FETCH_PLACE_VENUES_ERROR,
  CLEAR_PLACES,
  FETCH_SPOTIFY,
  FETCH_SPOTIFY_SUCCESS,
  FETCH_SPOTIFY_ERROR
} from '../types';

const initialState = {
  isPlaceLoading: false,
  isPlaceError: false,
  isSpotifyError: false,
  isSpotifyLoading: false,
  place: {},
  placeVenuesItems: [],
  spotify: {}
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
    case FETCH_SPOTIFY:
      return {
        ...state,
        isSpotifyLoading: true,
        isSpotifyError: false
      };
    case FETCH_SPOTIFY_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isSpotifyLoading: false
      };
    case FETCH_SPOTIFY_ERROR:
      return {
        ...state,
        ...action.payload,
        isSpotifyError: false,
        isSpotifyLoading: true
      };
    case CLEAR_PLACES:
      return {
        ...state,
        placeVenuesItems: [],
        spotify: {}
      };
    default:
      return state;
  }
};

export default placeReducer;
