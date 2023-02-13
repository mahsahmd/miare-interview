import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './reducer';

const reducer = combineReducers({
    transactions: transactionsReducer
});
const store = configureStore({
    reducer
});
export default store;
