import axios from "axios";
import Navbar from './Component/Navbar'
import TransactionList from "./Component/TransactionList";
function Home() {

  return (
    <div>
      <TransactionList/>
    </div>
  );
}

export default Home;
