import * as reducers from './reducers';
import * as redux from 'redux';
import * as router from 'connected-react-router';
import logger from 'redux-logger';

export function createStore(history) {
    return redux.createStore(
        router.connectRouter(history)(
            redux.combineReducers({
                ...reducers
            })
        ),
        redux.applyMiddleware(
            logger,
            router.routerMiddleware(history)
        )
    );
}
