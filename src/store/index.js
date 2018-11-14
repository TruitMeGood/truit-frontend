import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from '../reducers'
import { api, insta } from '../api'

const history = createBrowserHistory()
const composeEnhancers = composeWithDevTools({})

const store = createStore(
	createRootReducer(history),
	composeEnhancers(
		applyMiddleware(
			thunk.withExtraArgument({ api, insta }),
			routerMiddleware(history)
		)
	)
)

export { store, history }
