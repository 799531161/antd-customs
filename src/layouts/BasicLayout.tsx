import Access from "@/access";
import { PieChartOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Layout, Menu, Typography } from "antd";
import React, { FC, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./BasicLayout.less";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const BasicLayout: FC<any> = () => {
  const localtion = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [keyPath, setkeyPath] = useState<string[]>([localtion.pathname]);

  const nav = useNavigate();

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const onHome = () => {
    nav("/");
  };

  const routers = [
    {
      path: "/dashboard",
      title: "分析页",
    },
    {
      path: "/quanlantu",
      title: "全览图",
    },
    {
      path: "/bianjiye",
      title: "编辑页",
    },
    {
      path: "/biaodanye",
      title: "表单页",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className={styles.logo} onClick={onHome}>
          <img
            src="https://pic2.zhimg.com/v2-f75754669240c86d867050f9e2e25537_1440w.jpg?source=172ae18b"
            alt=""
          />
        </div>
        <Menu
          selectedKeys={keyPath}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={(item) => {
            setkeyPath(item.keyPath);
            nav({
              pathname: item.key,
            });
          }}
        >
          {routers.map((item) => {
            return (
              <Menu.Item key={item.path} icon={<PieChartOutlined />}>
                {item.title}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <div style={{ textAlign: "right" }}>
            {/* <Title level={5}>h1. Ant Design</Title> */}
            <Avatar
              size="large"
              icon={
                <img src="https://pic2.zhimg.com/v2-f75754669240c86d867050f9e2e25537_1440w.jpg?source=172ae18b" />
              }
            />
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            {keyPath.map((item) => {
              return (
                <Breadcrumb.Item
                  onClick={() => {
                    console.log(666);
                  }}
                  key={item}
                >
                  {item.slice(1)}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Access></Access>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
