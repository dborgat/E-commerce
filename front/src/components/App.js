//REACT
import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import axios from "axios";
//CONTEXT
import { UserContext } from "../index";

//CONSOLE
import { log, success, error } from "../utils/logs";

//COMPONENTS
import Register from "./Register";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Login from "./Login";
import DatesAccount from "./DatesAccount";
import Checkout from "./Checkout";
import SearchProducts from './SearchProducts';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import CategoryProduct from "./CategoryProduct";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import AccountOrders from './AccountOrders'
import AdminAccount from './AdminAccount'
import AllUsers from './AllUsers'
import AllOrders from './AllOrders'
import AllProducts from "./AllProducts"


const App = () => {
  const { setUser } = useContext(UserContext);
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("cart")));
  useEffect(() => {
    log(`fetching user...`);
    axios
      .get("/api/user/me")
      .then((res) => res.data)
      .then((user) => {
        success(`found user ${user.email}`);
        setUser(user);
      })
      .catch(({ response }) => {
        error(response.status, response.statusText);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={()=> <Home local={local} setLocal={setLocal} />} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => <SingleProduct id={match.params.id} />}
        />
        
         <Route
          exact
          path="/products/search/:name"
          render={({ match  }) => <SearchProducts setLocal={setLocal} name={match.params.name} />}
        />
        <Route exact path="/cart" render={({ match  }) => <Cart name={match} /> } 
        />
        <Route exact path="/account" component={DatesAccount} />
        <Route exact path="/account/orders" component={AccountOrders} />
       
        <Route exact path="/adminaccount" component={AdminAccount} />
        <Route exact path="/adminaccount/allusers" component={AllUsers} />
        <Route exact path="/adminaccount/allorders" component={AllOrders} />
        <Route exact path="/adminaccount/allproducts" component={AllProducts} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/category/:id"
          render={({ match }) => <CategoryProduct setLocal={setLocal} id={match.params.id} />}
        />
        <Route exact path="/addproduct" component={AddProduct} />
    
        <Route exact path="/addcategory" component={AddCategory} />
    
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
