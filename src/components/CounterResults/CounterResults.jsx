import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import "./CounterResults.css";

class counterResults extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onStoreResult(this.props.ctr)}
          className="showresults"
        >
          Show Result * 2
        </button>
        <ul className="container">
          <span className="container-title">Results</span>
          {this.props.storedResults.map(storedResult => (
            <li
              key={storedResult.id}
              onClick={() => this.props.onDeleteResult(storedResult.id)}
              className="container-result"
            >
              => {storedResult.value}
              <span class="container-result__tooltiptext">Delete me</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStoreResult: result => dispatch(actionCreators.storeResult(result)), // we split reducers
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(counterResults);
