import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Загрузка...</div>; 
  if (!user) return <Navigate to="/auth" />;

  return children;
};

export default ProtectedRoute;
