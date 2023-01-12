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
export async function updateAppartement(id, appartement) {
  const res = await axios.put(`${host}/api/appartement/${id}`, appartement);
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
export async function updateClient(id, client) {
  const res = await axios.put(`${host}/api/client/${id}`, client);
  return res.data;
}



// paiement API
export async function getAllPaiement() {
  const res = await axios.get(`${host}/api/paiement/`);
  return res.data;
}

export async function getPaiementById(id) {
  const res = await axios.get(`${host}/api/paiement/${id}`);
  return res.data;
}
export async function addPaiement(paiement) {
  const res = await axios.post(`${host}/api/paiement/`, paiement);
  return res.data;
}
export async function deletePaiement(id) {
  const res = await axios.delete(`${host}/api/paiement/${id}`);
  return res.data;
}
export async function updatePaiement(id, paiement) {
  const res = await axios.put(`${host}/api/paiement/${id}`, paiement);
  return res.data;
}
