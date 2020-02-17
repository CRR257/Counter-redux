import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.INCREMENT_BY:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT_BY:
      return {
        ...state,
        counter: state.counter - action.value
      };
  }
  return state;
};

export default reducer;
