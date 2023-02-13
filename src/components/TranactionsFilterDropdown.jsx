import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTransactionFilter } from '../store/actions';

const filterOptions = [
    {
        fa: 'هزینه سفر',
        value: 'trip_financials'
    },
    {
        fa: 'هزینه شارژ حساب',
        value: 'payments'
    },
    {
        fa: 'هزینه متفرقه',
        value: 'misc_expenses'
    },
    {
        fa: 'تمامی تراکنش ها',
        value: ''
    },
    {
        fa: 'هزینه خرید ظرفیت',
        value: 'concurrency_costs'
    }
]
const TranactionsFilterDropdown = () => {
    const { filters } = useSelector(state => state.transactions);
    const dispatch = useDispatch()
    return (
        <>
            <p>{filterOptions?.find((item) => item.value === filters.transaction)?.fa}</p>
            {
                filterOptions.map(item => {
                    return <p onClick={() => dispatch(setTransactionFilter(item.value))} key={item.value}>{item.fa}</p>
                })
            }
        </>

    )
}

export default TranactionsFilterDropdown