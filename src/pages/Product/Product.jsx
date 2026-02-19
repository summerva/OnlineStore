import { useParams } from "react-router-dom";
import "./Product.css";
import Button from "../../ui/Button/Button";

const Product = () => {
  const { id } = useParams(); // "1", "2", "3"

  const products = [
    // тот же массив Home.jsx
    {
      id: 1,
      title: "Смарт-часы HUAWEI Watch Fit 4 Black",
      price: 10999,
      image: "https://img.mvideo.ru/Big/400454546bb1.jpg",
      description: "Смарт-часы Huawei Watch Fit 4 Black...",
    },
    {
      id: 2,
      title: "Смартфон Apple iPhone 17 Pro",
      price: 129990,
      image: "https://img.mvideo.ru/Big/30087039bb.jpg",
      description: "Смартфон Apple...",
    },
    {
      id: 3,
      title: "Телевизор Hisense 40A5Q",
      price: 24990,
      image: "https://img.mvideo.ru/Big/400457649bb.jpg",
      description: "Телевизор Hisense...",
    },
  ];

  // ОДИН товар по ID
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <div>Товар #{id} не найден</div>;
  }

  return (
    <div className="product__detail container">
      <img src={product.image} alt={product.title} />
      <div className="product__inner box">
        <h3>Характеристики:</h3>
        <h2>{product.title}</h2>
        <p>Цена: {product.price.toLocaleString()}₽</p>
        <p>Описание: {product.description}</p>
        <Button className="buy_btn">Купить</Button>
      </div>
    </div>
  );
};

export default Product;
