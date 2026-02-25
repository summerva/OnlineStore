import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // вызовет автоматически при запуске
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.user) {
        setUser(JSON.parse(localStorage.user));
      }
    }, 0);

    return () => clearTimeout(timer); // очистка
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuth: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
