import { useSelector } from "react-redux";
import FilterComponent from "./filterComponent/FilterComponent";
import TransactionComponent from "./transactionsComponent/TransactionsComponent";
import { TransactionsWrapper } from "./transactionsComponent/transactionsComponent.styles";
import { getFilteredTransactins } from "../store/selector";
import useGetData from "../utils/useGetData";
import styled from "styled-components";

const Transactions = () => {
    const filteredTransactions = useSelector(state => getFilteredTransactins(state.transactions))
    useGetData()
    return (
        <TransactionsSection>
            <FilterComponent />
            <TransactionsWrapper>
                {filteredTransactions.length > 0 && filteredTransactions?.map((data) => {
                    return <TransactionComponent data={data} key={data.date} />
                })}
            </TransactionsWrapper>

        </TransactionsSection>

    );
}

const TransactionsSection = styled.div`
  width: 100%;
    max-width: 1200px;
    margin: 64px auto 0 auto;
`
export default Transactions