import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import enhanceMapReducer from 'redux-map-gl';

import rootReducer from './root.reducer';
import placeReducer from './place.reducer';
import venueReducer from './venue.reducer';
import mapReducer from './map.reducer';

export default history =>
  combineReducers({
    map: enhanceMapReducer(mapReducer, {
      scrollZoom: false,
      dragPan: false,
      tap: false
    }),
    router: connectRouter(history),
    main: rootReducer,
    place: placeReducer,
    venue: venueReducer
  });
