import React from "react";
import { connect } from "react-redux";
import "./ShowFinalResult.css";

const showResults = props => {
  return (
    <div className="finalResult">
      <h3>Total Results => {props.ctr}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter
  };
};

export default connect(mapStateToProps)(showResults);
