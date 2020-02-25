import * as actionTypes from "../../../store/actions/actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const subtract = () => {
  return {
    type: actionTypes.SUBTRACT,
  };
};

export const incrementBy = value => {
  return {
    type: actionTypes.INCREMENT_BY,
    value: value
  };
};

export const substractBy = value => {
  return {
    type: actionTypes.SUBTRACT_BY,
    value: value
  };
};
