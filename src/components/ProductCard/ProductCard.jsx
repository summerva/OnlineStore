import "./ProductCard.css";
import Header from "../Header/Header";
import Button from "../../ui/Button/Button";

const ProductCard = (props) => {
  const {
    product,
    onClick,
  } = props
  return (
    <div className="product__card" onClick={onClick}> 
      <img src={product.image} alt={product.title}/>
      <div className="product__inner">
        <h3>{ product.title }</h3>
        <p>{ product.price.toLocaleString() }₽</p>
      </div>
      <Button className="product_button">Купить</Button>
    </div>
  );
};

export default ProductCard;
