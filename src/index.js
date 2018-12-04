import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import routes from './common/routes';
import { Provider } from 'react-redux';
import rootReducer from './common/reducers';   //reducer
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>
    , document.getElementById('root'));
registerServiceWorker(); 
