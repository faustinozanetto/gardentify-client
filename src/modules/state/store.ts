import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import providers from './providers';

const enhancer = applyMiddleware(thunk);

export const store = createStore(providers, enhancer);
