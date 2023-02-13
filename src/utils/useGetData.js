import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getTransactions } from '../store/actions';

const useGetData = () => {
    const [data, setData] = useState([]);
    const [groupedData, setGroupedData] = useState([]);

    const dispatch = useDispatch();

    const mapData = (type, dateKey, data) => {
        const mappedData = data?.data[type].map((item) => {
            return {
                ...item,
                date: item[dateKey],
                type: type
            }
        })
        return mappedData;
    }
    useEffect(() => {
        axios.get('./data.json').then((res) => {
            const concurrencyCostTransactions = mapData('concurrency_costs', 'created_at', res);
            const paymentsTransactions = mapData('payments', 'datetime', res);
            const tripFinancialTransactions = mapData('trip_financials', 'request_datetime', res);
            const miscExpensesTransactions = mapData('misc_expenses', 'created_at', res);
            setData([
                ...concurrencyCostTransactions, ...paymentsTransactions, ...miscExpensesTransactions, ...tripFinancialTransactions
            ])
        })
    }, [])
    useEffect(() => {
        const groupedData = data.reduce((acc, obj) => {
            const date = obj.date.split("T")[0]; // extract just the date from the datetime string
            if (!acc[date]) {
                acc[date] = { date, data: [obj] };
            } else {
                acc[date].data.push(obj);
            }
            return acc;
        }, {});
        setGroupedData(Object.values(groupedData).sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        }))
    }, [data])
    useEffect(() => {
        dispatch(getTransactions(groupedData))

    }, [groupedData])
}

export default useGetData