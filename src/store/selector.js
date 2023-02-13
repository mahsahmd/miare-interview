export function getFilteredTransactins(state) {
    return filterTransactions(state.allTransactions, state.filters);
}

const filterTransactions = (transactions, filter) => {
    let filteredTransactions = transactions;
    if (filter.transaction !== '' && filter.transaction !== 'trip_financials') {
        filteredTransactions = transactions?.map((day) => {
            return {
                date: day.date,
                data: day.data.filter((value) => value.type === filter.transaction)
            }
        })
    } else if (filter.transaction === 'trip_financials') {
        filteredTransactions = transactions?.map((day) => {
            return {
                date: day.date,
                data: day.data.filter((value) => value.type === filter.transaction && value.driver?.includes(filter.courier))
            }
        })
    }
    return filteredTransactions;


}