import Button from "../../ui/Button/Button";
import Checkbox from "../../ui/Checkbox/Checkbox";
import Input from "../../ui/Input/Input";
import "./Registration.css";

const Registration = () => {
  return (
    <>
      <div className="reg container">
        <h1>Регистрация</h1>
        <div className="reg__inner box search">
          <Input type="text" name="" id="" placeholder="Имя" />
          <Input type="phone" name="" id="" placeholder="Телефон" />
          <Input type="email" name="" id="" placeholder="Почта" />
          <Input type="password" name="" id="" placeholder="Пароль" />
          <Checkbox>Обработка персональных данных</Checkbox>
          <Button className="reg_button">Зарегестрироваться</Button>
          <a href="">Уже есть аккаунт</a>
        </div>
      </div>
    </>
  );
};

export default Registration;
