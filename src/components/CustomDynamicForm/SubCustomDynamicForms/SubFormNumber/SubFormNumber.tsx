import { Form, InputNumber } from "antd";
import * as React from "react";
import defaultFormRules from "../../../../utils/defaultFormRules";
import { ExtraStringField } from "..";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
}
const SubFormNumber: React.FC<Props> = ({ field, disableAll, key }) => {
  return (
    <>
      <Form.Item
        key={key}
        name={field.name}
        label={field.label}
        rules={[
          {
            type: "number",
            max: field.max,
            min: field.min,
            message: `The value must be between ${field.min} and ${field.max}`,
          },
          ...(field.required ? defaultFormRules : []),
        ]}
      >
        <InputNumber
          max={field.max}
          min={field.min}
          className="input-size"
          placeholder={`Inform ${field.label.toLowerCase()}`}
          disabled={disableAll}
          value={field.value ? field.value : undefined}
        />
      </Form.Item>
      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}
    </>
  );
};

export default SubFormNumber;
