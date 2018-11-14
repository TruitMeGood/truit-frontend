import {
  FETCH_VENUE,
  FETCH_VENUE_SUCCESS,
  FETCH_VENUE_ERROR,
  SET_VENUE,
  FETCH_INSTAGRAM,
  FETCH_INSTAGRAM_SUCCESS,
  FETCH_INSTAGRAM_ERROR
} from '../types';

export function getDetails() {
  return async (dispatch, getState, { api }) => {
    function onSuccess(venue) {
      dispatch({
        type: FETCH_VENUE_SUCCESS,
        payload: {
          venue: venue
        }
      });
    }

    function onError(error) {
      dispatch({
        type: FETCH_VENUE_ERROR,
        payload: {
          error
        }
      });
      return error;
    }

    try {
      dispatch({
        type: FETCH_VENUE
      });
      const place = getState().rootReducer.venue;
      const venue = await api({
        method: 'POST',
        url: `/place/${place.id}`,
        data: {
          placeId: place.id,
          placeOnly: true
        }
      });
      onSuccess(venue.data);
    } catch (err) {
      onError(err);
    }
  };
}

export function setVenue(venueId, venueName) {
  return dispatch => {
    return dispatch({
      type: SET_VENUE,
      payload: {
        venue: {
          id: venueId,
          name: venueName
        }
      }
    });
  };
}

export function getInstagram() {
  return async (dispatch, getState, { api }) => {
    function onSuccess(items) {
      dispatch({
        type: FETCH_INSTAGRAM_SUCCESS,
        payload: {
          instaPosts: items
        }
      });
    }

    function onError(error) {
      dispatch({
        type: FETCH_INSTAGRAM_ERROR,
        payload: {
          error
        }
      });
      return error;
    }

    try {
      dispatch({
        type: FETCH_INSTAGRAM,
        payload: {
          instaPosts: []
        }
      });
      const place = getState().rootReducer.venue;
      const venues = await api({
        method: 'POST',
        url: '/insta',
        data: {
          title: place.title,
          latitude: place.coordinates.lat,
          longitude: place.coordinates.lng
        }
      });
      const mediaArray = venues.data.map(venue => ({
        id: venue.node.id,
        img: venue.node.thumbnail_src,
        title: 'insta'
      }));
      onSuccess(mediaArray);
    } catch (err) {
      onError(err);
    }
  };
}
