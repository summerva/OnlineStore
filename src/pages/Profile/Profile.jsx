import Header from "../../components/Header/Header";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container">
      <h2>Мой профиль</h2>
      <p>Привет, name</p>
      <p>Здесь информация о пользователе...</p>
      <p>Заказы</p>
      <p>Личные данные</p>
    </div>
  );
};

export default Profile;
