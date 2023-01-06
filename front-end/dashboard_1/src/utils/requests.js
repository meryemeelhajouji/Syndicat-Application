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
  const res = await axios.get(`${host}/api/appartement/${id}`);
  return res.data;
}
export async function addAppartement(appartement) {
  const res = await axios.post(`${host}/api/appartement/`, appartement);
  return res.data;
}
export async function deleteAppartement(id) {
  const res = await axios.delete(`${host}/api/appartement/${id}`);
  return res.data;
}
export async function updateAppartement(id, product) {
  const res = await axios.put(`${host}/api/appartement/${id}`, product);
  return res.data;
}




// client API
export async function getAllClient() {
  const res = await axios.get(`${host}/api/client/`);
  return res.data;
}

export async function getClientById(id) {
  const res = await axios.get(`${host}/api/client/${id}`);
  return res.data;
}
export async function addClient(client) {
  const res = await axios.post(`${host}/api/client/`, client);
  return res.data;
}
export async function deleteClient(id) {
  const res = await axios.delete(`${host}/api/client/${id}`);
  return res.data;
}
export async function updateClient(id, product) {
  const res = await axios.put(`${host}/api/client/${id}`, product);
  return res.data;
}
