import React, { PropTypes } from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Application, Home, About } from './components';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(thunk)(createStore);
const store = finalCreateStore(reducer);

export default class Root extends React.Component {
  static propTypes() {
    return {
      history: PropTypes.object.isRequired
    };
  }
  render() {
    const { history } = this.props;
    return (
      <Provider store={ store }>
        <Router history={ history }>
          <Route path='/' component={ Application }>
            <IndexRoute component={ Home } />
            <Route name='about' path='about' component={ About } />
          </Route>
        </Router>
      </Provider>
    );
  }
}
