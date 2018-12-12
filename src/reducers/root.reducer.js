const initialState = {
  popularItems: [],
  searchResults: [],
  searchTerm: '',
  isSearchLoading: false,
  isSearchError: false,
  isPopularLoading: false,
  isPopularError: false,
  error: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
      return {
        ...state,
        isPopularLoading: true,
        isPopularError: false
      };
    case 'FETCH_POPULAR_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isPopularLoading: false
      };
    case 'FETCH_POPULAR_ERROR':
      return {
        ...state,
        ...action.payload,
        isPopularLoading: false,
        isPopularError: true
      };
    case 'SEARCH_PLACES':
      return {
        ...state,
        ...action.payload,
        isSearchLoading: true,
        isSearchError: false
      };
    case 'SEARCH_PLACES_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSearchLoading: false
      };
    case 'SEARCH_PLACES_ERROR':
      return {
        ...state,
        ...action.payload,
        isSearchLoading: false,
        isSearchError: true
      };
    case 'CLEAR_PLACES':
      return {
        ...state,
        searchResults: [],
        searchTerm: ''
      };
    default:
      return state;
  }
};

export default rootReducer;
