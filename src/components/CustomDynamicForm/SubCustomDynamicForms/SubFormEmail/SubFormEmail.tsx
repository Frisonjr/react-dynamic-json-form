import { Input } from "antd";
import { Form } from "antd";
import { capitalize } from "lodash";
import React from "react";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
}
const SubFormEmail: React.FC<Props> = ({ key, field, disableAll }) => {
  return (
    <Form.Item
      key={key}
      name={field.name}
      label={"E-mail"}
      rules={[
        {
          required: field.required,
          message: `${capitalize(field.name as string)} é obrigatório!`,
        },
        {
          pattern:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          message: "E-mail inválido!",
        },
      ]}
    >
      <Input
        disabled={disableAll}
        defaultValue={field.value ? field.value : undefined}
        placeholder="Insira um email"
      />
    </Form.Item>
  );
};

export default SubFormEmail;
