import React from "react";
import { Navbar, Sidebar } from "../../components/dashboard/index";
import { useEffect, useState } from "react";
import {getAllClient} from "../../utils/requests"
import { NavLink , useNavigate } from "react-router-dom";
import { deleteClient } from "../../utils/requests";



function Client() {
  const [client, setClient] = useState([]);
  const [ setError] = useState(false);

  const [SetSuccess]=useState()
  const [SetError]=useState(false)
  
  const navigate = useNavigate();

  useEffect(() => {
    getAllClient()
      .then((response) => {
        console.log(response)
        setClient(response.client);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  const onDelete = (_id ,e) => {
    e.preventDefault();
    deleteClient(_id)
      .then((res) => {
          if(res.status===201) {
               SetSuccess(res.data)
          navigate("/client")
          } else
           SetError(res.data)
        
      })
      .catch((e) => console.log(e));
  };
  

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
              /client <hr className="my-2 p-0" />
            </h2>
           
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les Client <hr className="my-2 p-0" />
            </h2>
        

         
            <div className="overflow-x-auto card shadow-xl">
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <p className="btn btn-ghost normal-case text-xl">client</p>
              </div>
              <div className="navbar-center hidden lg:flex"></div>
              <div className="navbar-end">
                <NavLink
                  end
                  to="/addClient"
                  className={`
                        }`}
                >
                  {" "}
                  <button className="btn btn-active btn-primary">
                    Add Client
                  </button>
                </NavLink>
              </div>
            </div>
            <table className="table w-full">
              <tr className="text-black">
                <th></th>
                <th>name</th>
                <th>CIN</th>
                <th>Tele </th>
                <th>action </th>
              </tr>
              {client.map((app) => (
              <tbody>
                <tr>
                  <th></th>
                  <td>{app.name}</td>
                  <td>{app.cin} </td>
                  <td>{app.tel}</td>
                  <td>
                    <button className="btn  btn-primary  mt-5" 
                    onClick={(e) => onDelete(app._id, e)}>
                      Supp{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
                ))}
            </table>
          </div>
      
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Client;
