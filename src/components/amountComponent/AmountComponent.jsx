import React from 'react'
import { AmountWrapper } from './amountComponent.styles'

const AmountComponent = ({ amount }) => {
    return (
        amount > 0 ? (
            <AmountWrapper data-testid='amount' positive={amount > 0}>+ {amount}</AmountWrapper>
        ) : amount < 0 ? <AmountWrapper data-testid='amount' positive={amount > 0}>{amount}</AmountWrapper> : <AmountWrapper data-testid='amount' positive={amount >= 0}>رایگان</AmountWrapper>
    )
}

export default AmountComponent