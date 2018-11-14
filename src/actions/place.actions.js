import {
	FETCH_PLACES,
	FETCH_PLACES_SUCCESS,
	FETCH_PLACES_ERROR,
	SET_PLACE
} from '../types'

export function getVenues() {
	return async (dispatch, getState, { api }) => {
		function onSuccess(items) {
			dispatch({
				type: FETCH_PLACES_SUCCESS,
				payload: {
					placeItems: items
				}
			})
		}

		function onError(error) {
			dispatch({
				type: FETCH_PLACES_ERROR,
				error
			})
			return error
		}

		try {
			dispatch({
				type: FETCH_PLACES
			})
			console.log(getState())
			const place = getState().rootReducer.place
			console.log(place)
			const popular = await api({
				method: 'POST',
				url: '/places',
				data: {
					city: place.city,
					country: place.country
				}
			})
			onSuccess(popular.data)
		} catch (err) {
			onError(err)
		}
	}
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
		})
	}
}
