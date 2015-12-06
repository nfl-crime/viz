import React from 'react';
import { fetchShouts } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Nav } from './';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchShouts());
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        <h1>Shouts</h1>
        <ul>
          { this.props.shouts.map((s, i) => <li key={i}>{s}</li>) }
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ shouts: state.shouts }))(Application);