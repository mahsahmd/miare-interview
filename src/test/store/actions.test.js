import { setCourierFilter, setTransactionFilter } from "../../store/actions";


test('selecting a filter sets the filter state accordingly', () => {
    const filter = 'payments';
    const action = {
        type: 'FILTER_TRANSACTION_TYPE',
        payload: filter
    }
    expect(setTransactionFilter(filter)).toEqual(action)

});


test('changing the courier input will set the courier state', () => {
    const courier = 'test';
    const action = {
        type: 'FILTER_COURIER',
        payload: courier
    }
    expect(setCourierFilter(courier)).toEqual(action)

})