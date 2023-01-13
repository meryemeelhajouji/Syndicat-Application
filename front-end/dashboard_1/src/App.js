import "./App.css";
import "./style/app-light.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Appartement from "./pages/appartement/Appartement";
import AddAppartement from "./pages/appartement/AddAppartement";
import Client from "./pages/client/Clinets";
import AddClient from "./pages/client/AddClient";
import Paiement from "./pages/paiement/Paiement";
import AddPaiement from "./pages/paiement/AddPaiement";
import ProtectRoute  from "./utils/ProtectRoute";





function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
         

          <Route element={<ProtectRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              
              <Route path="/appartement" element={<Appartement />} />
              <Route path="/addAppartement" element={<AddAppartement />} />

              <Route path="/client" element={<Client />} />
              <Route path="/addClient" element={<AddClient />} />

              <Route path="/paiement" element={<Paiement />} />
              <Route path="/addpaiement" element={<AddPaiement />} />
        </Route>

          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
