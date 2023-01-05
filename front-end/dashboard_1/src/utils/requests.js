import axios from "axios";
const host = "http://localhost:5000";

axios.defaults.withCredentials = true;



export async function loginUser(user) {
  const res = await axios.post(`${host}/api/auth/login`, user);
  return res.data;
}
// appartemet API
export async function getAllAppartement() {
  const res = await axios.get(`${host}/api/appartement/`);
  return res.data;
}

export async function getAppartementById(id) {
  const res = await axios.get(`${host}/api/appartemet/${id}`);
  return res.data;
}
export async function addAppartement(product) {
  const res = await axios.post(`${host}/api/appartemet/`, product);
  return res.data;
}
export async function deleteAppartement(id) {
  const res = await axios.delete(`${host}/api/appartemet/${id}`);
  return res.data;
}
export async function updateAppartement(id, product) {
  const res = await axios.put(`${host}/api/products/${id}`, product);
  return res.data;
}



