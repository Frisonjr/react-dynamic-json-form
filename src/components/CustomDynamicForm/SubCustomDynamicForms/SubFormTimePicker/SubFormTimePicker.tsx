import { Form, TimePicker } from "antd";
import * as React from "react";
import defaultFormRules from "../../../../utils/defaultFormRules";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
}
const SubFormTimePicker: React.FC<Props> = ({ field, disableAll, key }) => {
  return (
    <Form.Item
      key={key}
      name={field.name}
      label={field.label}
      rules={field.required ? defaultFormRules : undefined}
    >
      <TimePicker
        defaultValue={field.value ? field.value : undefined}
        format={field.timeFormat ? field.timeFormat : "HH:mm"}
      />
    </Form.Item>
  );
};

export default SubFormTimePicker;
