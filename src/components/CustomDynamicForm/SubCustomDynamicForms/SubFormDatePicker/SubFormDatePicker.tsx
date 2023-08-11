import { DatePicker, Form } from "antd";
import * as React from 'react'
import defaultFormRules from "../../../../utils/defaultFormRules";
import { ExtraStringField } from "..";
import "./SubFormDatePicker.scss";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
}
const SubFormDatePicker: React.FC<Props> = ({ field, disableAll, key }) => {
  return (
    <div key={key} style={{ position: "relative" }} id={`select-date-${key}`}>
      <Form.Item
        name={field.name}
        label={field.label}
        rules={field.required ? defaultFormRules : undefined}
      >
        <DatePicker
          showTime={field.showTime}
          disabled={disableAll}
          getPopupContainer={() =>
            document.getElementById(`select-date-${key}`)!!
          }
          className="date-picker-content"
          format={field.showTime ? "DD/MM/YYYY HH:mm" : "DD/MM/YYYY"}
          placeholder={`Inform ${field.label.toLowerCase()}`}
        />
      </Form.Item>
      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}
    </div>
  );
};

export default SubFormDatePicker;
