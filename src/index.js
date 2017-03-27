import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory, Route } from 'react-router';
import { Provider } from 'react-redux';

import store from './config/store';

import Root from './pages/Root';
import Authors from './pages/Authors';
import Books from './pages/Books';

render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={Root}>
          <Route path='/' component={Authors} />
          <Route path='/books' component={Books} />
        </Route>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
//
// if (module.hot) {
//   module.hot.accept('./routes/index.js', () => {
//     const nextRoutes = require('./routes/index.js').default;
//     renderApp({store, client, routes: nextRoutes});
//   });
// }