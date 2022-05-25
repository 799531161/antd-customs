import PageContainer from "@/components/PageContainer";
import { Button } from "antd";
import React, { FC } from "react";
import { FormProps } from "./hoc";

interface Props extends FormProps {}
interface State {}
const Dashboard: FC<Props> = (props: Props) => {
  return (
    <PageContainer size="small" title="仪表板">
      <Button type="primary">123</Button>
      123 asdasdsad
    </PageContainer>
  );
};

export default Dashboard;
