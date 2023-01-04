import "./App.css";
import "./style/app-light.css"
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import  Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div>
        <Router>
     
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}

      </Routes>     
        

    </Router>
    </div>
  );
}

export default App;
