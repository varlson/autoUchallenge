import axios from "axios";

const ApiRequest = axios.create({
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL: "https://focomail-server.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiRequest;
