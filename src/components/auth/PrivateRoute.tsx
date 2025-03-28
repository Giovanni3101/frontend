import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

interface PrivateRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export function PrivateRoute({ children, adminOnly = true }: PrivateRouteProps) {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}