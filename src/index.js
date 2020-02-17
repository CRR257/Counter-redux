import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import resultReducer from './store/reducers/result';
import counterReducer from './store/reducers/counter';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
});

// Middleware
const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] Dispatching", action);
            const result = next(action);
            console.log("[Middleware] next state", store.getState())
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


// Provider inject Store into react components
// CombineReducers helper merges every reducer into one reducer