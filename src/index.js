import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { store, history } from './store';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import CookieConsent from 'react-cookie-consent';

import App from './App';
import Place from './components/place';
import Venue from './components/venue';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route name=":id" path="/places/:id" component={Place} />
          <Route
            name=":id"
            path="/venues/:id"
            render={props => <Venue {...props} />}
          />
          <Route render={() => <div>Miss</div>} />
        </Switch>
        <CookieConsent
          location="bottom"
          style={{
            background: 'white',
            color: 'black',
            textAlign: 'center',
            fontWeight: 200
          }}
          buttonStyle={{
            border: '1px solid black',
            borderRadius: '5px',
            background: 'white',
            color: 'black',
            fontSize: '13px',
            fontWeight: 600
          }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
