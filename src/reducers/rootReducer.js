const initialState = {
  mapToken: "pk.eyJ1IjoiZHJwZXBwIiwiYSI6ImNqbmQ0b2hvdjAzeHIzd280dHdidWdrdHAifQ.s9MK81QnHaF-dJ674NNTyg",
  popularItems: [],
  placeItems: [],
  instaPosts: [],
  searchResults: [],
  searchTerm: '',
  isLoading: false,
  isError: false,
  error: {},
  place: {},
  venue: {}
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
    case 'FETCH_INSTAGRAM':
      return {
        ...state,
        ...action.payload,
        isLoading: true,
        isError: false
      };
    case 'FETCH_INSTAGRAM_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case 'FETCH_INSTAGRAM_ERROR':
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
