
import "./App.css";
import "./style/app-light.css"
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>     
        

    </Router>
    </div>
  );
}

export default App;
