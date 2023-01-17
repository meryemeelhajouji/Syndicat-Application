import React, { useState } from "react";
import logo from "../assets/logo.PNG";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/requests";

function Login() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [myError, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(() => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    loginUser(user)
      .then((response) => {
        
        localStorage.setItem("token", response.token) 
        localStorage.setItem("name", response.user.name) 

        console.log(response.user.name)
        navigate("/dashboard");

      })
      .catch(function (error) {
        setError(error.response.data.message);
        setUser(null)
        toast.error(error.response.data.message);
        if (user==null ) {
         console.log(myError)
        }
      });
  };

  return (
    <div className="wrapper vh-100">
      <div className="row align-items-center h-100">
        <form
          className="col-lg-3 col-md-4 col-10 mx-auto text-center"
          onSubmit={handleSubmit}
        >
          <a
            className="navbar-brand mx-auto mt-2 flex-fill text-center"
            href="./index.html"
          >
            <img src={logo} alt="ffe" />
          </a>
          <h1 className="h6 mb-3">Sign in</h1>
          <div className="form-group">
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control form-control-lg"
              placeholder="Email address"
              required=""
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control form-control-lg"
              placeholder="Password"
              required=""
              name="password"
              onChange={handleChange}
            />
          </div>
       
          <button className="btn btn-lg btn-primary btn-block" type="submit">
           Login
          </button>
          <p className="mt-5 mb-3 text-muted">© SyMe2020</p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
