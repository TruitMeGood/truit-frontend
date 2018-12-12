import { MAP_LOADED, NEARBY_VENUES_VISIBLE } from '../types';

export function loadMap() {
  return dispatch => {
    dispatch({
      type: MAP_LOADED
    });
  };
}

export function dispatchNearbyVenues() {
  return function(dispatch) {
    dispatch({
      type: NEARBY_VENUES_VISIBLE,
      payload: {
        shouldDisplayNearbyVenues: true
      }
    });
  };
}
