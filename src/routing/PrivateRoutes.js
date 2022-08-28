import React from "react";
import { useSelector } from "react-redux";
import Login from "../pages/login/Login";
const PrivateRoutes = (props) => {
  const isUserLoggined = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  const { Component } = props;
  if (!isUserLoggined) return <Login />;
  return <Component />;
};

export default PrivateRoutes;
