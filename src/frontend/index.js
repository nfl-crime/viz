// required even though not used in file
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import createBrowserHistory from 'history/lib/createBrowserHistory'

ReactDOM.render(
  <Root history={ createBrowserHistory() } />,
  document.getElementById('container')
);
