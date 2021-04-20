import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import AddServices from './Components/Admin/AddServices/AddServices'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminHome from './Components/Admin/AdminHome/AdminHome';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import Order from './Components/User/Order/Order';
import Login from './Components/Login/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import OrderList from './Components/Admin/OrderList/OrderList';

import ClientReview from './Components/User/Review/ClientReview';
import BookingList from './Components/User/BookingList/BookingList';

 export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
    
    <Route path="/addServices">
    <AddServices></AddServices>
    </Route>
    <Route path="/addAdmin">
    <AddAdmin></AddAdmin>
    </Route>
    <PrivateRoute path="/order/:id">
    <Order></Order>
    </PrivateRoute>
    <PrivateRoute path="/admin">
     <AdminHome></AdminHome>
    </PrivateRoute>
    <Route path="/orderList">
     <OrderList></OrderList>
    </Route>
    <Route path="/bookingList">
     <BookingList></BookingList>
    </Route>
    <Route path="/review">
    <ClientReview></ClientReview>
    </Route>
    <Route path="/login">
     <Login></Login>
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>
</UserContext.Provider>
  );
}

export default App;
