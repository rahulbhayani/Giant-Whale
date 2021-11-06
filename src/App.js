import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import './App.css';

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/quill/quill.snow.css'
import './assets/vendor/quill/quill.bubble.css'
import './assets/vendor/simple-datatables/style.css'

import './assets/css/style.css'

import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Transaction from './Component/Transaction';
import Vender from './Component/Vender';
import Home from './Home';
import TransactionList from './Component/TransactionList';
import Print_Bill from './Component/Print_Bill';
import Navbar from './Component/Navbar';
import Headerbar from './Component/Header';
import Sidebar from './Component/Sidebar';
import test from './Component/test';
import testUtils from 'react-dom/test-utils';

const PrivateRoute = ({ component: Component, ...rest }) => 
(  
  <Route {...rest} render={props => 
  (
    localStorage.getItem('token') ? <Component {...props} /> : <Redirect to={{pathname: '/'}}/>
  )}/>
);


function App() {
  return (
    
    <Router>
    <ToastContainer/>
    {/* <Navbar /> */}
    <Headerbar/>
    <Sidebar/>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/Home" component={Home}/>
      <PrivateRoute path="/tran" component={Transaction}/>
      <PrivateRoute path="/vender" component={Vender}/>
      <PrivateRoute path="/list" component={TransactionList}/>
      <PrivateRoute path="/print" component={Print_Bill}/>
      <PrivateRoute path="/test" component={test}/>

    </Switch>
  </Router>
  );
}

export default App;
