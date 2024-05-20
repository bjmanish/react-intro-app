import ClassComponent from "./pages/ClassComponent";
import FunctionalComponent from "./pages/FunctionalComponent";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";


function App() {
  const company = "DevTown";
  // const setNameConfig = "rk"

  const [name, setName]= useState("rohan");
  const [nameConfig, setNameConfig] = useState("defalutValue")

  return (
    <Routes>
      <Route path="/" element={<ClassComponent />}/>
      <Route path="/functional-component" element={<FunctionalComponent />} />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Functional Component</h1>
    //     <ClassComponent />
    //     <FunctionalComponent name={name} age={10} company={company} setName={setName}/>
    //     <FunctionalComponent nameConfig={nameConfig} age={10} company={company} setNameConfig={setNameConfig}/>
    //   </header>
    // </div>
  );
}

export default App;
