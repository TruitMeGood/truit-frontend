import { MAP_LOADED } from '../types'

const initialState = {
    isLoaded: false
}

function mapReducer(state = initialState, action) {
	switch (action.type) {
		case MAP_LOADED:
			return {
				...state,
				isLoaded: true
			}
		default:
			return state
	}
}

export default mapReducer
