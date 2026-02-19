import ProductCard from "../../components/ProductCard/ProductCard";
import Checkbox from "../../ui/Checkbox/Checkbox";
import Input from "../../ui/Input/Input";
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
              <Checkbox id="category">Телефон</Checkbox>
              <Checkbox id="category">Планшет</Checkbox>
              <Checkbox id="category">Ноутбук</Checkbox>
          </ul>
          <div className="search__block main__block">
            <div className="search">
              <p>Бренд</p>
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Поиск значений"
              />
            </div>
            <ul className="main__block">
              <Checkbox id="brand">Apple</Checkbox>
              <Checkbox id="brand">Samsung</Checkbox>
            </ul>
          </div>
          <div className="price__block main__block">
            <p>Цена</p>
            <div className="price__block">
              <div className="search">
                <Input type="text" name="search" id="search" placeholder="0" />
              </div>
              <div className="search">
                <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="99999"
                />
              </div>
            </div>
            <ul className="main__block">
              <Checkbox id="price">До 10000</Checkbox>
              <Checkbox id="price">До 25000</Checkbox>
              <Checkbox id="price">До 50000</Checkbox>
              <Checkbox id="price">До 100000</Checkbox>
            </ul>
          </div>
        </div>
        <div className="main__grid">
          <div className="grid__products">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
