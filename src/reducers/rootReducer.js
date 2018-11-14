const initialState = {
  popularItems: [],
  searchResults: [],
  searchTerm: '',
  isLoading: false,
  isError: false,
  error: {}
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
    default:
      return state;
  }
};

export default rootReducer;
