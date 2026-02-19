import "./Registration.css";

const Registration = () => {
  return (
    <>
      <div className="reg container">
        <h1>Регистрация</h1>
        <div className="reg__inner box search">
          <input type="text" name="" id="" placeholder="Имя" />
          <input type="phone" name="" id="" placeholder="Телефон" />
          <input type="email" name="" id="" placeholder="Почта" />
          <input type="password" name="" id="" placeholder="Пароль" />
          <li className="main__item reg_item">
            <input type="checkbox" />
            <label htmlFor="d">Обработка персональных данных</label>
          </li>
          <button className="button reg_button">Зарегестрироваться</button>
          <a href="">Уже есть аккаунт</a>
        </div>
      </div>
    </>
  );
};

export default Registration;
