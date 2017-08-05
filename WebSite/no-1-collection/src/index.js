import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import {render} from 'react-dom';
import Routes from './Routes';
import {Provider} from 'react-redux';
import stores from './Store/store'


render(
  <Provider store={stores}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
