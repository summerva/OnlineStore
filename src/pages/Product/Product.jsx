import { useParams } from "react-router-dom";
import "./Product.css";
import Button from "@/ui/Button/Button";
import { useContext } from "react";
import OrdersContext from "@/context/OrdersContext";

const Product = (props) => {
  const { products } = props;
  const { id } = useParams();
  const { dispatch } = useContext(OrdersContext);

  const product = products.find((p) => p.id == id);

  if (!product) {
    return <div>Товар #{id} не найден</div>;
  }

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...product,
        quantity: 1,
        selected: false,
      },
    });
  };

  return (
    <div className="product__detail container">
      <img src={product.image} alt={product.title} />
      <div className="product__inner box">
        <h3>Характеристики:</h3>
        <h2>{product.title}</h2>
        <p>Цена: {product.price.toLocaleString()}₽</p>
        <p>Описание: {product.description}</p>
        <Button className="buy_btn" onClick={addToCart}>Купить</Button>
      </div>
    </div>
  );
};

export default Product;
