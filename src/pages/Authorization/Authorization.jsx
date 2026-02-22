import Input from "@/ui/Input/Input";
import { Link } from "react-router-dom";
import Button from "@/ui/Button/Button";
import "./Authorization.css";
import { useState } from "react";

const Authorization = () => {
  const VALIDATION_RULES = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error: "Введите корректный email",
    },
    password: {
      required: true,
      minLength: 6,
      error: "Пароль слишком короткий",
    },
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const hasErrors = Object.values(errors).some((error) => error !== "");

  const validateField = (name, value) => {
    const rule = VALIDATION_RULES[name];
    console.log(`Проверка ${name}="${value}"`);

    if (!rule) return "";
    if (value === "") return "";

    // Проверка 1: только пробелы?
    const trimmed = value.trim();
    if (rule.required && trimmed.length === 0) {
      return rule.error; // "Неверный email"
    }
    // Проверка 2: короткое?
    if (rule.minLength && trimmed.length < rule.minLength) {
      return rule.error;
    }
    // Проверка 3: неправильный формат?
    if (rule.pattern && !trimmed.match(rule.pattern)) {
      return rule.error;
    }

    return "";
  };

  const handleInput = (event) => {
    const { name, value } = event.target; // name="email", value="test"

    //Проверка этого поля
    const error = validateField(name, value);

    // Обновление этого поля
    setFormData((prev) => ({
      ...prev, // Копируем старые данные
      [name]: value, // Меняется только email или password
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

 const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("Форма отправлена! formData:", formData);

  if (hasErrors) {
    console.log("Есть ошибки валидации");
    return;
  }

  setLoading(true);

  try {
    // Получаем всех пользователей
    console.log("Ищем пользователя");
    const usersResponse = await fetch("/users"); // GET всех пользователей
    const allUsers = await usersResponse.json();
    
    // Ищем точное совпадение email+password
    const user = allUsers.find(u => 
      u.email === formData.email && 
      u.password === formData.password
    );
    
    console.log("Найден пользователь:", user);

    if (user) {
      // Если успех - сохраняем в localStorage + редирект
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Авторизация успешна! User ID:", user.id);
      window.location.href = "/profile";
    } else {
      // Если не найден
      console.log("Пользователь не найден");
      alert("Неверный email или пароль");
    }
    
  } catch (error) {
    console.error("Сеть:", error);
    alert("Ошибка сети. Проверь соединение.");
  } finally {
    setLoading(false);
    console.log("Загрузка завершена");
  }
};


  return (
    <>
      <div className="auth container">
        <h1>Авторизация</h1>
        <form className="auth__inner box search" onSubmit={handleSubmit}>
          <div className="input_group">
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInput}
              placeholder="Почта"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input_group">
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="Пароль"
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <Button type="submit" disabled={hasErrors || loading}>
            Войти
          </Button>
          <Link to="/reg">Нет аккаунта</Link>
        </form>
      </div>
    </>
  );
};

export default Authorization;
