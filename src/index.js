import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './fonts/OpenSans-Bold.ttf'
import './fonts/OpenSans-Light.ttf'
import './fonts/OpenSans-SemiBold.ttf'
import './fonts/OpenSans-Regular.ttf'
import './fonts/VAG-Rounded-Bold.ttf'

ReactDOM.render(
            <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
