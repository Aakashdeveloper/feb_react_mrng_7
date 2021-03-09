import  React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/storefile';
import Routing from './component/Routing';

//view is connected to store
ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>,
    document.getElementById('root')
)