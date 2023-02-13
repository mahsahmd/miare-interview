import { FILTER_COURIER, FILTER_TRANSACTION_TYPE, GET_TRANSACTIONS } from './constants';

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
        case FILTER_TRANSACTION_TYPE:
            return {
                ...state,
                filters: {
                    courier: state.filters.courier,
                    transaction: action.payload
                }
            }
        case FILTER_COURIER:
            return {
                ...state,
                filters: {
                    courier: action.payload,
                    transaction: state.filters.transaction
                }
            }
        default:
            return state;
    }
}