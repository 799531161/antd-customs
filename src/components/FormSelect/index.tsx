import Animal from "../Abstract";
// import {  } from "antd/lib/select/utils/iconUtil";
import { SelectProps } from "rc-select";
// RcSelectProps
class CustomSelect extends Animal {
  getData(): Array<{ label: string; value: any }> {
    return [
      {
        label: "第一个",
        value: 1,
      },
      {
        label: "第二个",
        value: 2,
      },
    ];
  }
}

export default CustomSelect;
