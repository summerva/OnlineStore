import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import Product from "./pages/Product/Product";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
  fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(setProducts);
}, []);

  const handleSearch = (query) => {
    console.log("App: получил", query);
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        {/* Профиль и авторизация */}
        <Route
          path="/"
          element={<Home products={products} searchQuery={searchQuery} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/auth" element={<Authorization />} />
        {/* Товары */}
        <Route path="/product/:id" element={<Product products={products} />} />
        {/* Корзина */}
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/cart/confirm" element={<OrderConfirm />} /> */}
        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
