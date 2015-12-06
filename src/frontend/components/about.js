import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>About!</h1>
    );
  }
}

export default connect(state => ({ }))(About);