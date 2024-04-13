import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContexts/index'; // Import your authentication context

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { userLoggedIn } = useAuth(); // Access the user's authentication status from context
  
  return (
    <Route
      {...rest}
      element={userLoggedIn ? <Element /> : <Navigate to="/signin" replace />}
    />
  );
};

export default ProtectedRoute;
