import {
  FETCH_PLACE_VENUES,
  FETCH_PLACE_VENUES_SUCCESS,
  FETCH_PLACE_VENUES_ERROR,
  SET_PLACE,
  CLEAR_VENUES
} from '../types';

export function getVenues() {
  return async (dispatch, getState, { api }) => {
    function onSuccess(items) {
      dispatch({
        type: FETCH_PLACE_VENUES_SUCCESS,
        payload: {
          placeVenuesItems: items,
          instaPosts: []
        }
      });
    }

    function onError(error) {
      dispatch({
        type: FETCH_PLACE_VENUES_ERROR,
        payload: {
          error
        }
      });
      return error;
    }

    try {
      dispatch({
        type: FETCH_PLACE_VENUES
      });
      const place = getState().place.place;
      const popular = await api({
        method: 'POST',
        url: `/places/${place.city}_${place.country}`,
        data: {
          city: place.city,
          country: place.country
        }
      });
      onSuccess(popular.data);
    } catch (err) {
      onError(err);
    }
  };
}

export function setPlace(placeId, city, country) {
  return dispatch => {
    return dispatch({
      type: SET_PLACE,
      payload: {
        place: {
          placeId,
          city,
          country
        }
      }
    });
  };
}

export function clearVenues() {
  return dispatch => {
    return dispatch({
      type: CLEAR_VENUES
    });
  };
}
