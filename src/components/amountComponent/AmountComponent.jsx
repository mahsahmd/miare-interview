import React from 'react'
import { separateWithCommas } from '../../utils/numberUtils'
import { AmountWrapper } from './amountComponent.styles'

const AmountComponent = ({ amount }) => {
    return (
        amount > 0 ? (
            <AmountWrapper data-testid='amount' positive={amount > 0}>+ {separateWithCommas(amount)}</AmountWrapper>
        ) : amount < 0 ? <AmountWrapper data-testid='amount' positive={amount > 0}>- {separateWithCommas(Math.abs(amount))}</AmountWrapper> : <AmountWrapper data-testid='amount' positive={amount >= 0}>رایگان</AmountWrapper>
    )
}

export default AmountComponent