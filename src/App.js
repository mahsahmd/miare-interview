import { useSelector } from "react-redux";
import FilterComponent from "./components/FilterComponent";
import TransactionComponent from "./components/TransactionComponent";
import { TransactionsWrapper } from "./components/transactionComponent.styles";
import { getFilteredTransactins } from "./store/selector";
import useGetData from "./utils/useGetData";

function App() {
  const filteredTransactions = useSelector(state => getFilteredTransactins(state.transactions))
  useGetData()
  return (
    <>
      <FilterComponent />
      <TransactionsWrapper>
        {filteredTransactions.length > 0 && filteredTransactions?.map((data) => {
          return <TransactionComponent data={data} key={data.date} />
        })}
      </TransactionsWrapper>

    </>

  );
}

export default App;
