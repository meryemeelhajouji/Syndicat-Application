import React from "react";
import { Navbar, Sidebar, Card, Form } from "../components/dashboard/index";

function Dashboard() {
  return (
    <div className="bg-gray-300 h-screen flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex  ">
        <div className="lg:block">
          <Sidebar />
        </div>
      
      </div>
    </div>
  );
}

export default Dashboard;
