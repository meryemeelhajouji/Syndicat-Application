import React, { useState } from "react";
import { Navbar, Sidebar } from "../../components/dashboard/index";
import { addAppartement } from "../../utils/requests";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Appartement() {
  const [apparetemet, setAppartement] = useState(false);
  const [myError, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAppartement(() => ({
      ...apparetemet,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    addAppartement(apparetemet)
      .then((response) => {
        console.log(response.message);
        setAppartement(true);
        setError(null);
        // navigate("/dashboard");
      })
      .catch(function (error) {
        setError(error.response.data.message);
        setAppartement(false);
        toast.error(error.response.data.message);
        if (apparetemet == false) {
          console.log(myError);
        }
      });
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
              /appartement <hr className="my-2 p-0" />
            </h2>
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les Appartement <hr className="my-2 p-0" />
            </h2>
            <div className="overflow-x-auto card shadow-xl">
              <form className="col-lg-3 col-md-4 col-10 mx-auto text-center"
               onSubmit={handleSubmit}>
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
                    name="numero"
                    onChange={handleChange}
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
                    name="surface"
                    onChange={handleChange}
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
                    name="prix"
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="btn btn-lg btn-primary btn-block mt-5"
                  type="submit"
                >
                  add
                </button>
                <p className="mt-5 mb-3 text-muted">© SyMe2020</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Appartement;
