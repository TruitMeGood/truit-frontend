import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import rootReducer from './rootReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    rootReducer
  });
