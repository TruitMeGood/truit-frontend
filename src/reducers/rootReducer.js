import { mapToken } from '../config/config.json';

const initialState = {
  mapToken: mapToken,
  popularItems: [],
  placeItems: [],
  instaPosts: [],
  searchResults: [],
  searchTerm: '',
  isLoading: false,
  isError: false,
  error: {},
  place: {},
  venue: {},
  shouldDisplayNearbyVenues: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_POPULAR_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'FETCH_POPULAR_ERROR':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'SEARCH_PLACES':
      return {
        ...state,
        ...action.payload,
        isLoading: true,
        isError: false
      };
    case 'SEARCH_PLACES_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'SEARCH_PLACES_ERROR':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'CLEAR_PLACES':
      return {
        ...state,
        searchResults: [],
        searchTerm: ''
      };
    case 'SET_PLACE':
      return {
        ...state,
        ...action.payload
      };
    case 'FETCH_PLACES':
      return {
        ...state,
        ...action.payload,
        isLoading: true,
        isError: false
      };
    case 'FETCH_PLACES_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'FETCH_PLACES_ERROR':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'CLEAR_VENUES':
      return {
        ...state,
        placeItems: []
      };
    case 'SET_VENUE':
      return {
        ...state,
        ...action.payload
      };
    case 'FETCH_VENUE':
      return {
        ...state,
        ...action.payload,
        isLoading: true,
        isError: false
      };
    case 'FETCH_VENUE_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'FETCH_VENUE_ERROR':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'FETCH_FOURSQUARE':
      return {
        ...state,
        ...action.payload
      };
    case 'FETCH_FOURSQUARE_SUCCESS':
      return {
        ...state,
        ...action.payload
      };
    case 'FETCH_FOURSQUARE_ERROR':
      return {
        ...state,
        ...action.payload
      };
    case 'FETCH_INSTAGRAM':
      return {
        ...state,
        ...action.payload
      };
    case 'FETCH_INSTAGRAM_SUCCESS':
      return {
        ...state,
        ...action.payload
      };
    case 'FETCH_INSTAGRAM_ERROR':
      return {
        ...state,
        ...action.payload
      };
    case 'NEARBY_VENUES_VISIBLE':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default rootReducer;
