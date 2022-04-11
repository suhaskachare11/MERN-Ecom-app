import React from "react";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductC from "./Pages/ProductC";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


function App() {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductC/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/login" element={user ? <Navigate to='/'/> : <Login/>} />
        <Route path="/login" element={user ? <Navigate to='/'/> : <Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
