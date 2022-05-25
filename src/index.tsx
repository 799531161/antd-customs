import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
const root = document.getElementById("root");
import zhCN from "antd/lib/locale/zh_CN";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./store";

// const store = createStore();
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <App></App>
      </ConfigProvider>
    </HashRouter>
  </Provider>,
  root
);
