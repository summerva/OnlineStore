import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import Product from "./pages/Product/Product";
import { useState } from "react";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Смарт-часы HUAWEI Watch Fit 4 Black",
      category: "Часы",
      brand: "Huawei",
      price: 10999,
      image: "https://img.mvideo.ru/Big/400454546bb1.jpg",
      description: "Смарт-часы Huawei Watch Fit 4 Black...",
    },
    {
      id: 2,
      title: "Смартфон Apple iPhone 17 Pro",
      category: "Смартфон",
      brand: "Apple",
      price: 129990,
      image: "https://img.mvideo.ru/Big/30087039bb.jpg",
      description: "Смартфон Apple...",
    },
    {
      id: 3,
      title: "Телевизор Hisense 40A5Q",
      category: "Телевизор",
      brand: "Hisense",
      price: 24990,
      image: "https://img.mvideo.ru/Big/400457649bb.jpg",
      description: "Телевизор Hisense...",
    },
    {
      id: 5,
      title: "Умная колонка Яндекс Станция Мини",
      category: "Колонка",
      brand: "Яндекс",
      price: 6700,
      image: "https://img.mvideo.ru/Big/10029476bb.jpg",
      description:
        "Умная колонка «Яндекс Станция Мини с Алисой», с часами, черный опал — обновленная версия умной колонки с голосовым помощником. Модель получила громкий звук мощностью 10 Вт.",
    },
    {
      id: 6,
      title: "Наушники Apple AirPods Pro 2 MagSafe",
      category: "Наушники",
      brand: "Apple",
      price: 22990,
      image: "https://img.mvideo.ru/Big/50176080bb3.jpg",
      description:
        "Модель типа вкладыши в корпус из пластика, амбушюры сделаны из силикона",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");

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
