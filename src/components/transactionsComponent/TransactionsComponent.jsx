import React from 'react'
import { formatTransactionTypeToPersian } from '../../utils/formatToPersian';
import { convertToJalali, convertToJalaliDate, getHourFromDate } from '../../utils/convertDate';
import AmountComponent from '../amountComponent/AmountComponent';
import { ColoredText, DateWrapper, TransactionInfoWrapper, TransactionWrapper } from './transactionsComponent.styles';

const TransactionComponent = ({ data }) => {
    return (
        <>
            {

                data?.data?.length > 0 && (
                    <div>
                        <DateWrapper>{convertToJalali(data.date)}</DateWrapper>
                        <div>
                            {data.data.map((item) => {
                                return (
                                    <TransactionWrapper key={item.id}>
                                        <TransactionInfoWrapper>
                                            <p>{convertToJalaliDate(item.date)},{getHourFromDate(item.date)}</p>

                                            <ColoredText color={item.type === 'payments' ? 'green' : 'red'}>{formatTransactionTypeToPersian(item.type)}</ColoredText>
                                            {
                                                item.type === 'trip_financials' && (
                                                    <>
                                                        <p>کوریر:{item.driver}</p>
                                                        <p>شعبه:{item.hub.title}</p>
                                                    </>


                                                )
                                            }

                                        </TransactionInfoWrapper>


                                        <AmountComponent amount={item.amount || item['final_price']} />

                                    </TransactionWrapper>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default TransactionComponent