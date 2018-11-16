import { createStore, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from '../reducers';
import { api } from '../api';

const history = createHashHistory({
  hashType: 'slash'
})
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  createRootReducer(history),
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ api }), routerMiddleware(history))
  )
);

export { store, history };
