import { transactionsReducer } from "../../store/reducer";

describe('transactionReducer', () => {
    it('should handle FILTER_TRANSACTION_TYPE action', () => {
        const filter = 'payments';
        const action = {
            type: 'FILTER_TRANSACTION_TYPE',
            payload: filter
        }
        const prevState = {
            allTransactions: [],
            filters: {
                transaction: '',
                courier: ''
            }
        }
        const newState = transactionsReducer(prevState, action);
        expect(newState.filters.transaction).toEqual(filter)

    });
    it('should handle FILTER_COURIER action', () => {
        const courier = 'test';
        const action = {
            type: 'FILTER_COURIER',
            payload: courier
        }
        const prevState = {
            allTransactions: [],
            filters: {
                transaction: '',
                courier: ''
            }
        }
        const newState = transactionsReducer(prevState, action);
        expect(newState.filters.courier).toEqual(courier)

    })
})