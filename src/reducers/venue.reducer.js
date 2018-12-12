const initialState = {
  instaPosts: [],
  isVenueLoading: false,
  isVenueError: false,
  isInstagramLoading: false,
  isInstagramError: false,
  isFoursquareLoading: false,
  isFoursquareError: false,
  venue: {},
  error: {}
};

const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VENUE':
      return {
        ...state,
        ...action.payload
      };
    case 'FETCH_VENUE':
      return {
        ...state,
        ...action.payload,
        isVenueLoading: true,
        isVenueError: false
      };
    case 'FETCH_VENUE_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isVenueLoading: false
      };
    case 'FETCH_VENUE_ERROR':
      return {
        ...state,
        ...action.payload,
        isVenueLoading: false,
        isVenueError: true
      };
    case 'FETCH_FOURSQUARE':
      return {
        ...state,
        ...action.payload,
        isFoursquareLoading: true,
        isFoursquareError: false
      };
    case 'FETCH_FOURSQUARE_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isFoursquareLoading: false
      };
    case 'FETCH_FOURSQUARE_ERROR':
      return {
        ...state,
        ...action.payload,
        isFoursquareLoading: false,
        isFoursquareError: true
      };
    case 'FETCH_INSTAGRAM':
      return {
        ...state,
        ...action.payload,
        isInstagramLoading: true,
        isInstagramError: false
      };
    case 'FETCH_INSTAGRAM_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isInstagramLoading: false
      };
    case 'FETCH_INSTAGRAM_ERROR':
      return {
        ...state,
        ...action.payload,
        isInstagramLoading: false,
        isInstagramError: true
      };
    default:
      return state;
  }
};

export default venueReducer;
