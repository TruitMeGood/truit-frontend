import { MAP_LOADED } from '../types'

export function loadMap() {
    return dispatch => {
        dispatch({
            type: MAP_LOADED
        })
    }
}