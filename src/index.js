import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
