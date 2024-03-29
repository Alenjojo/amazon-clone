import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import { SnackbarProvider } from "notistack";
import { auth } from "./firebase.js";

const promise = loadStripe(
  "pk_test_51JOGKMSEPStF8qLgAjc1aKuZwZKqBgEMKCCQxsyqjDaLF2GBVsF1YtRX6VkRRj5a0lPvVr5R2PXA1c0YHLFJsnPx00cVP8YBYM"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <SnackbarProvider>
                <Payment />
              </SnackbarProvider>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <SnackbarProvider>
              <Home />
            </SnackbarProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
