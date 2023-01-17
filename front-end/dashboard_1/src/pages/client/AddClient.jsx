import React, { useState } from "react";
import { Navbar, Sidebar } from "../../components/dashboard/index";
import { addClient } from "../../utils/requests";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddClient() {
  const [client, setClient] = useState(false);
  const [myError, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setClient(() => ({
      ...client,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    addClient(client)
      .then((response) => {
        console.log(response.message);
        setClient(true);
        setError(null);
        navigate("/client");
      })
      .catch(function (error) {
        setError(error.response.data.message);
        setClient(false);
        toast.error(error.response.data.message);
        if (client === false) {
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
                  <label htmlFor="inputEmail" className="sr-only">
                    name
                  </label>
                  <input
                    type="text"
                    id="inputEmail"
                    className="form-control form-control-lg"
                    placeholder="name"
                    required=""
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword" className="sr-only">
                    CIN
                  </label>
                  <input
                    type="text"
                    id="inputPassword"
                    className="form-control form-control-lg"
                    placeholder="cin"
                    required=""
                    name="cin"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword" className="sr-only">
                    Tele
                  </label>
                  <input
                    type="text"
                    id="inputPassword"
                    className="form-control form-control-lg"
                    placeholder="tele"
                    required=""
                    name="tel"
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

export default AddClient;
