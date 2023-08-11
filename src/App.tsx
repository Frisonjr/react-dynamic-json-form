import { Form } from "antd";
import "./App.css";
import CustomDynamicForm from "./components/CustomDynamicForm";
import dataFormClient from "./utils/JsonForms/dataFormClient";

function App() {
  const [addForm] = Form.useForm();
  return (
    <div className="App">
      <CustomDynamicForm
        form={addForm}
        mode={"modal"}
        onFinish={() => {}}
        customDataForm={dataFormClient}
      />
    </div>
  );
}

export default App;
