import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import AuthContext from "@/context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [lastOrder, setLastOrder] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  // Загружаем из БД + localStorage (приоритет БД)
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3001/orders?userId=${user.id}`)
        .then((res) => res.json())
        .then((orders) => {
          if (orders.length > 0) {
            const lastOrder = orders[orders.length - 1];

            const itemsWithNames = lastOrder.items.map((item) => {
              const product = products.find((p) => p.id == item.productId);
              return {
                id: item.productId,
                title: product?.title || `Товар #${item.productId}`,
                price: item.price,
                quantity: item.quantity,
              };
            });

            setLastOrder({
              ...lastOrder,
              items: itemsWithNames,
              date: lastOrder.date || "26.02.2026",
            });
          }
        })
        .catch(() => {
          const localOrders = JSON.parse(localStorage.getItem("orders")) || [];
          const userOrders = localOrders.filter(
            (order) => order.userId == user.id,
          );
          if (userOrders.length > 0) {
            const lastOrder = userOrders[userOrders.length - 1];
            setLastOrder({
              ...lastOrder,
              items: lastOrder.items.map((item) => ({
                id: item.productId,
                title: `Смарт-часы HUAWEI #${item.productId}`,
                price: item.price,
                quantity: item.quantity,
              })),
              date: lastOrder.date || "26.02.2026",
            });
          }
        });
    }
  }, [user, products]);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  const orderStats = lastOrder
    ? {
        id: lastOrder.id,
        totalItems: lastOrder.items.reduce(
          (sum, item) => sum + item.quantity,
          0,
        ),
        totalPrice: lastOrder.total,
        itemsList: lastOrder.items.map((item) => item.title).join(", "),
        date: lastOrder.date,
      }
    : null;

  return (
    <div className="profile container">
      <h1>Привет, {user.name}</h1>
      <div className="profile__inner">
        <div className="profile__orders">
          <h2>Последний заказ</h2>
          <div className="box">
            {lastOrder ? (
              <>
                <p>
                  <strong>Номер заказа:</strong> #{orderStats.id}
                </p>
                <p>
                  <strong>Дата:</strong> {orderStats.date}
                </p>
                <p>
                  <strong>Позиций:</strong> {orderStats.totalItems} шт
                </p>
                <p>
                  <strong>Товары:</strong> {orderStats.itemsList}
                </p>
                <p className="order-total">
                  <strong>
                    Стоимость: {orderStats.totalPrice.toLocaleString()}₽
                  </strong>
                </p>
              </>
            ) : (
              <p>У вас пока нет заказов</p>
            )}
          </div>
        </div>

        <div className="profile__info">
          <h2>Личные данные</h2>
          <div className="box">
            <p>
              <strong>Имя:</strong> {user.name}
            </p>
            <p>
              <strong>Почта:</strong> {user.email}
            </p>
            <p>
              <strong>Телефон:</strong> {user.phone || "Не указан"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
