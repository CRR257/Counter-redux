import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from '../../store/actions/actions';

class Counter extends Component {
  // state = {
  //   counter: 0
  // };

  // counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case "inc":
  //       this.setState(prevState => {
  //         return { counter: prevState.counter + 1 };
  //       });
  //       break;
  //     case "dec":
  //       this.setState(prevState => {
  //         return { counter: prevState.counter - 1 };
  //       });
  //       break;
  //     case "add":
  //       this.setState(prevState => {
  //         return { counter: prevState.counter + value };
  //       });
  //       break;
  //     case "sub":
  //       this.setState(prevState => {
  //         return { counter: prevState.counter - value };
  //       });
  //       break;
  //   }
  // };

  render() {
    console.log(this.props.storedResults[0]);
    return (
      <div>
        {/* <CounterOutput value={this.state.counter} /> */}
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          //   clicked={() => this.counterChangedHandler("inc")}
          clicked={this.props.onIcrementCounter}
        />
        <CounterControl
          label="Subtract"
          //   clicked={() => this.counterChangedHandler("dec")}
          clicked={this.props.onSubtractCounter}
        />
        <CounterControl
          label="Add 10"
          //   clicked={() => this.counterChangedHandler("add", 5)}
          clicked={this.props.onIncrementCounterBy5}
        />
        <CounterControl
          label="Subtract 15"
          //   clicked={() => this.counterChangedHandler("sub", 5)}
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
    // ctr: state.counter,
    ctr: state.ctr.counter, // because we combinedReducers in index.js

     /* give us the global state counter's value managed by redux (in reducer.js),
        and store in the property name 'ctr' (and then we can use to the return) */
    // storedResults: state.results
    storedResults: state.res.results

  };
};

const mapDispatchToProps = dispatch => {
  // it defines witch kind of action we want to dispatch in this container
  return {
    onIcrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT }),
    onIncrementCounterBy5: () => dispatch({ type: actionTypes.INCREMENT_BY, value: 10 }),
    onSubtractCounterBy5: () => dispatch({ type: actionTypes.SUBTRACT_BY, value: 15 }),
    // onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }), // we split reducers
    onDeleteResult: id => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// connect is a function that returns a high order component
// we connect the Counter container with ctr property & allow us to use the ctr property
