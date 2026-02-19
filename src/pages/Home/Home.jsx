import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="main container">
      <div className="main__sort">
        <p>Сортировать</p>
        <select name="sort" id="sort">
          <option value="popular">Популярные</option>
          <option value="price-asc">Сначала дешевые</option>
          <option value="price-desc">Сначала дорогие</option>
        </select>
        <button className="button button_sort">Фильтры</button>
      </div>
      <div className="main__inner">
        <div className="main__filter">
          <ul className="main__block">
            <p>Категория</p>
            <li className="main__item">
              <input type="checkbox" />
              <label htmlFor="phone">Телефон</label>
            </li>
            <li className="main__item">
              <input type="checkbox" />
              <label htmlFor="phone">Планшет</label>
            </li>
            <li className="main__item">
              <input type="checkbox" />
              <label htmlFor="phone">Ноутбук</label>
            </li>
          </ul>
          <div className="search__block main__block">
            <div className="search">
              <p>Бренд</p>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Поиск значений"
              />
            </div>
            <ul className="main__block">
              <li className="main__item">
                <input type="checkbox" />
                <label htmlFor="phone">Apple</label>
              </li>
              <li className="main__item">
                <input type="checkbox" />
                <label htmlFor="phone">Samsung</label>
              </li>
            </ul>
          </div>
          <div className="price__block main__block">
            <p>Цена</p>
            <div className="price__block">
              <div className="search">
                <input type="text" name="search" id="search" placeholder="0" />
              </div>
              <div className="search">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="99999"
                />
              </div>
            </div>
            <ul className="main__block">
              <li className="main__item">
                <input type="checkbox" />
                <label htmlFor="phone">До 25000</label>
              </li>
              <li className="main__item">
                <input type="checkbox" />
                <label htmlFor="phone">До 50000</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="main__grid">
          <div className="grid__products">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
