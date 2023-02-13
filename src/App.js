import { useSelector } from "react-redux";
import useGetData from "./utils/useGetData";

function App() {
  const { allTransactions } = useSelector(state => state.transactions)
  useGetData()

  return (
    <p>app</p>
  );
}

export default App;
