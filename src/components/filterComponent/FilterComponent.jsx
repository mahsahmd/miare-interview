import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TranactionsFilterDropdown from './TranactionsFilterDropdown'
import { setCourierFilter } from '../../store/actions'
import { FilterSection, FilterSectionWrapper, SearchInput, TransactionType } from './filterComponent.styles'
import { formatTransactionTypeToPersian } from '../../utils/formatToPersian'
const FilterComponent = () => {
    const { filters } = useSelector(state => state.transactions);
    const dispatch = useDispatch();
    return (
        <FilterSectionWrapper>
            <TransactionType>{formatTransactionTypeToPersian(filters.transaction)}</TransactionType>
            <FilterSection>


                {
                    filters.transaction === 'trip_financials' && <SearchInput type="text" placeholder='جستجو کوریر' onChange={(e) => { dispatch(setCourierFilter(e.target.value)) }} />
                }
                <TranactionsFilterDropdown />



            </FilterSection>
        </FilterSectionWrapper>

    )
}

export default FilterComponent