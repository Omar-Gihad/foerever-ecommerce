// import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Nav from "./includes/Nav";
import Footer from "./includes/Footer";
import ProductInfo from "./includes/ProductInfo";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";

export const searchContext = createContext();

function App() {
  const [showSearch, setShowSearch] = useState(false);

  const [product, setProduct] = useState({});
  const [productSize, setProductSize] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  // const location = useLocation();
  // const isCollectionPage = location.pathname === "/collection";

  return (
    <>
      <searchContext.Provider
        value={{
          showSearch,
          setShowSearch,
          product,
          setProduct,
          productSize,
          setProductSize,
          cartItems,
          setCartItems,
          cartNumber,
          setCartNumber,
        }}
      >
        <Nav />

        <main className="px-5 sm:px-20 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </main>

        {/* {!isCollectionPage && <Footer />} */}
        <Footer />
      </searchContext.Provider>
    </>
  );
}

export default App;
