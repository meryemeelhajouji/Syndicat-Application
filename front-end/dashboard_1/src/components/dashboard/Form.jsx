import React from "react";

function Form() {
  return (
    <div className="overflow-x-auto card shadow-xl">
    <form
          className="col-lg-3 col-md-4 col-10 mx-auto text-center"
         
        >
          <a
            className="navbar-brand mx-auto mt-2 flex-fill text-center"
            href="./index.html"
          >
            <img src="dfe" alt="ffe" />
          </a>
          <h1 className="h6 mb-3">Sign in</h1>
          <div className="form-group">
            <label for="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control form-control-lg"
              placeholder="Email address"
              required=""
              name="email"
             
            />
          </div>
          <div className="form-group">
            <label for="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control form-control-lg"
              placeholder="Password"
              required=""
              name="password"
             
            />
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Stay logged in{" "}
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Let me in
          </button>
          <p className="mt-5 mb-3 text-muted">© SyMe2020</p>
        </form>
  </div>
  );
}

export default Form;
