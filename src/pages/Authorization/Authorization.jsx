import Input from "../../ui/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
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
          <Link to="/reg">У меня нет аккаунта</Link>
        </div>
      </div>
    </>
  );
};

export default Authorization;
