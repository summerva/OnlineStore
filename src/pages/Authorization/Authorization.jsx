import Input from "../../ui/Input/Input";
import "./Authorization.css";

const Authorization = () => {
  return (
    <>
      <div className="auth container">
        <h1>Авторизация</h1>
        <div className="auth__inner box search">
          <Input typ="email" name="" id="" placeholder="Почта" />
          <Input typ="password" name="" id="" placeholder="Пароль" />
          <Button className="auth_button">Войти</Button>
          <a href="">У меня нет аккаунта</a>
        </div>
      </div>
    </>
  );
};

export default Authorization;
