import React, { useState, useEffect } from "react";
import { Navbar, Sidebar } from "../../components/dashboard/index";
import { updateAppartement, getAppartementById } from "../../utils/requests";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function EditAppartement() {
  const [apparetemet, setAppartement] = useState(false);
  const [myError, setError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAppartementById(id)
      .then((response) => {
        setAppartement(response.oneAppartement);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const handleChange = (e) => {
    setAppartement(() => ({
      ...apparetemet,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    updateAppartement(id, apparetemet)
      .then((response) => {
        console.log(response.message);
        setAppartement(true);
        setError(null);
        navigate("/appartement");
      })
      .catch(function (error) {
        setError(error.response.data.message);
        setAppartement(false);
        toast.error(error.response.data.message);
        if (apparetemet === false) {
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
              <form
                className="col-lg-3 col-md-4 col-10 mx-auto text-center"
                onSubmit={handleSubmit}
              >
                <h1 className="h6 mb-3 mt-5">add appartement</h1>
                <div className="form-group">
                  <label for="inputEmail" className="sr-only">
                    Adresse
                  </label>
                  <input
                    type="text"
                    id="inputEmail"
                    className="form-control form-control-lg"
                    placeholder="Adresse"
                    required=""
                    name="Adresse"
                    onChange={handleChange}
                    value={apparetemet.Adresse}
                  />
                </div>
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
                    value={apparetemet.numero}
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
                    value={apparetemet.surface}
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
                    value={apparetemet.prix}
                  />
                </div>
                <div className="form-group">
                  <label for="inputPassword" className="sr-only">
                    status
                  </label>
                  <input
                    type="text"
                    id="inputPassword"
                    className="form-control form-control-lg"
                    placeholder="loue"
                    required=""
                    name="loue"
                    onChange={handleChange}
                    value={apparetemet.loue}
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

export default EditAppartement;
