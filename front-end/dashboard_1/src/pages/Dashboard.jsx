import React from "react";
import { useState } from "react";
import { Navbar, Sidebar, Card, Table,Form } from "../components/dashboard/index";

function Dashboard() {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-gray-300 h-screen flex-col">
      <div>
        <Navbar  />
      </div>
      <div className="flex  ">
        <div className="lg:block">
          <Sidebar  />
        </div>
        <div className="m-3 w-100">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Aperçu de votre tableau de bord <hr className="my-2 p-0" />
            </h2>
            <Card />
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les Commandes <hr className="my-2 p-0" />
            </h2>
            <Table />
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les Commandes <hr className="my-2 p-0" />
            </h2>
            <Form  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
