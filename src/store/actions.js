import { GET_TRANSACTIONS } from "./constants"


export const getTransactions = (data) => {
    return {
        type: GET_TRANSACTIONS,
        payload: data
    }
}