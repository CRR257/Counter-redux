import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import * as actionCreators from '../../store/actions/index';
import ShowFinalResult from "../../components/ShowFinalResult/ShowFinalResult";
import CounterResults from "../../components/CounterResults/CounterResults";

class Counter extends Component {
  render() {
    return (
      <div>
        <ShowFinalResult />
        <CounterControl
          label="Increment 1"
          clicked={this.props.onIcrementCounter}
        />
        <CounterControl
          label="Subtract 1"
          clicked={this.props.onSubtractCounter}
        />
        <CounterControl
          label="Increment 10"
          clicked={this.props.onIncrementCounterBy5}
        />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounterBy5}
        />
        <hr />
        <CounterResults />
      </div>
    );
  }
}

const mapStateToProps = state => {
  /* it defines how the state managed by redux should be 
    mapped to props we can use in this container */
  return {
    ctr: state.ctr.counter, // because we combinedReducers in index.js
     // give us the global state counter's value managed by redux 
    storedResults: state.res.results

  };
};

const mapDispatchToProps = dispatch => {
  // it defines witch kind of action we want to dispatch in this container
  return {
    onIcrementCounter: () => dispatch(actionCreators.increment()),
    onSubtractCounter: () => dispatch(actionCreators.subtract()),
    onIncrementCounterBy5: () => dispatch(actionCreators.incrementBy(10)),
    onSubtractCounterBy5: () => dispatch(actionCreators.substractBy(15)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// we connect the Counter container with ctr property & allow us to use the ctr property
