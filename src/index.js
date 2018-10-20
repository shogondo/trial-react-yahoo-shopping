import './index.css';
import * as history from 'history';
import * as initializer from './initializer';
import * as serviceWorker from './serviceWorker';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';

const browserHistory = history.createBrowserHistory();
const store = initializer.createStore(browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
