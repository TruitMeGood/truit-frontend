import {
	FETCH_PLACES,
	FETCH_PLACES_SUCCESS,
	FETCH_PLACES_ERROR
} from '../types'

export function getPlaces(city, country) {
	return async (dispatch, getState, api) => {
		function onSuccess(items) {
			dispatch({
				type: FETCH_PLACES_SUCCESS,
				payload: {
					placesItems: items
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
			const popular = await api({
				method: 'POST',
                url: '/places',
                data: {
                    city,
                    country
                }
			})
			onSuccess(popular.data)
		} catch (err) {
			onError(err)
		}
	}
}
