import React from "react";
import logo from "../assets/logo.PNG"
import { loginUser } from "../utils/requests";
import Toaster from "toastr";
import { useState } from "react";


function Login() {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
  
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
    const handleChange = (e) => {
        const data = {
          ...values,
          [e.target.name]: e.target.value,
        };
    
        setValues(data);
      };
      
  console.log(values)
    const handleSubmit = (e) => {
      e.preventDefault();
      loginUser(values)
        .then((success) => {
          setError(null);
          setSuccess(success.data.message);
          Toaster.success(success.data.message, "Success", {
            positionClass: "toast-bottom-left",
          });
        })
        .catch((error) => {
          setError(error.response.data.message);
          setSuccess(null);
          if (error.response.data.message) {
            Toaster.warning(error.response.data.message, "warning!", {
              positionClass: "toast-bottom-left",
            });
          }
        });
    };


  return (
    <div className="wrapper vh-100">
    <div className="row align-items-center h-100">
      <form className="col-lg-3 col-md-4 col-10 mx-auto text-center"  onSubmit={handleSubmit}>
        <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
         <img src={logo} alt="ffe"/>
        </a>
        <h1 className="h6 mb-3">Sign in</h1>
        <div className="form-group">
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" 
          id="inputEmail" 
          className="form-control form-control-lg"
           placeholder="Email address"
           required="" 
           name="email"
           onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" 
          className="form-control form-control-lg"
           placeholder="Password"
            required=""
            name="password"
            onChange={handleChange}
            />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Stay logged in </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Let me in</button>
        <p className="mt-5 mb-3 text-muted">© SyMe2020</p>
      </form>
    </div>
  </div>
  );
}

export default Login;
