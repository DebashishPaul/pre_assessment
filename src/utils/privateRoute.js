import React from "react";
import { Navigate } from "react-router-dom";
import { merchantRoute } from "../contants/Constants";
import { asyncLocalStorage } from "./asyncLocalStorage";
// import jwt_decode from "jwt-decode";
// import { getCookie } from "./authAxios";

function PrivateRoute({ Component,userType,position,setPosition,route }) {
  const isLoggedIn = () => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return false;
    }

    // const decodedToken = jwt_decode(token);
    // const currentTime = new Date().getTime() / 1000;
    // return decodedToken.exp > currentTime;
    return true;
  };

  if (isLoggedIn()) {
    return (
      <Component
        // userType={userType}
        // position={position}
        // setPosition={setPosition}
        // route={route}
      />
    );
  }

  return <Navigate to={merchantRoute.SIGNUP} replace />;
}

export default PrivateRoute;
