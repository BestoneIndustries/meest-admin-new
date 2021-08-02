import axios from "axios";
import { url } from "../apiUrl";

export const setAuthHeader = (jwt) => async () => {
  axios.defaults.headers.common["x-token"] = `${jwt}`;
  axios.defaults.headers.common["token"] = jwt;
  axios.defaults.headers.common["Content-Type"] = "application/*";
};

export const postData = async (subUrl, body = {}) => {
  console.log('bodychecker--->',body)
  axios.defaults.headers.common["x-token"] = localStorage.getItem("meestToken");
  axios.defaults.headers.common["Content-Type"] = "application/*";

  const { data } = await axios.post(url + subUrl, body);
  return data;
};

export const postDataAll = async (subUrl) => {
  axios.defaults.headers.common["x-token"] = localStorage.getItem("meestToken");
  axios.defaults.headers.common["Content-Type"] = "application/*";

  const { data } = await axios.get(url + subUrl);
  return data;
};
export const deleteData = async (subUrl) => {
  axios.defaults.headers.common["x-token"] = localStorage.getItem("meestToken");
  axios.defaults.headers.common["Content-Type"] = "application/*";

  const { data } = await axios.delete(url + subUrl);
  return data;
};