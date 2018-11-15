import { MAP_LOADED } from '../types'

const initialState = {
    isLoaded: false,
    mapToken: "pk.eyJ1IjoiZHJwZXBwIiwiYSI6ImNqbmQ0b2hvdjAzeHIzd280dHdidWdrdHAifQ.s9MK81QnHaF-dJ674NNTyg"
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
