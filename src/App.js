
import "./App.css";

import EmpListing from "./EmpListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeEdit from "./EmployeeEdit";

function App() {
  return (
    <div className="App">
   
      <h1>React JS CEUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmployeeCreate />}></Route>
          <Route path="/employee/detail/:empid" element={<EmployeeDetails />}></Route>
          <Route path="/employee/edit/:empid" element={<EmployeeEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
