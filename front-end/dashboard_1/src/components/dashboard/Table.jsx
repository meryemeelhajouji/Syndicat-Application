import React from "react";
import { NavLink } from "react-router-dom";

function Table({ appartement }) {
  const { numero, loue, surface, prix } = appartement;

  return (
    <div className="overflow-x-auto card shadow-xl">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <p className="btn btn-ghost normal-case text-xl">appartement</p>
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
          <th>numero</th>
          <th>loue</th>
          <th>Surface </th>
          <th>prix </th>
          <th>action </th>
        </tr>

        <tbody>
          <tr>
            <th>1</th>
            <td>{numero}</td>
            <td>{loue} </td>
            <td>{surface}</td>
            <td>{prix}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
