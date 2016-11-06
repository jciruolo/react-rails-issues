import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import issuesApp from './reducers/issuesApp';
import {fetchIssues} from './actions/actions';

require('normalize.css');
require('./sass/main.scss');

let store = createStore(
  issuesApp,
  applyMiddleware(
    thunkMiddleware
  )
);

render((
  <Provider store={store}>
    <App />
  </Provider>
  ),
  document.getElementById('app')
);

store.dispatch(fetchIssues());