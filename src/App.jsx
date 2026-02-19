import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import Product from "./pages/Product/Product";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Профиль и авторизация */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/auth" element={<Authorization />} />
        {/* Товары */}
        <Route path="/product/:id" element={<Product />} />
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
