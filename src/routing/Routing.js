import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import AddProperty from "../pages/addProperty/addProperty";
import PrivateRoutes from "./PrivateRoutes";
import ChangePassword from "../pages/changePassword/ChangePassword";
import Register from "../pages/register/Register";

const Routing = (props) => {
  const isUserLoggined = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home modalOpen={props.modalOpen} />} />
          <Route
            path="/login"
            element={!isUserLoggined ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!isUserLoggined ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/add-properties"
            element={<PrivateRoutes Component={AddProperty} />}
          />
          <Route
            path="/change-password"
            element={<PrivateRoutes Component={ChangePassword} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Routing;
