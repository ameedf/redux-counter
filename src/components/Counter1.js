import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter1 extends Component {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.internalCounter}</h1>
        <button onClick={() => this.props.increment()}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  internalCounter: state.counter,
})

const mapDispatchToProp = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'ADD' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter1);