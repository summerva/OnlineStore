import "./Header.css";
import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* <a href="./">
        <h1>OnlineStore</h1>
      </a> */}
      <Link to="/">
        <h1>OnlineStore</h1>
      </Link>
      <div className="header__search search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Введите название..."
        />
        <button className="button" type="submit">
          Поиск
        </button>
      </div>
      <div className="header__nav">
        <nav>
          {/* <a href="/profile">
            <img src={profile} alt="Профиль" />
          </a> */}
          <Link to="/profile">
            <img src={profile} alt="Профиль" />
          </Link>
          {/* <a href="/cart">
            <img src={cart} alt="Корзина" />
            <span className="badge">0</span>
          </a> */}
          <Link to="/cart">
            <img src={cart} alt="Корзина" />
            <span className="badge">0</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
