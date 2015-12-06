import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hey!</h1>
    );
  }
}

export default connect(state => ({ }))(Home);