import {
  FETCH_POPULAR,
  FETCH_POPULAR_SUCCESS,
  FETCH_POPULAR_ERROR
} from '../types'

export function getPopularItems() {
  return async (dispatch, getState, api) => {
    function onSuccess(items) {
      dispatch({
        type: FETCH_POPULAR_SUCCESS,
        payload: {
          popularItems: items,
        }
      })
    }

    function onError(error) {
      dispatch({
        type: FETCH_POPULAR_ERROR,
        error
      })
      return error
    }

    try {
      dispatch({
        type: FETCH_POPULAR
      })
      const popular = await api({
        method: 'GET',
        url: '/popular'
      })
      onSuccess(popular.data)
    } catch (err) {
      onError(err)
    }
  }
}