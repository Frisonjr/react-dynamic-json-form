import "./App.css";
import CustomDynamicForm from "./components/CustomDynamicForm";
import dataFormClient from "./utils/JsonForms/dataFormClient";

function App() {
  return (
    <div className="App">
      <CustomDynamicForm
        mode={"modal"}
        onFinish={() => {}}
        customDataForm={dataFormClient}
      />
    </div>
  );
}

export default App;
