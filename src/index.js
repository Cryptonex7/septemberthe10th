import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/index.css';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
