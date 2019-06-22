import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// @ts-ignore
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);


serviceWorker.unregister();
