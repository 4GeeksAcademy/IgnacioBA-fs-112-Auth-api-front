import React from "react";
import { Navigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PrivateRoute = ({ children }) => {
  const { store } = useGlobalReducer();

  if (!store.isAuth) {
    
    return <Navigate to="/login" replace />;
  }
  return children;
};