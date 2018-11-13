const initialState = {
  popularItems: [],
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
    default:
      return state;
  }
};

export default rootReducer;
