import Button from "@/ui/Button/Button";
import Checkbox from "@/ui/Checkbox/Checkbox";
import Input from "@/ui/Input/Input";
import { Link } from "react-router-dom";
import "./Registration.css";
import { useState } from "react";

const Registration = () => {
  const VALIDATION_RULES = {
    name: {
      required: true,
      minLength: 2,
      error: "Имя слишком короткое",
    },
    phone: {
      required: true,
      pattern: /^8\d{10}$/, // 89998887766 (11 цифр)
      error: "Телефон: 89991234567",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // user@mail.ru
      error: "Введите корректный email",
    },
    password: {
      required: true,
      pattern: /^(?=.*[A-Z])(?=.*\d).{6,}$/, // Upper + цифра + ≥6
      error: "≥6 символов, 1 заглавная, 1 цифра",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const hasErrors = Object.values(errors).some((error) => error !== "");

  const validateField = (fieldName, value) => {

    const rule = VALIDATION_RULES[fieldName];
    if (!rule) return "";
    if (value === "") return "";

    const trimmed = value.trim();
    if (rule.required && trimmed.length === 0) return rule.error;
    if (rule.minLength && trimmed.length < rule.minLength) return rule.error;
    if (rule.pattern && !trimmed.match(rule.pattern)) return rule.error;

    return "";
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (event) => {
    console.log("Клик hasErrors =", hasErrors, "loading =", loading);
    event.preventDefault();

    if (hasErrors) return; //выход при ошибках

    setLoading(true); // показать загрузку

    try {
      // обработка ошибок
       console.log("Отправка:", formData);
      const response = await fetch("/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Статус:", response.status); 
      const data = await response.json();

      if (response.ok) {
        console.log("Успех:", data);
        // redirect на /profile
        window.location.href = "/profile";
      } else {
        alert("Ошибка сервера: " + data.message);
      }
    } catch (error) {
      console.error("Сеть:", error);
      alert("Ошибка сети");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg container">
      <h1>Регистрация</h1>
      <form className="reg__inner box search" onSubmit={handleSubmit}>
        <div className="input_group">
          <Input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInput}
            placeholder="Имя"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="input_group">
          <Input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInput}
            placeholder="Телефон"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
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
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <Button
          type="submit"
          className={`reg_button ${hasErrors ? "disabled" : ""}`}
          disabled={hasErrors || loading}
        >
          {loading ? "Загрузка..." : "Зарегистрироваться"}
        </Button>
        <Link to="/auth">Уже есть аккаунт</Link>
      </form>
    </div>
  );
};

export default Registration;
