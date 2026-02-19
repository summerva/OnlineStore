import "./Authorization.css";

const Authorization = () => {
  return (
    <>
      <div className="auth container">
        <h1>Авторизация</h1>
        <div className="auth__inner box search">
          <input type="email" name="" id="" placeholder="Почта" />
          <input type="password" name="" id="" placeholder="Пароль" />
          <button className="button auth_button">Войти</button>
          <a href="">У меня нет аккаунта</a>
        </div>
      </div>
    </>
  );
};

export default Authorization;
