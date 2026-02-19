import Button from "../../ui/Button/Button";
import Checkbox from "../../ui/Checkbox/Checkbox";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart container">
      <h1>Корзина</h1>
      <span>0</span>
      <div className="cart_block">
        <div className="cart__inner">
          {/* <h3>Всего товаров: 3</h3> */}
          <div className="cart__all box">
            <Checkbox id="all">Выбрать все</Checkbox>
            <Button>Удалить все</Button>
          </div>
          <div className="cart__order box">
            <div className="order__inner">
              <Checkbox />
              <img src="" alt="" />
              <h2>Название</h2>
            </div>
            <div className="cart_quantity">
              <Button className="quantity_btn">+</Button>
              <span className="cart_span">2</span>
              <Button className="quantity_btn">-</Button>
            </div>
            <div className="cart_delete">
              <h3>Цена</h3>
              <Button>🗑</Button>
            </div>
          </div>
        </div>
        <div className="order__info">
          <div className="box-white">
            <h2>Детали заказа</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
