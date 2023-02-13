import { FILTER_TRANSACTION, GET_TRANSACTIONS } from './constants';

const initialState = {
    allTransactions: [],
}

export const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                allTransactions: action.payload
            }
        default:
            return state;
    }
}