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
              <label htmlFor="phone">Телефон</label>
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
                <label htmlFor="phone">Телефон</label>
              </li>
              <li className="main__item">
                <input type="checkbox" />
                <label htmlFor="phone">Телефон</label>
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
            <div className="product__card">
              <img src="https://img.mvideo.ru/Big/400454546bb1.jpg" alt="" />
              <div className="product__inner">
                <h3>Название</h3>
                <p>Цена</p>
              </div>
              <button className="product_button button">Купить</button>
            </div>
            <div className="product__card">
              <img src="https://img.mvideo.ru/Big/400454546bb1.jpg" alt="" />
              <div className="product__inner">
                <h3>Название</h3>
                <p>Цена</p>
              </div>
              <button className="product_button button">Купить</button>
            </div>
            <div className="product__card">
              <img src="https://img.mvideo.ru/Big/400454546bb1.jpg" alt="" />
              <div className="product__inner">
                <h3>Название</h3>
                <p>Цена</p>
              </div>
              <button className="product_button button">Купить</button>
            </div>
            <div className="product__card">
              <img src="https://img.mvideo.ru/Big/400454546bb1.jpg" alt="" />
              <div className="product__inner">
                <h3>Название</h3>
                <p>Цена</p>
              </div>
              <button className="product_button button">Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
