import CustomSelect from "@/components/FormSelect";
import { Input, message } from "antd";
import React, { Component, ReactNode } from "react";
import kFormCreate, { FormProps } from "./hoc";
const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };
import styles from "./index.less";
interface Props extends FormProps {}

interface State {}

@kFormCreate
class Dashboard extends Component<Props, State> {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props.form;
    validateFields((err, values) => {
      if (err) {
        for (const key in err) {
          message.error(`${key}:${err[key]}`);
        }
        return;
        // console.log("err", err);
      }

      console.log("success", values);
    });
    // console.log("submit", getFieldsValue(), getFieldValue("password"));
  };

  render() {
    // console.log(this.props.form.getFieldDecorator);
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles.box1}>
        <div>
          <CustomSelect
            showSearch
            mode="tags"
            allowClear
            placeholder="亲选择"
          ></CustomSelect>
        </div>
        <h3>MyFormPage</h3>
        {getFieldDecorator("name", { initValue: 1, rules: [nameRules] })(
          <Input />
        )}
        {getFieldDecorator("password", { rules: [passwordRules] })(
          <Input
            value={1}
            type="password"
            placeholder="please input ur password"
          />
        )}
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default Dashboard;
