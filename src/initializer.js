import * as reducers from './reducers';
import * as redux from 'redux';
import * as router from 'connected-react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export function createStore(history) {
    return redux.createStore(
        router.connectRouter(history)(
            redux.combineReducers({
                ...reducers
            })
        ),
        redux.applyMiddleware(
            logger,
            thunk,
            router.routerMiddleware(history)
        )
    );
}
