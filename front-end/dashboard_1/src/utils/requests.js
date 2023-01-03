import axios from "axios";
const host = "http://localhost:5000";

axios.defaults.withCredentials = true;



export async function loginUser(user) {
  const res = await axios.post(`${host}/api/auth/login`, user);
  return res.data;
}


