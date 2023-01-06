import React from "react";
import { NavLink } from "react-router-dom";
import { deleteAppartement } from "../../utils/requests";
import { useState } from 'react';


function Table({ appartement }) {
  const { numero, loue, surface, prix, _id } = appartement;
  const [Success,SetSuccess]=useState()
  const [Error,SetError]=useState()

  const onDelete = (_id) => {
    deleteAppartement(_id)
      .then((res) => {
          if(res.status===201) SetSuccess(res.data)
          else SetError(res.data)
        window.location.reload(false);
      })
      .catch((e) => console.log(e));
  };
  

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
            <td>
              <button className="btn  btn-primary  mt-5" 
              onClick={() => onDelete(_id)}>
                Supp{" "}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

