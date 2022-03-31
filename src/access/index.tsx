import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Access = () => {
  const localtion = useLocation();
  //   useEffect(() => {}, []);
  console.log(localtion.pathname === "/biaodanye");

  if (localtion.pathname === "/biaodanye") {
    return <Navigate to={"/403"}></Navigate>;
  }

  return <Outlet></Outlet>;
};

export default Access;
