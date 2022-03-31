import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
const root = document.getElementById("root");
import zhCN from "antd/lib/locale/zh_CN";
import { HashRouter } from "react-router-dom";
import App from "./App";
ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <App></App>
    </ConfigProvider>
  </HashRouter>,
  root
);
