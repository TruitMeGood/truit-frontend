import { mapToken } from '../config/config.json';

import {
  MAP_LOADED,
  NEARBY_VENUES_VISIBLE,
  CLEAR_DISPLAY_NEARBY
} from '../types';

const initialState = {
  isLoaded: false,
  shouldDisplayNearbyVenues: false,
  mapToken: mapToken
};

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case MAP_LOADED:
      return {
        ...state,
        isLoaded: true
      };
    case CLEAR_DISPLAY_NEARBY:
      return {
        ...state,
        shouldDisplayNearbyVenues: false
      };
    case NEARBY_VENUES_VISIBLE:
      return {
        ...state,
        shouldDisplayNearbyVenues: true
      };
    default:
      return state;
  }
}

export default mapReducer;
