import "./Header.css";
import profile from "@/assets/profile.svg";
import cart from "@/assets/cart.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Button from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";

const Header = (props) => {
  const {
    onSearch,
  } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  //каждый символ = console.log
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    console.log("Header input:", value);
  };

  // кнопка поиска
  const handleSearch = () => {
    console.log("Поиск по:", searchQuery);
    onSearch(searchQuery);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>OnlineStore</h1>
      </Link>
      <div className="header__search search">
        <Input
          placeholder="Введите название..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button onClick={handleSearch}>Поиск</Button>
      </div>
      <div className="header__nav">
        <nav className={`header__navigate ${isMenuOpen ? "active" : ""}`}>
          <Link to="/profile">
            <div className="nav_block">
              <img src={profile} alt="Профиль" />
              <p>Войти</p>
              {/* <p>name если авторизван</p> */}
            </div>
          </Link>
          <Link to="/cart">
            <div className="nav_block">
              <img src={cart} alt="Корзина" />
              <p>Корзина</p>
              <span className="badge">0</span>
            </div>
          </Link>
          <button
            ref={burgerRef}
            className="header__burger button"
            onClick={toggleMenu}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="mobile-menu" ref={menuRef}>
              <nav className="mobile-menu__nav">
                <a href="#hero" onClick={toggleMenu}>
                  Главная
                </a>
                <Link to="/profile">
                  <p>Профиль</p>
                </Link>
                <Link to="/cart">
                  <p>Корзина</p>
                </Link>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
