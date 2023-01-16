import React, { useState, useEffect } from "react";
import { Navbar, Sidebar } from "../../components/dashboard/index";
import { addPaiement, getAllAppartement } from "../../utils/requests";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddPaiement() {
  const [paiement, setPaiement] = useState(false);
  const [myError, setError] = useState(false);
  const [appartement, setAppartement] = useState([]);

  useEffect(() => {
    getAllAppartement()
      .then((response) => {
        console.log(response);
        setAppartement(response.appartement);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPaiement(() => ({
      ...paiement,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    addPaiement(paiement)
      .then((response) => {
        console.log(response.message);
        setPaiement(true);
        setError(null);
        navigate("/paiement");
      })
      .catch(function (error) {
        setError(error.response.data.message);
        setPaiement(false);
        toast.error(error.response.data.message);
        if (paiement === false) {
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
              /paiement <hr className="my-2 p-0" />
            </h2>
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les paiement <hr className="my-2 p-0" />
            </h2>
            <div className="overflow-x-auto card shadow-xl">
              <form
                className="col-lg-3 col-md-4 col-10 mx-auto text-center"
                onSubmit={handleSubmit}
              >
                <h1 className="h6 mb-3 mt-5">add</h1>
                <div className="form-group">
                  <label for="inputEmail" className="sr-only">
                    Date
                  </label>
                  <input
                    type="date"
                    id="inputEmail"
                    className="form-control form-control-lg"
                    placeholder="Date"
                    required=""
                    name="Date"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="inputEmail" className="sr-only">
                    appartement
                  </label>
                  <select
                    name="appartementid"
                    className="form-control text-dark  "
                    onChange={handleChange}
                  >
                    <option value={appartement}>
                      --Please choose Appartement--
                    </option>
                    {appartement.map((app) => {
                      return (
                        <option value={app._id}>
                          {app.numero}
                        </option>
                      );
                    })}
                  </select>
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

export default AddPaiement;
