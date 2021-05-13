import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './../CombineReducers';

const middleware = [thunk];
if (process.env.NODE_ENV === `development`) {
    middleware.push(createLogger());
}
let composeEnhancers = null;
if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose

}

const Store = createStore(
    reducers,
    undefined,
    composeEnhancers
        ? composeEnhancers(
            applyMiddleware(...middleware)
        )
        :
        applyMiddleware(...middleware)

)

export { Store };