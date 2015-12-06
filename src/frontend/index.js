import ReactDOM from 'react-dom';
import Root from './root';
import { createHistory } from 'history';
// required even though not used in file
import React from 'react';

ReactDOM.render(
  <Root history={ createHistory() } />,
  document.getElementById('container')
);
