import React, { ClassType, Component, FC } from "react";

export interface FormProps {
  form: {
    getFieldDecorator(
      field: string,
      option: any
    ): (dom: any) => React.ReactNode;
    getFieldsValue(field: string, option: any): React.ReactNode;
    getFieldValue: () => {};
    validateFields(Callback);
  };
}
export type Callback = () => void;

interface State {}
const kFormCreate = (Cmp): any => {
  return class extends Component<any, State> {
    state: State = {};
    options = {};

    static getDerivedStateFromProps(p, r) {
      return null;
    }

    handleChange = (e) => {
      let { name, value } = e.target;

      this.setState({ [name]: value });
      this.options[name] = "";
    };
    // 高阶组件再接收一个组件，返回一个新组件  redux中的connect也是高阶组件
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      // this.state[field] = option.initValue;
      return (InputCmp) => {
        //克隆一份
        return React.cloneElement(InputCmp, {
          name: field,
          value: this.state[field] || "",
          onChange: this.handleChange,
        });
      };
    };
    // 把注册的字段都收集起来，然后return出去
    getFieldsValue = () => {
      return { ...this.state };
    };
    getFieldValue = (field) => {
      return this.state[field];
    };
    validateFields = (callback) => {
      // 校验错误信息
      const errors = {};
      const state = { ...this.state };

      for (let name in this.options) {
        if (!state[name]) {
          // 没有输入，判断为不合法
          errors[name] = "error";
        }
      }
      if (JSON.stringify(errors) === "{}") {
        // 合法
        callback(undefined, state);
      } else {
        callback(errors, state);
      }
    };
    render() {
      return (
        <Cmp
          // getFieldDecorator={this.getFieldDecorator}
          // getFieldsValue={this.getFieldsValue}
          // getFieldValue={this.getFieldValue}
          // validateFields={this.validateFields}
          form={{
            getFieldDecorator: this.getFieldDecorator,
            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue,
            validateFields: this.validateFields,
          }}
        />
      );
    }
  };
};

export default kFormCreate;
