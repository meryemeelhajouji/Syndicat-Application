import React from "react";
import { Navbar, Sidebar } from "../../components/dashboard/index";
import { useEffect, useState } from "react";
import { getAllPaiement } from "../../utils/requests";
import { NavLink } from "react-router-dom";
import { deletePaiement } from "../../utils/requests";
import PrintComponents from "react-print-components";
import Facture from "./Facture";

function Paiement() {
  const [paiement, setPaiement] = useState([]);
  const [data, setData] = useState([]);
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
                  <th className="text-center">action </th>
                </tr>
                {paiement.map((app) => (
                  <tbody>
                    <tr>
                      <th></th>
                      <td>{app.Date}</td>
                      <td>{app.appartementid.Adresse}</td>

                      <td className="text-center">
                        <button
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          onClick={() => onDelete(app._id)}
                        >
                          Supp{" "}
                        </button>

                        <NavLink to={`/editpaiement/${app._id}`}>
                          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Modifier{" "}
                          </button>
                        </NavLink>
                        <button onClick={() => setData(app)}>
                          <PrintComponents
                            trigger={
                              <button
                                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                onClick={() => setData(app)}
                              >
                                Print
                              </button>
                            }
                          >
                            <Facture facture={data} />
                            {console.log(paiement)}
                          </PrintComponents>
                        </button>
                        {/* <PrintComponents
                          trigger={
                            <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                              Print
                            </button>
                          }
                        >
                          <Facture facture={paiement} />
                          {console.log(paiement)}
                        </PrintComponents> */}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Facture facture={data} />
    </div>
  );
}

export default Paiement;
