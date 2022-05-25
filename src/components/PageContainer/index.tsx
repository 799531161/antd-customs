import { Card, CardProps } from "antd";
import React from "react";

const PageContainer = (props: CardProps) => {
  //   const {} = props;
  return (
    <Card {...props} bordered={false}>
      {props.children}
    </Card>
  );
};

export default PageContainer;
