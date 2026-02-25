import "./Header.css";
import profile from "@/assets/profile.svg";
import cart from "@/assets/cart.svg";
import exit from "@/assets/exit.svg";
import { Link } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import Button from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import AuthContext from "@/context/AuthContext";

const Header = (props) => {
  const { onSearch } = props;
  const { user, logout } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [logoutMessage, setLogoutMessage] = useState("");

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
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button onClick={handleSearch}>Поиск</Button>
      </div>
      <div className="header__nav">
        <nav className={`header__navigate ${isMenuOpen ? "active" : ""}`}>
          <Link to="/profile">
            <div className="nav_block">
              <img src={profile} alt="Профиль" />
              <p>{user ? user.name : "Войти"}</p>
            </div>
          </Link>
          {user && (
            <div
              className="nav_block"
              onClick={() => {
                setLogoutMessage("Вы вышли из аккаунта");
                setTimeout(() => {
                  logout();
                  setLogoutMessage("");
                }, 1500);
              }}
            >
              <img src={exit} alt="Выход" />
              <p>Выйти</p>
            </div>
          )}
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
        {logoutMessage && <div className="logout-message">{logoutMessage}</div>}
      </div>
    </div>
  );
};

export default Header;
