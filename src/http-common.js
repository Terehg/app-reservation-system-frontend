import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8183/operations-reservation",
  headers: {
    "Content-type": "application/json"
  }
});