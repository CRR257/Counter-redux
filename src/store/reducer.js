// SPLIT reducers in Counter.js and result.js


// import * as actionTypes from './actions';

// const initialState = {
//   counter: 0,
//   results: []
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 1
//       };
//     case actionTypes.SUBTRACT:
//       return {
//         ...state,
//         counter: state.counter - 1
//       };
//     case actionTypes.INCREMENT_BY:
//       return {
//         ...state,
//         counter: state.counter + action.value
//       };
//     case actionTypes.SUBTRACT_BY:
//       return {
//         ...state,
//         counter: state.counter - action.value
//       };
//     case actionTypes.STORE_RESULT:
//       return {
//         ...state,
//         results: state.results.concat({id: new Date(), value: state.counter })
//         // concat returns a new array: original array + argument we add to concat
//         // push manipulates original value 
//       };
//     case actionTypes.DELETE_RESULT:
//         // const id = 2;
//         // const newArray = [...state.results];
//         // newArray.splice(id, 1)
//         // filter return a new array
//         const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
//         return {
//             ...state,
//             // results: newArray
//             results: updatedArray
//         } 
//   }
//   return state;
// };

// export default reducer;

// /* do:
// case 'INCREMENT':
//     const newState = Object.assign({}, state);
//     newState.counter = state.counter + 1;
//     return newState


// is the same:

// ...state
// state: state.counter + 1:

// */
