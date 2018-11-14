import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { store, history } from './store';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import Place from './components/place';
import Venue from './components/place';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/places/:id" component={Place} />
          <Route path="/venues/:id" component={Venue} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
