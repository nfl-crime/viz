import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <IndexLink to='/'>Home</IndexLink>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(state => ({ links: state.links }))(Nav);