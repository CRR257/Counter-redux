import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {

  render() {
    console.log(this.props.storedResults[0]);
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIcrementCounter}
        />
        <CounterControl
          label="Subtract"
          clicked={this.props.onSubtractCounter}
        />
        <CounterControl
          label="Add 10"
          clicked={this.props.onIncrementCounterBy5}
        />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounterBy5}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result:</button>
        <ul>
          {this.props.storedResults.map(storedResult => (
            <li
              key={storedResult.id}
              onClick={() => this.props.onDeleteResult(storedResult.id)}
            >
              {storedResult.value}
            </li>
          ))}
        </ul>
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
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)), // we split reducers
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// we connect the Counter container with ctr property & allow us to use the ctr property
