import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducers/mainReducer';

//reducer connected to store
let store = createStore(reducer,applyMiddleware(logger,promiseMiddleware));

export default store