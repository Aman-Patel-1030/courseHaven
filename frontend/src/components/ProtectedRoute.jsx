// components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login page with return url
    return <Navigate to="/users/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;