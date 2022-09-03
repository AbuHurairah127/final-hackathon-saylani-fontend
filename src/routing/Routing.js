import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import AddProperty from "../pages/addProperty/addProperty";
import FilterProperty from "../pages/filterProperty/FilterProperty";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../pages/register/Register";
import MyProperties from "../pages/myProperties/MyProperties";

const Routing = (props) => {
  const isUserLoggined = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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
            path="/my-properties"
            element={<PrivateRoutes Component={MyProperties} />}
          />
          <Route path="/filter-properties" element={<FilterProperty />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Routing;
