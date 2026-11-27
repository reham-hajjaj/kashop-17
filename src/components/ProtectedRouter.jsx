import React from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute() {
        const token = useAuthStore((state) => state.token);
  return token? <Outlet/>:
  <Navigate to="/login" replace/>;
}

export default ProtectedRoute;
