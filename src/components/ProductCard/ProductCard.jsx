import "./ProductCard.css";
import Header from "../Header/Header";
import Button from "../../ui/Button/Button";

const ProductCard = () => {
  return (
    <div className="product__card">
      <img src="https://img.mvideo.ru/Big/400454546bb1.jpg" alt="" />
      <div className="product__inner">
        <h3>Название</h3>
        <p>Цена</p>
      </div>
          {/* <button className="product_button button">Купить</button> */}
          <Button className="product_button">Купить</Button>
    </div>
  );
};

export default ProductCard;
