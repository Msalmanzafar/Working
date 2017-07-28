import React from 'react';
import {render} from 'react-dom';
import Routes from './Routes';
// import {Provider} from 'react-redux';
// import store from './Store/store'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

render(
  // <Provider store={store}>
    <Routes />,
  // </Provider>,
  document.getElementById('root')
);
