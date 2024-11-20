import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');  // Or use a state to store the token

  if (!token) {
    return <Navigate to="/login" replace />;  // Redirect to login if no token
  }

  return element;  // Otherwise, return the requested element
};

export default ProtectedRoute;
