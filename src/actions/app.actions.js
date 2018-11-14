import {
  FETCH_POPULAR,
  FETCH_POPULAR_SUCCESS,
  FETCH_POPULAR_ERROR,
  SEARCH_PLACES,
  SEARCH_PLACES_SUCCESS,
  SEARCH_PLACES_ERROR,
  CLEAR_PLACES
} from '../types';

import { filterGeos } from './utils.js';

export function getPopularItems() {
  return async (dispatch, getState, { api }) => {
    function onSuccess(items) {
      dispatch({
        type: FETCH_POPULAR_SUCCESS,
        payload: {
          popularItems: items
        }
      });
    }

    function onError(error) {
      dispatch({
        type: FETCH_POPULAR_ERROR,
        error
      });
      return error;
    }

    try {
      dispatch({
        type: FETCH_POPULAR
      });
      const popular = await api({
        method: 'GET',
        url: '/popular'
      });
      onSuccess(popular.data);
    } catch (err) {
      onError(err);
    }
  };
}

export function searchPlaces(keyword) {
  return async (dispatch, getState, { api }) => {
    function onSuccess(items) {
      const geos = items.geos ? filterGeos(items.geos) : [];
      dispatch({
        type: SEARCH_PLACES_SUCCESS,
        payload: {
          searchResults: geos
        }
      });
    }

    function onError(error) {
      dispatch({
        type: SEARCH_PLACES_ERROR,
        error
      });
      return error;
    }

    try {
      dispatch({
        type: SEARCH_PLACES,
        payload: {
          searchTerm: keyword,
          placesItem: []
        }
      });
      const search = await api({
        method: 'POST',
        url: `/search`,
        data: {
          keyword: keyword
        }
      });
      onSuccess(search.data);
    } catch (err) {
      onError(err);
    }
  };
}

export function clearPlaces() {
  return dispatch => {
    return dispatch({
      type: CLEAR_PLACES
    });
  };
}
