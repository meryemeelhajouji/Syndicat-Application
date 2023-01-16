import React from "react";
import { Navbar, Sidebar } from "../../components/dashboard/index";
import { useEffect, useState } from "react";
import { getAllPaiement } from "../../utils/requests";
import { NavLink } from "react-router-dom";
import { deletePaiement } from "../../utils/requests";

function Paiement() {
  const [paiement, setPaiement] = useState([]);
  const [setError] = useState(false);

  const [SetSuccess] = useState();
  const [SetError] = useState();

  useEffect(() => {
    getAllPaiement()
      .then((response) => {
        console.log(response);
        setPaiement(response.paiement);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  const onDelete = (_id) => {
    deletePaiement(_id)
      .then((res) => {
        if (res.status === 201) SetSuccess(res.data);
        else SetError(res.data);
        window.location.reload(false);
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
              /paiement <hr className="my-2 p-0" />
            </h2>
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              paiement <hr className="my-2 p-0" />
            </h2>

            <div className="overflow-x-auto card shadow-xl">
              <div className="navbar bg-base-100">
                <div className="navbar-start">
                  <p className="btn btn-ghost normal-case text-xl">paiement</p>
                </div>
                <div className="navbar-center hidden lg:flex"></div>
                <div className="navbar-end">
                  <NavLink
                    end
                    to="/addpaiement"
                    className={`
                        }`}
                  >
                    {" "}
                    <button className="btn btn-active btn-primary">
                      Add Paiement
                    </button>
                  </NavLink>
                </div>
              </div>
              <table className="table w-full">
                <tr className="text-black">
                  <th></th>
                  <th>date</th>
                  <th>appartement</th>
                  <th>action </th>
                </tr>
                {paiement.map((app) => (
                  <tbody>
                    <tr>
                      <th></th>
                      <td>{app.Date}</td>
                      <td>{app.appartementid.Adresse}</td>

                      <td>
                        <button
                          className="btn  btn-primary  mt-5"
                          onClick={() => onDelete(app._id)}
                        >
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

export default Paiement;
