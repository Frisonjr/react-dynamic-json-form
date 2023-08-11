import React, { useState } from "react";
import { Button, Divider, Form, FormInstance, Modal, Typography } from "antd";
import SelectFieldType from "./SubCustomDynamicForms/SelectFieldType";
import "./CustomDynamicForm.scss";

interface Props {
  form: FormInstance;
  onFinish?: (values: any) => void;
  initialValues?: Models.CustomDynamicData;
  mode: "in_page" | "modal";
  customDataForm: Models.CustomDynamicData[];
  extraFieldSet?: React.ReactNode;
}

const CustomDynamicForm: React.FC<Props> = ({
  form,
  onFinish = () => {},
  initialValues: rawValues = {} as Models.CustomDynamicData,
  mode = "in_page",
  customDataForm,
  extraFieldSet = <></>,
}) => {
  const initialValues = React.useMemo(() => {
    return {
      ...rawValues,
    };
  }, [rawValues]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formValues = form.getFieldsValue();
  const keyValuePairs = Object.entries(formValues);

  return (
    <>
      <Form
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="group-form-dynamic"
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={initialValues}
      >
        {customDataForm.map(({ group, fields }, indexGrupo) => (
          <div key={indexGrupo} className={`group-form-dynamic`}>
            <Divider orientation="left">
              <div className="divider">
                <Typography.Title level={5}>{group}</Typography.Title>
              </div>
            </Divider>
            {fields &&
              fields.map((field, key) => (
                <>
                  <SelectFieldType
                    form={form}
                    fieldIndex={key}
                    field={field}
                    mode={mode}
                  />
                </>
              ))}
          </div>
        ))}
        {extraFieldSet}
      </Form>

      <Button
      style={{
        marginBottom: 20,
      }}
        onClick={() => {
          form.submit();
          setIsModalOpen(true);
        }}
        type="primary"
      >
        Submit
      </Button>

      <Modal
        title="Your form values"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          {keyValuePairs.map(
            ([key, value]) =>
              value !== undefined && (
                <li key={key}>
                  <strong>{key}:</strong> {String(value)}
                </li>
              )
          )}
        </ul>
      </Modal>
    </>
  );
};

export default CustomDynamicForm;
