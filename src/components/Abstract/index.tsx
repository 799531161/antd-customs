import { Select, SelectProps } from "antd";
import { DefaultOptionType } from "antd/lib/select";
import React, { Component, ReactNode } from "react";

interface DataSourceType {
  label: string;
  value: any;
  [name: string]: any;
}

interface State {
  dataSource: DataSourceType[];
  value: any;
}

interface Props extends SelectProps {
  onChange?: (e: any) => void;
}

abstract class Animal extends Component<Props, State> {
  public abstract getData(): DataSourceType[];

  state: Readonly<State> = {
    dataSource: [],
    value: undefined,
  };

  public componentDidMount() {
    const dataSource = this.getData();
    this.setState({
      dataSource,
    });
    type framework = ["vue", "react", "angular"];
    type frameworkVal1 = framework[any];
    let abc: frameworkVal1 = "angular";
    // console.log(MappedType);
  }

  onChange = (value: any, option: DefaultOptionType | DefaultOptionType[]) => {
    console.log(value, option);
  };

  onSelect = (e) => {
    const { onChange } = this.props;
    this.setState({
      value: e,
    });
    if (onChange) {
      onChange(e);
    }
  };

  onSearch = (e) => {
    console.log(e);
  };

  render(): ReactNode {
    const { dataSource } = this.state;
    return (
      <Select
        {...this.props}
        style={{ width: "100%" }}
        onChange={this.onChange}
        onSelect={this.onSelect}
        // onSearch={this.onSearch}
      >
        {dataSource.map((item) => {
          return (
            <Select.Option {...item} key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select>
    );
  }
}

export default Animal;
