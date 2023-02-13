import { FILTER_COURIER, FILTER_TRANSACTION_TYPE, GET_TRANSACTIONS } from "./constants"


export const getTransactions = (data) => {
    return {
        type: GET_TRANSACTIONS,
        payload: data
    }
}

export const setTransactionFilter = (type) => {
    return {
        type: FILTER_TRANSACTION_TYPE,
        payload: type
    }
}
export const setCourierFilter = (courier) => {
    return {
        type: FILTER_COURIER,
        payload: courier
    }
}