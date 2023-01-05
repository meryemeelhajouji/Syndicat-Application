import React from "react";
import { Navbar, Sidebar, Form } from "../../components/dashboard/index";

function Appartement() {
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
              /appartement <hr className="my-2 p-0" />
            </h2>
           
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les Appartement <hr className="my-2 p-0" />
            </h2>
            <Form />
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Appartement;
