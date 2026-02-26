import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/ui/Button/Button";
import "./OrderConfirm.css";

const OrderConfirm = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Берём последний заказ
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    if (orders.length > 0) {
      setOrder(orders[orders.length - 1]);
    }
  }, []);

  if (!order) {
    return (
      <div className="order-confirm container">
        <h1>Заказ не найден</h1>
        <Button onClick={() => navigate("/cart")}>В корзину</Button>
      </div>
    );
  }

  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="order-confirm container">
      <div className="confirm-success">
        <h1>✅ Заказ #{order.id} оформлен!</h1>

        <div className="order-details">
          <div className="detail-row">
            <span>Номер заказа:</span>
            <strong>#{order.id}</strong>
          </div>
          <div className="detail-row">
            <span>Дата:</span>
            <strong>{new Date(order.date).toLocaleString("ru-RU")}</strong>
          </div>
          <div className="detail-row">
            <span>Товаров:</span>
            <strong>{totalItems} шт</strong>
          </div>
          <div className="detail-row total-price">
            <span>Итого:</span>
            <strong>{order.total.toLocaleString()}₽</strong>
          </div>
        </div>

        <div className="confirm-items">
          <h3>Включено в заказ:</h3>
          {order.items.map((item) => (
            <div key={item.id} className="confirm-item">
              <span>{item.title}</span>
              <span>
                {item.quantity} × {item.price.toLocaleString()}₽
              </span>
            </div>
          ))}
        </div>

        <div className="confirm-actions">
          <Button onClick={() => navigate("/")}>На главную</Button>
          <Button onClick={() => navigate("/cart")}>В корзину</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
