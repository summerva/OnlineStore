import { useNavigate } from "react-router-dom";
import ProductCard from '../../components/ProductCard/ProductCard'
import Checkbox from "../../ui/Checkbox/Checkbox";
import Input from "../../ui/Input/Input";
import "./Home.css";
import Button from "../../ui/Button/Button";

const Home = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Смарт-часы HUAWEI Watch Fit 4 Black",
      price: 10999,
      category: "Гаджеты",
      image: "https://img.mvideo.ru/Big/400454546bb1.jpg",
      description:
        "Смарт-часы Huawei Watch Fit 4 Black выполнены в корпусе из алюминиевого сплава",
    },
    {
      id: 2,
      title: "Смартфон Apple iPhone 17 Pro",
      price: 129990,
      category: "Гаджеты",
      image: "https://img.mvideo.ru/Big/30087039bb.jpg",
      description:
        "Смартфон AppleApple iPhone 17 Pro 256GB Silver (без RuStore) — смартфон с 6,3-дюймовым экраном и обновленным дизайном блока основных камер",
    },
    {
      id: 3,
      title: "Телевизор Hisense 40A5Q",
      price: 24990,
      category: "Гаджеты",
      image: "https://img.mvideo.ru/Big/400457649bb.jpg",
      description:
        "Телевизор Hisense 40A5Q RU с Full HD экраном диагональю 40 дюймов работает под управлением видеопроцессора NT72690",
    },
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

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
            <Button className="reset__button">Сброс</Button>
          </div>
        </div>
        <div className="main__grid">
          <div className="grid__products">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
