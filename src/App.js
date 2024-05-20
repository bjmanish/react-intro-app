import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import ClassComponent from './pages/claassComponents';
import FunctionComponent from "./pages/functionComponent";

// HOC Layout
import BaseHoc from './hoc/BaseHoc';

// function App() {
//   const play = "Cricket"; 
//   const [name, setName] = useState("Manish");
//   return (
//     <div className="App">
//       <ClassComponent/>
//       <FunctionComponent
//       name = {name}
//       age = {20}
//       play = {play}
//       setName = {setName}
//       />
//     </div>
//   );
// }

 function App() {

  const play = "Cricket"; 
  const [name, setName] = useState("Manish");

  return (
    <Routes>
      <Route path='/' element={<BaseHoc><ClassComponent/></BaseHoc> }/> 
      <Route path='/functional-component' element={<BaseHoc><FunctionComponent
      name = {name}
      age = {20}
      play = {play}
      setName = {setName}
      /></BaseHoc>}/>
    </Routes>
  );
};


export default App;