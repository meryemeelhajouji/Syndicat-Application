import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {FaUserCircle} from '../../assets/icons/index';

function UserMenu() {
    const navigate = useNavigate()
    function logOut()
    {
      localStorage.clear();
      navigate("/")
    }




  return (
    <div className="relative inline-flex">

<div className="dropdown">
  <div>
  <label tabIndex={0} className=" m-1"> Bonjour mery</label>
  {/* <FaUserCircle/> */}
  </div>

  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li> <button className=" btn-ghost" 
     onClick={logOut}
     >Logout</button> </li>

 
  
  </ul>
</div>


       
    </div>
  )
}

export default UserMenu;