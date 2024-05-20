import { useState } from 'react';
import './App.css';
import ClassComponent from './pages/claassComponents';
import FunctionComponent from "./pages/functionComponent";

//HOC Layout

function App() {
  const play = "Cricket"; 
  const [name, setName] = useState("Manish");
  return (
    <div className="App">
      <ClassComponent/>
      <FunctionComponent
      name = {name}
      age = {20}
      play = {play}
      setName = {setName}
      />
    </div>
  );
 
 /* return (
    <Route>
      <Route path='/' element={<BaseHoc><ClassComponent/></BaseHoc>}/>
      <Route path='/functional-component' element={<BaseHoc><FunctionComponent
      name = {name}
      age = {20}
      play = {play}
      setName = {setName}
      /></BaseHoc>}/>
    </Route>
  );*/
}


export default App;