import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const defaultOptions = {
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
    "Control-Allow-Origin": "*",
  },
};

export default axios.create(defaultOptions);
