import { createStore, combineReducers } from 'redux';

import authors from './data/authors';

import authorsReducer from '../../pages/Authors/reducers';

const reducers = combineReducers({
  authors: authorsReducer
});

const initialState = {
  authors
};

export default createStore(reducers, initialState);
