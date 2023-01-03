import React from "react";
import logo from "../assets/logo.PNG"
function Login() {
  return (
    <div className="wrapper vh-100">
    <div className="row align-items-center h-100">
      <form className="col-lg-3 col-md-4 col-10 mx-auto text-center">
        <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
         <img src={logo} alt="ffe"/>
        </a>
        <h1 className="h6 mb-3">Sign in</h1>
        <div className="form-group">
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control form-control-lg" placeholder="Email address" required="" autofocus=""/>
        </div>
        <div className="form-group">
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control form-control-lg" placeholder="Password" required=""/>
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
