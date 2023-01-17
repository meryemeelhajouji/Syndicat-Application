import React from "react";
import { Navbar, Sidebar } from "../../components/dashboard/index";
import { useEffect, useState } from "react";
import { getAllAppartement } from "../../utils/requests";
import { NavLink,useNavigate } from "react-router-dom";
import { deleteAppartement } from "../../utils/requests";

function Appartement() {
  const [appartement, setAppartement] = useState([]);
  const [setError] = useState(false);

  const [SetSuccess] = useState();
  const [SetError] = useState();
  const Navigate=useNavigate()

  useEffect(() => {
    getAllAppartement()
      .then((response) => {
        console.log(response);
        setAppartement(response.appartement);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  const Supp = (_id) => {
    deleteAppartement(_id)
      .then((res) => {
        if (res.status === 200) {
          SetSuccess(res.data);     
             window.location.reload(false);
        }
        else {console.log(res.data)}
        
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="bg-gray-300 h-screen flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex  ">
        <div className="lg:block">
          <Sidebar />
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

            <div className="overflow-x-auto card shadow-xl">
              <div className="navbar bg-base-100">
                <div className="navbar-start">
                  <p className="btn btn-ghost normal-case text-xl">
                    appartement
                  </p>
                </div>
                <div className="navbar-center hidden lg:flex"></div>
                <div className="navbar-end">
                  <NavLink
                    end
                    to="/addAppartement"
                    className={`
                        }`}
                  >
                    {" "}
                    <button className="btn btn-active btn-primary">
                      Add Appartement
                    </button>
                  </NavLink>
                </div>
              </div>
              <table className="table w-full">
                <tr className="text-black">
                  <th></th>
                  <th>Adresse</th>
                  <th>numero</th>
                  <th>loue</th>
                  <th>Surface </th>
                  <th>prix </th>
                  <th>action </th>
                </tr>
                {appartement.map((app) => (
                  <tbody>
                    <tr>
                      <th></th>
                      <td>{app.Adresse}</td>
                      <td>{app.numero}</td>
                      <td>{app.loue}</td>
                      <td>{app.surface}</td>
                      <td>{app.prix}</td>
                      <td>
                        <button
                          className="btn  btn-primary  mt-5"
                          onClick={() => Supp(app._id)}
                        >
                          Supp{" "}
                        </button>
                      </td>
                      <td>
                        <NavLink
                          
                          to={`/editAppartement/${app._id}`}                     
                        >
                          <button className="btn  btn-danger  mt-5">
                            Modifier{" "}
                          </button>
                        </NavLink>
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

export default Appartement;
