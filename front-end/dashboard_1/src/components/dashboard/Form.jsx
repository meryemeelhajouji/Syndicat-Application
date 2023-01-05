import React from "react";

function Form() {
  return (
    <div className="overflow-x-auto card shadow-xl">
    <form
          className="col-lg-3 col-md-4 col-10 mx-auto text-center"
         
        >
       
          <h1 className="h6 mb-3 mt-5">add</h1>
          <div className="form-group">
            <label for="inputEmail" className="sr-only">
              Numero
            </label>
            <input
              type="text"
              id="inputEmail"
              className="form-control form-control-lg"
              placeholder="numero"
              required=""
              name="text"
             
            />
          </div>
          <div className="form-group">
            <label for="inputPassword" className="sr-only">
              surface
            </label>
            <input
              type="text"
              id="inputPassword"
              className="form-control form-control-lg"
              placeholder="surface"
              required=""
              name="text"
             
            />
          </div>
          <div className="form-group">
            <label for="inputPassword" className="sr-only">
              price
            </label>
            <input
              type="text"
              id="inputPassword"
              className="form-control form-control-lg"
              placeholder="price"
              required=""
              name="text"
             
            />
          </div>
        
          <button className="btn btn-lg btn-primary btn-block mt-5" type="submit">
          add
          </button>
          <p className="mt-5 mb-3 text-muted">© SyMe2020</p>
        </form>
  </div>
  );
}

export default Form;
