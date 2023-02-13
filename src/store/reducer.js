import { FILTER_TRANSACTION, GET_TRANSACTIONS } from './constants';

const initialState = {
    allTransactions: [],
    filters: {
        transaction: '',
        courier: ''
    }
}

export const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                allTransactions: action.payload
            }
        case FILTER_TRANSACTION:
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }
}