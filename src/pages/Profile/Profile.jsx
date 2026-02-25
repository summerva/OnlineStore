  import "./Profile.css";

  const Profile = () => {
    return (
      <div className="profile container">
        <h1>Привет, name</h1>
        <div className="profile__inner">
          <div className="profile__orders">
            <h2>Последний заказ</h2>
            <div className="box">
              <p>Номер заказа: 1</p>
              <p>Позиций: 2</p>
              <p>Товары: Apple Iphone 17 Pro Max Silver</p>
              <p>Стоимость заказа: 129990р</p>
            </div>
          </div>
          <div className="profile__info ">
            <h2>Личные данные</h2>
            <div className="box">
              <p>Имя: Полина</p>
              <p>Возраст: 21</p>
            </div>
          </div>
          <div className="profile__discount">
            <h2>Ваши скидки</h2>
            {/* <h2>Адрес?</h2> */}
            <div className="box">
              <p>У вас пока нет скидок</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Profile;
