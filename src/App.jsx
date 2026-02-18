import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
