import BasicLayout from "@/layouts/BasicLayout";
import Dashboard from "@/pages/dashboard";
import React from "react";
import { Navigate, RouteObject } from "react-router-dom";
// const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const routers = [
  {
    path: "/",
    element: <BasicLayout></BasicLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/dashboard"}></Navigate>,
      },
      {
        path: "/dashboard",
        title: "分析页",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/quanlantu",
        title: "全览图",
        element: <div>全览图</div>,
      },
      {
        path: "/bianjiye",
        title: "编辑页",
        element: <div>编辑页</div>,
      },
      {
        path: "/biaodanye",
        title: "表单页",
        element: <div>表单页</div>,
      },
      {
        path: "/403",
        title: "403",
        element: <div>403</div>,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];

export default routers;
