import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function UserMenu() {
  const { user, setUser } = useContext(UserContext);

  setUser(localStorage.getItem("name"));

  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    setUser({});
    navigate("/");
  }

  return (
    <div className="relative inline-flex">
      <div className="dropdown">
        <div>
          <label tabIndex={0} className=" m-1">
            {" "}
            Bonjour {user}
          </label>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            {" "}
            <button className=" btn-ghost" onClick={logOut}>
              Logout
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserMenu;
