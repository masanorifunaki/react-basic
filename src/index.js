import React              from 'react';
import ReactDOM           from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App                              from './App';
import './App.css';
// applyMiddleware を新たに読み込む
import { applyMiddleware, createStore } from 'redux';
import thunk                            from 'redux-thunk';

import { Provider } from 'react-redux';
import rootReducer  from './reducers';

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
