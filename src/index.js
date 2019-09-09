import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
