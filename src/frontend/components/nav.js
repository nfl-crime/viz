import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(state => ({ links: state.links }))(Nav);