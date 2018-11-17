import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import enhanceMapReducer from 'redux-map-gl';

import mapReducer from './mapReducer';
import rootReducer from './rootReducer';

export default history =>
  combineReducers({
    map: enhanceMapReducer(mapReducer, {
      scrollZoom: false,
      dragPan: false
    }),
    router: connectRouter(history),
    rootReducer
  });
