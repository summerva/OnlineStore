import { useContext } from "react";
import OrdersContext from "@/context/OrdersContext";
import Button from "@/ui/Button/Button";
import Checkbox from "@/ui/Checkbox/Checkbox";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, dispatch } = useContext(OrdersContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  // Общая стоимость выбранных товаров
  const totalPrice = cart.reduce((sum, item) => {
    return item.selected ? sum + item.price * item.quantity : sum;
  }, 0);

  // Клик +1
  const increaseQty = (id) => {
    const item = cart.find((item) => item.id === id);
    dispatch({
      type: "UPDATE_QTY",
      payload: { id, quantity: item.quantity + 1 },
    });
  };

  // Клик -1 (минимум 1)
  const decreaseQty = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item.quantity > 1) {
      dispatch({
        type: "UPDATE_QTY",
        payload: { id, quantity: item.quantity - 1 },
      });
    }
  };

  // Переключить галочку
  const toggleItem = (id) => {
    dispatch({ type: "TOGGLE_ITEM", payload: { id } });
  };

  // Удалить товар
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  // Удалить все выбранные
  const removeSelected = () => {
    cart.forEach((item) => {
      if (item.selected) {
        dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } });
      }
    });
  };

  // Выбрать все
  const toggleAll = () => {
    cart.forEach((item) => {
      dispatch({ type: "TOGGLE_ITEM", payload: { id: item.id } });
    });
  };

  const handleCheckout = () => {
    const selectedItems = cart.filter((item) => item.selected);

    if (selectedItems.length === 0) {
      alert("Выберите товары для заказа!");
      return;
    }

    // 1. Создать заказ
    dispatch({
      type: "CREATE_ORDER",
      payload: {
        userId: user.id,
        total: totalPrice,
      },
    });

    // 2. Очистить выбранные товары
    dispatch({ type: "CLEAR_SELECTED" });

    // 3. Перенаправить
    navigate("/cart/confirm");
  };

  return (
    <div className="cart container">
      <h1>Корзина ({cart.length})</h1>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {/* Заголовок с кнопками */}
          <div className="cart_block">
            <div className="cart__inner">
              <div className="cart__all box">
                <Checkbox
                  id="all"
                  checked={cart.every((item) => item.selected)}
                  onChange={toggleAll}
                >
                  Выбрать все
                </Checkbox>
                <Button onClick={removeSelected}>Удалить все</Button>
              </div>

              {/* Товары */}
              {cart.map((item) => (
                <div key={item.id} className="cart__order box">
                  <div className="order__inner">
                    <Checkbox
                      checked={item.selected}
                      onChange={() => toggleItem(item.id)}
                    />
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </div>

                  {/* Количество */}
                  <div className="cart_quantity">
                    <Button
                      className="quantity_btn"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </Button>
                    <span className="cart_span">{item.quantity}</span>
                    <Button
                      className="quantity_btn"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </Button>
                  </div>

                  {/* Цена + Удалить */}
                  <div className="cart_delete">
                    <h3>{item.price * item.quantity}₽</h3>
                    <Button onClick={() => removeItem(item.id)}>🗑</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="order__info">
              <div className="order__details box-white">
                <h2>Детали заказа</h2>
                {/* СТАТИСТИКА */}
                <div className="order-stats">
                  <div>
                    Товаров: <strong>{cart.length}</strong>
                  </div>
                  <div>
                    Позиций:{" "}
                    <strong>
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </strong>
                  </div>
                  <div>
                    Выбрано:{" "}
                    <strong>
                      {cart
                        .filter((item) => item.selected)
                        .reduce((sum, item) => sum + item.quantity, 0)}
                    </strong>
                  </div>
                </div>
                {/* ЦЕНЫ */}
                <div className="order-prices">
                  <div>
                    Товары:{" "}
                    <strong>
                      {cart
                        .reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0,
                        )
                        .toLocaleString()}
                      ₽
                    </strong>
                  </div>
                  <div className="selected-price">
                    К оплате: <strong>{totalPrice.toLocaleString()}₽</strong>
                  </div>
                </div>
                {/* АВТОРИЗАЦИЯ */}
                {user ? (
                  <Button className="checkout-btn" onClick={handleCheckout} disabled={totalPrice === 0 || !user}>
                    Оформить заказ
                  </Button>
                ) : (
                  <div className="auth-required">
                    <Link to="/auth">Войдите для оформления заказа</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
