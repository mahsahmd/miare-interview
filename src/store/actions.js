import { FILTER_TRANSACTION, GET_TRANSACTIONS } from "./constants"


export const getTransactions = (data) => {
    return {
        type: GET_TRANSACTIONS,
        payload: data
    }
}

export const setFilter = (filter) => {
    return {
        type: FILTER_TRANSACTION,
        payload: filter
    }
}