import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTransactionFilter } from '../../store/actions';
import { Arrow, ArrowWrapper, DropdownOption, DropdownOptions, DropdownSelectedItem } from './filterComponent.styles';

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
        fa: 'تمام تراکنش ها',
        value: ''
    },
    {
        fa: 'هزینه خرید ظرفیت',
        value: 'concurrency_costs'
    }
]
const TranactionsFilterDropdown = () => {
    const { filters } = useSelector(state => state.transactions);
    const dispatch = useDispatch();
    const [showOptions, setShowOptions] = useState(false);
    const onOptionClick = (value) => {
        dispatch(setTransactionFilter(value));
        setShowOptions(false);
    }
    return (
        <div>

            <DropdownSelectedItem onClick={() => { setShowOptions(state => !state) }}>{filterOptions?.find((item) => item.value === filters.transaction)?.fa}    <ArrowWrapper><Arrow /></ArrowWrapper>   </DropdownSelectedItem>
            <DropdownOptions show={showOptions}>
                {

                    filterOptions.map(item => {
                        return <DropdownOption onClick={() => onOptionClick(item.value)} key={item.value}>{item.fa}</DropdownOption>
                    })
                }
            </DropdownOptions>

        </div>

    )
}

export default TranactionsFilterDropdown